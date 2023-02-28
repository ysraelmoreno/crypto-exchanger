import styled, { css, keyframes } from "styled-components";

interface ISelectOptionsContainerProps {
  isActive: boolean;
}

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  select {
    display: none;
  }
`;

export const SelectWrapper = styled.button`
  min-height: 45px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 5px;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  &:disabled {
    cursor: not-allowed;
    background-color: #eeeeee;
  }

  svg {
    margin-left: 10px;
    color: #9c9c9c;
    width: 10px;
  }
`;

const entryAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const SelectOptionsContainer = styled.div<ISelectOptionsContainerProps>`
  position: absolute;
  opacity: 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  max-width: 300px;
  width: 100%;
  border-radius: 8px;
  background-color: white;
  top: 70px;
  animation: ${entryAnimation} 0.2s ease;
  option {
    height: 48px;
    display: flex;
    align-items: center;
  }

  ${(props) =>
    props.isActive &&
    css`
      opacity: 1;
    `}
`;
