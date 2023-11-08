import * as yup from 'yup';

export const loanValidationSchema = yup.object().shape({
  loan_amount: yup.number().integer().required(),
  interest_rate: yup.number().integer().required(),
  loan_term: yup.number().integer().required(),
  monthly_payment: yup.number().integer().required(),
  loan_status: yup.string().required(),
  vehicle_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
