import { TableContainer, TableWrapper } from "./styles";

interface ITableProps {
  children: React.ReactNode;
}

function Table({ children }: ITableProps) {
  return (
    <TableWrapper>
      <TableContainer>{children}</TableContainer>
    </TableWrapper>
  );
}

export default Table;
