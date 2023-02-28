import styled, { css } from "styled-components";
import { IExchangesData } from "../../Body";

interface IExchangeTypeContainerProps {
  type: "livePrice" | "exchanged";
}

export const MobileItemContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #eff0f6;
  padding: 16px;
  border-radius: 12px;

  & + & {
    margin-top: 10px;
  }
`;

export const MobileTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ExchangeTypeContainer = styled.div<IExchangeTypeContainerProps>`
  width: 16px;
  height: 16px;
  border-radius: 50%;

  ${(props) =>
    props.type === "livePrice" &&
    css`
      background-color: #5dbe7e;
    `}

  ${(props) =>
    props.type === "exchanged" &&
    css`
      background-color: #6368df;
    `}
`;
