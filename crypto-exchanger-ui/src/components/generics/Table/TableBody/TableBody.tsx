import { TableElement } from "../interface/TableElement";
import { TableBodyContainer } from "./styles";

function TableBody({
  children,
  ...props
}: TableElement<HTMLTableSectionElement>) {
  return <TableBodyContainer {...props}>{children}</TableBodyContainer>;
}

export default TableBody;
