import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { loanOfficerValidationSchema } from 'validationSchema/loan-officers';
import { UserInterface } from 'interfaces/user';
import { LoanInterface } from 'interfaces/loan';
import { LoanOfficerInterface } from 'interfaces/loan-officer';

function LoanOfficerCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: LoanOfficerInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.loan_officer.create({ data: values as RoqTypes.loan_officer });
      resetForm();
      router.push('/loan-officers');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<LoanOfficerInterface>({
    initialValues: {
      total_loans_processed: 0,
      total_loans_approved: 0,
      total_loans_rejected: 0,
      user_id: (router.query.user_id as string) ?? null,
      loan_id: (router.query.loan_id as string) ?? null,
    },
    validationSchema: loanOfficerValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Loan Officers',
              link: '/loan-officers',
            },
            {
              label: 'Create Loan Officer',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Loan Officer
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <NumberInput
            label="Total Loans Processed"
            formControlProps={{
              id: 'total_loans_processed',
              isInvalid: !!formik.errors?.total_loans_processed,
            }}
            name="total_loans_processed"
            error={formik.errors?.total_loans_processed}
            value={formik.values?.total_loans_processed}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_loans_processed', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Total Loans Approved"
            formControlProps={{
              id: 'total_loans_approved',
              isInvalid: !!formik.errors?.total_loans_approved,
            }}
            name="total_loans_approved"
            error={formik.errors?.total_loans_approved}
            value={formik.values?.total_loans_approved}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_loans_approved', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <NumberInput
            label="Total Loans Rejected"
            formControlProps={{
              id: 'total_loans_rejected',
              isInvalid: !!formik.errors?.total_loans_rejected,
            }}
            name="total_loans_rejected"
            error={formik.errors?.total_loans_rejected}
            value={formik.values?.total_loans_rejected}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('total_loans_rejected', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={() => roqClient.user.findManyWithCount({})}
            labelField={'email'}
          />
          <AsyncSelect<LoanInterface>
            formik={formik}
            name={'loan_id'}
            label={'Select Loan'}
            placeholder={'Select Loan'}
            fetcher={() => roqClient.loan.findManyWithCount({})}
            labelField={'loan_status'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/loan-officers')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'loan_officer',
    operation: AccessOperationEnum.CREATE,
  }),
)(LoanOfficerCreatePage);
