import {
  HTMLAttributes,
  OptionHTMLAttributes,
  SelectHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from "react";
import {
  SelectContainer,
  SelectOptionsContainer,
  SelectWrapper,
} from "./styles";
import { BsCaretDownFill } from "react-icons/bs";
import SelectOption from "./SelectOption/SelectOption";
import Label from "../Label";

export interface IOption extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  value: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: React.ReactElement<IOption>[] | React.ReactElement<IOption>;
  label: string;
  onClickEvent?: (value: string) => void;
}

function Select({
  children,
  label,
  onClickEvent,
  disabled,
  ...props
}: ISelectProps) {
  const [value, setValue] = useState(
    Array.isArray(children)
      ? children[0].props.value
      : children.props.value ?? ""
  );
  const [isSelecting, setIsSelecting] = useState(false);

  const isAnArray = Array.isArray(children);

  const options = useMemo(() => {
    return isAnArray
      ? children.map((child) => (
          <option
            key={child.props.value}
            {...(child.props as OptionHTMLAttributes<HTMLOptionElement>)}
          >
            {child.props.value}
          </option>
        ))
      : children;
  }, [value]);

  const optionSelected = useMemo(() => {
    return isAnArray
      ? children.filter((child) => child.props.value === value)[0].props
          .children
      : children.props.children;
  }, [value]);

  const handleClick = useCallback(
    (value: string) => {
      setValue(value);
      setIsSelecting(!isSelecting);

      if (onClickEvent) {
        onClickEvent(value);
      }
    },
    [isSelecting]
  );

  return (
    <SelectContainer>
      <Label>{label}</Label>
      <SelectWrapper
        disabled={disabled}
        type="button"
        onClick={() => setIsSelecting(!isSelecting)}
      >
        {optionSelected} <BsCaretDownFill />
      </SelectWrapper>
      {isSelecting && (
        <SelectOptionsContainer isActive={isSelecting}>
          {isAnArray ? (
            children.map((child) => (
              <SelectOption
                {...child.props}
                key={child.props.value}
                isSelected={value === child.props.value}
                onClick={(ev) => handleClick(child.props.value)}
              >
                {child.props.children}
              </SelectOption>
            ))
          ) : (
            <SelectOption
              isSelected={optionSelected === children.props.value}
              onClick={(ev) => handleClick(children.props.value)}
              {...children.props}
            >
              {children.props.children}
            </SelectOption>
          )}
        </SelectOptionsContainer>
      )}
      <select defaultValue={value} disabled={disabled} {...props}>
        {options}
      </select>
    </SelectContainer>
  );
}

export default Select;
