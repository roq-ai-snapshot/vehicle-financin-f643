import { LoanInterface } from 'interfaces/loan';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color?: string;
  vin: string;
  price: number;
  created_at?: any;
  updated_at?: any;
  loan?: LoanInterface[];

  _count?: {
    loan?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  vin?: string;
}
