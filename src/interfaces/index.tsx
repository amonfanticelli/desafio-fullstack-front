import { ReactNode } from "react";

export interface UserProps {
  children: ReactNode;
}

export interface IClient {
  id?: string;
  fullName: string;
  email: string;
  cellphone: string;
  password?: string;
  isActive?: boolean;
  createdAt?: Date;
  userPasswordCheck?: string;
  contacts?: [];
}

export interface IClientLogin {
  email: string;
  password: string;
}
export interface IContact {
  id?: string;
  fullName: string;
  email: string;
  cellphone: string;
  createdAt?: Date;
}
