import { TableElement } from "../interface/TableElement";
import { TableHeadContainer } from "./styles";

function TableHead({ children, ...props }: TableElement<any>) {
  return <TableHeadContainer {...props}>{children}</TableHeadContainer>;
}

export default TableHead;
