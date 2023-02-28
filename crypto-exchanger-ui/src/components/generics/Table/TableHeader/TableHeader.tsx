import { TableElement } from "../interface/TableElement";
import { TableHeaderContainer } from "./styles";

function TableHeader({
  children,
  ...props
}: TableElement<HTMLTableHeaderCellElement>) {
  return <TableHeaderContainer {...props}>{children}</TableHeaderContainer>;
}

export default TableHeader;
