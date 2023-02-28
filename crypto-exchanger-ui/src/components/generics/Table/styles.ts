import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;

  table {
    border-collapse: collapse;
    letter-spacing: 1px;
    font-size: 0.8rem;
  }
`;

export const TableContainer = styled.table`
  width: 100%;

  th:first-child {
    border-right: 1px solid #9c9c9c;
  }

  tr:nth-child(even) td {
    background-color: #eeeeee;
  }

  tr:nth-child(odd) td {
    background-color: #ffffff;
  }

  caption {
    padding: 10px;
  }
`;
