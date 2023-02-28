import { TableElement } from "../interface/TableElement";
import { TableDataContainer } from "./styles";

function TableData({ children, ...props }: TableElement<HTMLTableCellElement>) {
  return <TableDataContainer {...props}>{children}</TableDataContainer>;
}

export default TableData;
