import { StyledInput } from "./Input.style";
// import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
}

export function Input({ type, placeholder, name, register }: InputProps) {
  return (
    <StyledInput type={type} placeholder={placeholder} {...register(name)} />
  );
}
