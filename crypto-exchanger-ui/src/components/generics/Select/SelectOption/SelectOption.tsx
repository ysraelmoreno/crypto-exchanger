import { IOption } from "../Select";
import { SelectOptionContainer } from "./styles";

interface ISelectOption extends IOption {
  isSelected?: boolean;
}

function SelectOption({ children, isSelected, ...props }: ISelectOption) {
  return (
    <SelectOptionContainer isSelected={isSelected ?? false} {...props}>
      {children}
    </SelectOptionContainer>
  );
}

export default SelectOption;
