import styled from 'styled-components';

import { TableHead } from './TableHead';
import { TableBody } from './TableBody';
import { TableRow } from './TableRow';
import { Link } from 'react-router-dom';

import PlanilhaIcon from '../../assets/planilha.svg';

export const StyledTable = styled.div`
  width: 100%;
  font-family: Lato;
  padding: 16px 24px;
`;

export function CustomTable({ titulos, elementos, route }) {
  return (
    <StyledTable>
      <TableHead>
        <TableRow padding='8px 16px' background='#fff'>
          {titulos &&
            titulos.map(titulo => (
              <span className='td-head' key={titulo}>
                {titulo}
              </span>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {elementos &&
          elementos.map((elemento, index) => (
            <TableRow padding='20px 16px' background='#F4F4F4' key={index}>
              {Object.entries(elemento).map(([chave, valor]) => (
                <span className='tdata' key={chave}>
                  {valor}
                </span>
              ))}

              <span className='tdata'>
                <Link to={`${route}/${elemento.id.replace('#', '')}`}>
                  <img src={PlanilhaIcon} alt='' />
                </Link>
              </span>
            </TableRow>
          ))}
      </TableBody>
    </StyledTable>
  );
}
