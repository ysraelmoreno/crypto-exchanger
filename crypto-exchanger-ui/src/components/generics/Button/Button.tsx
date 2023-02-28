import { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, ...props }: IButtonProps) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
