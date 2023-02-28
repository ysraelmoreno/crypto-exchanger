import { InputHTMLAttributes } from "react";
import Label from "../Label";
import { InputContainer, InputWrapper } from "./styles";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...props }: IInputProps) {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputWrapper {...props} />
    </InputContainer>
  );
}

export default Input;
