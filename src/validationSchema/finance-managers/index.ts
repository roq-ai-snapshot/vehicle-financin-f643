import * as yup from 'yup';

export const financeManagerValidationSchema = yup.object().shape({
  total_loans_managed: yup.number().integer().nullable(),
  total_loans_approved: yup.number().integer().nullable(),
  total_loans_rejected: yup.number().integer().nullable(),
  user_id: yup.string().nullable().required(),
  loan_id: yup.string().nullable().required(),
});
