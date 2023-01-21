import styled from 'styled-components';

export const TableRow = styled.div`
  background-color: ${props => props.background};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 0.5fr repeat(2, 1fr) 0.5fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding: ${props => props.padding};

  .tdata {
    font-size: 1rem;
    font-weight: 500;
    color: #292929;
  }

  .tdata:nth-last-child(1) {
    text-align: end;
  }
`;
