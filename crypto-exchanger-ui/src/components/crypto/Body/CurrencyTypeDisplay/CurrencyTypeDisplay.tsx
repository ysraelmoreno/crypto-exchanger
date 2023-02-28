import { CurrencyTypeDisplayContainer } from "./styles";

interface ICurrencyTypeDisplayProps {
  children: React.ReactNode;
  type?: "livePrice" | "exchanged" | "default";
}

function CurrencyTypeDisplay({
  children,
  type = "default",
}: ICurrencyTypeDisplayProps) {
  return (
    <CurrencyTypeDisplayContainer type={type}>
      {children}
    </CurrencyTypeDisplayContainer>
  );
}

export default CurrencyTypeDisplay;
