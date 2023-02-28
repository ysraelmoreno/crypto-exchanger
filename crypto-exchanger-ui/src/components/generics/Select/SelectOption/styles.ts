import styled, { css } from "styled-components";

interface ISelectOptionContainerProps {
  isSelected: boolean;
}

export const SelectOptionContainer = styled.div<ISelectOptionContainerProps>`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 10px;
  transition: all 0.2s ease;
  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    background-color: #dedcdc;
  }

  ${(props) =>
    props.isSelected &&
    css`
      background-color: #eeeeee;
    `}
`;
