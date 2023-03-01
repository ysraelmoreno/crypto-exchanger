import { useEffect, useState } from "react";
import Table, {
  TableBody,
  TableData,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/generics/Table";
import { useWebSocket } from "@/contexts/WebSocket";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ExchangesType } from "@/interfaces/exchange";
import { api } from "@/services/api";
import CurrencyTypeDisplay from "./CurrencyTypeDisplay";
import MobileTable from "./MobileTable";
import { BodyContainer } from "./styles";

export interface IExchangesData {
  dateTime: string;
  currencyFrom: string;
  currencyTo: string;
  firstAmount: number;
  secondAmount: number;
  type: "exchanged" | "livePrice";
}

function Body() {
  const [exchangedData, setExchangedData] = useState<IExchangesData[]>([]);
  const [loading, setLoading] = useState(true);

  const isMobile = useMediaQuery({
    sm: "max-width: 768px",
  });

  const socket = useWebSocket();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("listCurrencies", (data) => {
      setExchangedData(data);
    });

    return () => {
      socket.off("connect");
      socket.off("listCurrencies");
    };
  }, [socket]);

  useEffect(() => {
    (async () => {
      const data = await api.get("/exchange");

      setExchangedData(data.data);

      setLoading(false);
    })();
  }, []);

  if (loading) return <></>;

  return (
    <BodyContainer>
      <h3>History</h3>
      {isMobile ? (
        <MobileTable items={exchangedData} />
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Date & Time</TableHeader>
              <TableHeader>Currency From</TableHeader>
              <TableHeader>First Amount</TableHeader>
              <TableHeader>Currency To</TableHeader>
              <TableHeader>Second Amount</TableHeader>
              <TableHeader>Type</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {exchangedData?.map((data) => (
              <TableRow key={`${data.secondAmount}-${Math.random() * 1000}`}>
                <TableData>
                  {new Intl.DateTimeFormat("pt-BR", {
                    hour: "2-digit",
                    minute: "2-digit",
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  }).format(new Date(data.dateTime))}
                </TableData>
                <TableData>{data.currencyFrom}</TableData>
                <TableData>{data.firstAmount}</TableData>
                <TableData>{data.currencyTo.toUpperCase()}</TableData>
                <TableData>{data.secondAmount}</TableData>
                <TableData>
                  <CurrencyTypeDisplay
                    type={
                      data.type === ExchangesType.EXCHANGED
                        ? "exchanged"
                        : "livePrice"
                    }
                  >
                    {data.type === ExchangesType.EXCHANGED
                      ? "Exchanged"
                      : "Live Price"}
                  </CurrencyTypeDisplay>
                </TableData>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </BodyContainer>
  );
}

export default Body;
