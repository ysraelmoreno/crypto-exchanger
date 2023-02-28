import { IExchangesData } from "../../Body";
import {
  ExchangeTypeContainer,
  MobileItemContainer,
  MobileTitleContainer,
} from "./styles";

interface IMobileTableItemProps {
  item: IExchangesData;
}

function MobileTableItem({ item }: IMobileTableItemProps) {
  return (
    <MobileItemContainer>
      <MobileTitleContainer>
        <h4>
          {item.currencyFrom} -{`>`} {item.currencyTo}
        </h4>

        <ExchangeTypeContainer type={item.type} />
      </MobileTitleContainer>
      <p>
        {item.currencyFrom} {item.firstAmount} -{`>`} {item.currencyTo}{" "}
        {item.secondAmount}
      </p>
    </MobileItemContainer>
  );
}

export default MobileTableItem;
