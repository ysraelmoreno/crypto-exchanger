import { LabelHTMLAttributes } from "react";
import { LabelWrapper } from "./styles";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

function Label({ children, ...props }: ILabelProps) {
  return <LabelWrapper {...props}>{children}</LabelWrapper>;
}

export default Label;
