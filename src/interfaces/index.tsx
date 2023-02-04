import { ReactNode } from "react";

export interface UserProps {
  children: ReactNode;
}

export interface IClient {
  id?: string;
  fullName: string;
  email: string;
  cellphone: string;
  password: string;
  isActive?: boolean;
  createdAt?: Date;
  userPasswordCheck?: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}
export interface ICreateTransaction {
  usernameCredited: string;
  value: number;
}

export interface IListTransctions {
  id?: string;
  value: number;
  createdAt: Date;
}

export interface ITransactions {
  id?: string;
  value: number;
  createdAt: string;
  type: string;
}
export interface IAccount {
  id?: string;
  balance: number;
}
