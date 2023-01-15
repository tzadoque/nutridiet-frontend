import styled from 'styled-components';

const DesktopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 20fr;
  grid-template-rows: 1fr;
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  padding: 32px 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    padding: 32px 16px;
  }
`;

export default DesktopGrid;
