import { TableElement } from "../interface/TableElement";
import { TableRowContainer } from "./styles";

function TableRow({ children, ...props }: TableElement<HTMLTableRowElement>) {
  return <TableRowContainer {...props}>{children}</TableRowContainer>;
}

export default TableRow;
