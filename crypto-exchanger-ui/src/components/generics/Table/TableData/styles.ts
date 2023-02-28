import styled, { keyframes } from "styled-components";

const entryAnimation = keyframes`
  0% {
    opacity: 0;
    height: 0;
  }
  100% {
    opacity: 1;
    height: 54px;
  }
`;

export const TableDataContainer = styled.td`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  height: 54px;
  color: #000;
  animation: ${entryAnimation} 0.2s ease;
`;
