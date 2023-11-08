import { UserInterface } from 'interfaces/user';
import { LoanInterface } from 'interfaces/loan';
import { GetQueryInterface } from 'interfaces';

export interface LoanOfficerInterface {
  id?: string;
  user_id: string;
  loan_id: string;
  total_loans_processed?: number;
  total_loans_approved?: number;
  total_loans_rejected?: number;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  loan?: LoanInterface;
  _count?: {};
}

export interface LoanOfficerGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  loan_id?: string;
}
