import {
  AccessOperationEnum,
  AccessServiceEnum,
  requireNextAuth,
  withAuthorization,
  useAuthorizationApi,
} from '@roq/nextjs';
import { compose } from 'lib/compose';
import { Box, Button, Flex, IconButton, Link, Text, TextProps } from '@chakra-ui/react';
import { ColumnDef } from '@tanstack/react-table';
import { Error } from 'components/error';
import { SearchInput } from 'components/search-input';
import Table from 'components/table';
import { useDataTableParams, ListDataFiltersType } from 'components/table/hook/use-data-table-params.hook';
import { DATE_TIME_FORMAT } from 'const';
import d from 'dayjs';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import AppLayout from 'layout/app-layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo, useState } from 'react';
import { FiEdit2, FiPlus, FiTrash } from 'react-icons/fi';
import { PaginatedInterface } from 'interfaces';
import { withAppLayout } from 'lib/hocs/with-app-layout.hoc';
import { AccessInfo } from 'components/access-info';

import { LoanInterface } from 'interfaces/loan';
import { useRoqClient, useLoanFindManyWithCount } from 'lib/roq';
import { convertQueryToPrismaUtil } from 'lib/utils';

type ColumnType = ColumnDef<LoanInterface, unknown>;

interface LoanListPageProps {
  filters?: ListDataFiltersType;
  pageSize?: number;
  hidePagination?: boolean;
  showSearchFilter?: boolean;
  titleProps?: TextProps;
  hideTableBorders?: boolean;
  tableOnly?: boolean;
  hideActions?: boolean;
}

