import styled, { css } from "styled-components";

interface ICurrencyTypeDisplayProps {
  type?: "livePrice" | "exchanged" | "default";
}

export const CurrencyTypeDisplayContainer = styled.p<ICurrencyTypeDisplayProps>`
  ${(props) =>
    props.type === "livePrice" &&
    css`
      font-weight: bold;
      color: #5dbe7e;
    `}

  ${(props) =>
    props.type === "exchanged" &&
    css`
      font-weight: bold;
      color: #6368df;
    `}
`;
