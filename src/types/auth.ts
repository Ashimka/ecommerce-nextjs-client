import { FieldErrors, UseFormRegister } from "react-hook-form";

export interface IInputs {
  phone: string;
  email: string;
  password: string;
}
export interface IAuthPageInput {
  register: UseFormRegister<IInputs>;
  errors: FieldErrors<IInputs>;
}