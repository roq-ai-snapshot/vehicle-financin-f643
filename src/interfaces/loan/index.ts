import { FinanceManagerInterface } from 'interfaces/finance-manager';
import { LoanOfficerInterface } from 'interfaces/loan-officer';
import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface LoanInterface {
  id?: string;
  loan_amount: number;
  interest_rate: number;
  loan_term: number;
  monthly_payment: number;
  loan_status: string;
  vehicle_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  finance_manager?: FinanceManagerInterface[];
  loan_officer?: LoanOfficerInterface[];
  vehicle?: VehicleInterface;
  user?: UserInterface;
  _count?: {
    finance_manager?: number;
    loan_officer?: number;
  };
}

export interface LoanGetQueryInterface extends GetQueryInterface {
  id?: string;
  loan_status?: string;
  vehicle_id?: string;
  user_id?: string;
}
