import { StyledButton } from "./Button.style";

interface ButtonProps {
  type: string;
  text: string;
}

export function Button({ type, text }: ButtonProps) {
  return <StyledButton type={type}>{text}</StyledButton>;
}
