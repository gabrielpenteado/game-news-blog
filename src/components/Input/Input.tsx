import { useState } from "react";
import { StyledInput, TextareaSpace } from "./Input.style";
// import { UseFormRegister, FieldValues } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  disabled?: boolean;
  isInput?: boolean;
  value?: string;
}

export function Input({
  type,
  placeholder,
  name,
  register,
  isInput = true,
  value: initialValue,
  disabled,
}: InputProps) {
  const [value, setValue] = useState(initialValue);

  const inputProps = {
    type,
    placeholder,
    ...register(name),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
    disabled,
  };

  if (value) inputProps.value = value;

  return (
    <>
      {isInput ? (
        <StyledInput {...inputProps} />
      ) : (
        <TextareaSpace {...inputProps} />
      )}
    </>
  );
}
