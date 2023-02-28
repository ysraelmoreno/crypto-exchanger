import styled from "styled-components";

export const Wrapper = styled.header`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const HeaderContainer = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  @media (min-width: 770px) {
    padding: 60px 15px;
    flex-direction: row;

    h1 {
      margin-left: 10px;
    }
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const ActionsContainer = styled.div`
  align-items: center;
  width: 100%;
  margin-top: 15px;
  display: flex;
  gap: 10px;
  flex-direction: column;

  p {
    display: none;
  }

  button {
    width: 100%;
  }

  @media (min-width: 770px) {
    flex-direction: row;
    margin-top: 27px;

    button:last-child {
      width: fit-content;
      margin-top: 20px;
    }
  }

  @media (min-width: 1024px) {
    p {
      display: block;
      margin-top: 20px;
    }
  } ;
`;

export const CurrencyContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
    width: 24px;
    height: 24px;
  }
`;