export function LoanListPage(props: LoanListPageProps) {
  const {
    filters = {},
    titleProps = {},
    showSearchFilter = true,
    hidePagination,
    hideTableBorders,
    pageSize,
    tableOnly,
    hideActions,
  } = props;

  const { hasAccess } = useAuthorizationApi();
  const { onFiltersChange, onSearchTermChange, params, onPageChange, onPageSizeChange, setParams } = useDataTableParams(
    {
      filters,
      searchTerm: '',
      pageSize,
      order: [
        {
          desc: true,
          id: 'created_at',
        },
      ],
    },
  );

  const roqClient = useRoqClient();
  const queryParams = useMemo(
    () =>
      convertQueryToPrismaUtil(
        {
          relations: ['vehicle', 'user', 'finance_manager.count', 'loan_officer.count'],
          searchTerm: params.searchTerm,
          searchTermKeys: ['loan_status.contains'],
          ...params.filters,
        },
        'loan',
      ),
    [params.searchTerm, params.filters, params.pageNumber, params.order, params.pageSize],
  );
  const { data, error, isLoading, mutate } = useLoanFindManyWithCount({
    skip: params.pageNumber * params.pageSize,
    take: params.pageSize,
    orderBy: {
      created_at: 'desc',
    },
    ...queryParams,
  });
  const router = useRouter();
  const [deleteError, setDeleteError] = useState(null);

  const handleDelete = async (id: string) => {
    setDeleteError(null);
    try {
      await roqClient.loan.delete({ where: { id } });
      await mutate();
    } catch (error) {
      setDeleteError(error);
    }
  };

  const handleView = (row: LoanInterface) => {
    if (hasAccess('loan', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)) {
      router.push(`/loans/view/${row.id}`);
    }
  };

  const columns: ColumnType[] = [
    { id: 'loan_amount', header: 'loan_amount', accessorKey: 'loan_amount' },
    { id: 'interest_rate', header: 'interest_rate', accessorKey: 'interest_rate' },
    { id: 'loan_term', header: 'loan_term', accessorKey: 'loan_term' },
    { id: 'monthly_payment', header: 'monthly_payment', accessorKey: 'monthly_payment' },
    { id: 'loan_status', header: 'Loan Status', accessorKey: 'loan_status' },
    hasAccess('vehicle', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'vehicle',
          header: 'Vehicle',
          accessorKey: 'vehicle',
          cell: ({ row: { original: record } }: any) => (
            <Link as={NextLink} onClick={(e) => e.stopPropagation()} href={`/vehicles/view/${record.vehicle?.id}`}>
              {record.vehicle?.make}
            </Link>
          ),
        }
      : null,
    hasAccess('user', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'user',
          header: 'User',
          accessorKey: 'user',
          cell: ({ row: { original: record } }: any) => (
            <Link as={NextLink} onClick={(e) => e.stopPropagation()} href={`/users/view/${record.user?.id}`}>
              {record.user?.email}
            </Link>
          ),
        }
      : null,
    hasAccess('finance_manager', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'finance_manager',
          header: 'Finance Manager',
          accessorKey: 'finance_manager',
          cell: ({ row: { original: record } }: any) => record?._count?.finance_manager,
        }
      : null,
    hasAccess('loan_officer', AccessOperationEnum.READ, AccessServiceEnum.PROJECT)
      ? {
          id: 'loan_officer',
          header: 'Loan Officer',
          accessorKey: 'loan_officer',
          cell: ({ row: { original: record } }: any) => record?._count?.loan_officer,
        }
      : null,

    !hideActions
      ? {
          id: 'actions',
          header: '',
          accessorKey: 'actions',
          cell: ({ row: { original: record } }: any) => (
            <Flex justifyContent="flex-end">
              <NextLink href={`/loans/view/${record.id}`} passHref legacyBehavior>
                <Button
                  onClick={(e) => e.stopPropagation()}
                  mr={2}
                  padding="0rem 8px"
                  height="24px"
                  fontSize="0.75rem"
                  variant="solid"
                  backgroundColor="state.neutral.transparent"
                  color="state.neutral.main"
                  borderRadius="6px"
                >
                  View
                </Button>
              </NextLink>
              {hasAccess('loan', AccessOperationEnum.UPDATE, AccessServiceEnum.PROJECT) && (
                <NextLink href={`/loans/edit/${record.id}`} passHref legacyBehavior>
                  <Button
                    onClick={(e) => e.stopPropagation()}
                    mr={2}
                    padding="0rem 0.5rem"
                    height="24px"
                    fontSize="0.75rem"
                    variant="outline"
                    color="state.info.main"
                    borderRadius="6px"
                    border="1px"
                    borderColor="state.info.transparent"
                    leftIcon={<FiEdit2 width="12px" height="12px" color="state.info.main" />}
                  >
                    Edit
                  </Button>
                </NextLink>
              )}
              {hasAccess('loan', AccessOperationEnum.DELETE, AccessServiceEnum.PROJECT) && (
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(record.id);
                  }}
                  padding="0rem 0.5rem"
                  variant="outline"
                  aria-label="edit"
                  height={'24px'}
                  fontSize="0.75rem"
                  color="state.error.main"
                  borderRadius="6px"
                  borderColor="state.error.transparent"
                  icon={<FiTrash width="12px" height="12px" color="error.main" />}
                />
              )}
            </Flex>
          ),
        }
      : null,
  ].filter(Boolean) as ColumnType[];
  const table = (
    <Table
      hidePagination={hidePagination}
      hideTableBorders={hideTableBorders}
      isLoading={isLoading}
      onPageChange={onPageChange}
      onPageSizeChange={onPageSizeChange}
      columns={columns}
      data={data?.data}
      totalCount={data?.count || 0}
      pageSize={params.pageSize}
      pageIndex={params.pageNumber}
      order={params.order}
      setParams={setParams}
      onRowClick={handleView}
    />
  );
  if (tableOnly) {
    return table;
  }

  return (
    <Flex direction="column" gap={{ md: 6, base: 7 }} shadow="none">
      <Flex justifyContent={{ md: 'space-between' }} direction={{ base: 'column', md: 'row' }} gap={{ base: '28px' }}>
        <Flex alignItems="center" gap={1}>
          <Text as="h1" fontSize="1.875rem" fontWeight="bold" color="base.content" {...titleProps}>
            Loans
          </Text>
          <AccessInfo entity="loan" />
        </Flex>

        {hasAccess('loan', AccessOperationEnum.CREATE, AccessServiceEnum.PROJECT) && (
          <NextLink href={`/loans/create`} passHref legacyBehavior>
            <Button
              onClick={(e) => e.stopPropagation()}
              height={'2rem'}
              padding="0rem 0.75rem"
              fontSize={'0.875rem'}
              fontWeight={600}
              bg="state.info.main"
              borderRadius={'6px'}
              color="base.100"
              _hover={{
                bg: 'state.info.focus',
              }}
              as="a"
            >
              <FiPlus size={16} color="state.info.content" style={{ marginRight: '0.25rem' }} />
              Create
            </Button>
          </NextLink>
        )}
      </Flex>
      {showSearchFilter && (
        <Flex
          flexDirection={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'flex-start', md: 'space-between' }}
          gap={{ base: 2, md: 0 }}
        >
          <Box>
            <SearchInput value={params.searchTerm} onChange={onSearchTermChange} />
          </Box>
        </Flex>
      )}

      {error && (
        <Box>
          <Error error={error} />
        </Box>
      )}
      {deleteError && (
        <Box>
          <Error error={deleteError} />{' '}
        </Box>
      )}
      {table}
    </Flex>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'loan',
    operation: AccessOperationEnum.READ,
  }),
  withAppLayout(),
)(LoanListPage);