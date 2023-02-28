import Select, { SelectOption } from "@/components/generics/Select";
import {
  ActionsContainer,
  CurrencyContainer,
  HeaderContainer,
  InputsContainer,
  Wrapper,
} from "./styles";
import BitcoinIcon from "@/assets/btc.svg";
import EthereumIcon from "@/assets/eth.svg";
import UsIcon from "@/assets/us.svg";
import Input from "@/components/generics/Input";
import Button from "@/components/generics/Button";
import { CryptoIcons, CurrencyIcons } from "@/interfaces/currency";
import { useEffect, useState, MouseEvent } from "react";
import { api } from "@/services/api";
import { useWebSocket } from "@/contexts/WebSocket";
import { ExchangesType } from "@/interfaces/exchange";

function Header() {
  const [data, setData] = useState<any>({
    crypto: [],
    currency: [],
  });
  const [loading, setLoading] = useState(true);
  const [currencyTo, setCurrencyTo] = useState("USD");
  const [currencyFrom, setCurrencyFrom] = useState("BTC");
  const [firstAmount, setFirstAmount] = useState(0);
  const [secondAmount, setSecondAmount] = useState(0);
  const [timer, setTimer] = useState<any>(null);
  const [rates, setRates] = useState<any>([]);

  const socket = useWebSocket();

  const onSubmit = (ev: MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();

    clearTimeout(timer);

    const exchangedData = {
      dateTime: new Date().toString(),
      currencyTo,
      currencyFrom,
      firstAmount,
      secondAmount,
      type: ExchangesType.EXCHANGED,
    };

    socket.emit("saveCurrenciesConversion", JSON.stringify(exchangedData));
  };

  useEffect(() => {
    (async () => {
      const response = await api.get("/currency/rates");

      setRates(response.data.rates);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await api.get("/currency");

      setData(response.data);
      setLoading(false);
    })();
  }, []);

  const icons = (crypto: CryptoIcons) => {
    const iconsMapper = {
      bitcoin: BitcoinIcon,
      ethereum: EthereumIcon,
    };

    return iconsMapper[crypto];
  };

  const currencyIcons = (currency: CurrencyIcons) => {
    const iconsMapper = {
      usd: UsIcon,
    };

    return iconsMapper[currency];
  };

  if (loading) return <></>;

  return (
    <Wrapper>
      <HeaderContainer>
        <h1>Exchange</h1>
        <ActionsContainer>
          <InputsContainer>
            <Select
              onClickEvent={(value) => setCurrencyFrom(value)}
              label="Currency from"
            >
              {data?.cryptos?.map((crypto: any) => (
                <SelectOption key={crypto} value={crypto.value}>
                  <CurrencyContainer>
                    <img
                      src={icons(crypto.label.toLowerCase() as CryptoIcons)}
                    />
                    {crypto.label}
                  </CurrencyContainer>
                </SelectOption>
              ))}
            </Select>
            <Input
              label="Amount"
              type="number"
              onChange={(ev) => {
                setFirstAmount(Number(ev.target.value));

                const rate = rates.find(
                  (singleRate: any) => singleRate.name === currencyFrom
                );

                setSecondAmount(Number(ev.target.value) * rate.rate);
                clearTimeout(timer);

                const newTimeout = setTimeout(() => {
                  socket.emit(
                    "saveCurrenciesConversion",
                    JSON.stringify({
                      dateTime: new Date().toString(),
                      firstAmount: ev.target.value,
                      secondAmount: Number(ev.target.value) * rate.rate,
                      currencyFrom,
                      currencyTo,
                      type: ExchangesType.LIVE,
                    })
                  );
                }, 1000);
                setTimer(newTimeout);
              }}
              value={firstAmount}
            />
          </InputsContainer>
          <p>=</p>
          <InputsContainer>
            <Select
              onClickEvent={(value) => setCurrencyTo(value)}
              disabled={data?.currency?.length === 1 ? true : false}
              label="Currency to"
            >
              {data?.currency?.map((currency: any) => (
                <SelectOption key={currency} value={currency}>
                  <CurrencyContainer>
                    <img
                      src={currencyIcons(
                        currency.toLowerCase() as CurrencyIcons
                      )}
                    />
                    {currency}
                  </CurrencyContainer>
                </SelectOption>
              ))}
            </Select>
            <Input
              label="Amount"
              type="number"
              onChange={(ev) => {
                setSecondAmount(Number(ev.target.value));

                clearTimeout(timer);

                const findCurrency = rates.find(
                  (rate: any) => rate.name === currencyFrom
                );

                setFirstAmount(Number(ev.target.value) / findCurrency.rate);

                const newTimeout = setTimeout(() => {
                  socket.emit(
                    "saveCurrenciesConversion",
                    JSON.stringify({
                      dateTime: new Date().toString(),
                      firstAmount: Number(ev.target.value) / findCurrency.rate,
                      secondAmount: ev.target.value,
                      currencyFrom,
                      currencyTo,
                      type: ExchangesType.LIVE,
                    })
                  );
                }, 1000);

                setTimer(newTimeout);
              }}
              value={secondAmount}
            />
          </InputsContainer>
          <Button onClick={onSubmit}>Save</Button>
        </ActionsContainer>
      </HeaderContainer>
    </Wrapper>
  );
}

export default Header;
