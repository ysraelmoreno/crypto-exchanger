import { IExchangesData } from "../Body";
import MobileTableItem from "./MobileTableItem";
import { MobileTableContainer } from "./styles";

interface IMobileTableProps {
  items: IExchangesData[];
}

function MobileTable({ items }: IMobileTableProps) {
  return (
    <MobileTableContainer>
      {items.map((item) => (
        <MobileTableItem item={item} />
      ))}
    </MobileTableContainer>
  );
}

export default MobileTable;
