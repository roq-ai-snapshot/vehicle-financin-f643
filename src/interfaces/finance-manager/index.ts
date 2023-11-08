import { UserInterface } from 'interfaces/user';
import { LoanInterface } from 'interfaces/loan';
import { GetQueryInterface } from 'interfaces';

export interface FinanceManagerInterface {
  id?: string;
  user_id: string;
  loan_id: string;
  total_loans_managed?: number;
  total_loans_approved?: number;
  total_loans_rejected?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  loan?: LoanInterface;
  _count?: {};
}

export interface FinanceManagerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  loan_id?: string;
}
