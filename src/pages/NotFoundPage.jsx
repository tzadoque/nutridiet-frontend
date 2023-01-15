import { useContext, useEffect } from 'react';
import styled from 'styled-components';
import GlobalContext from '../context/GlobalContext';

const AlignCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export default function NotFoundPage() {
  const { setPageTitle } = useContext(GlobalContext);

  useEffect(() => {
    document.title = 'NutriDiet - 404 página não encontrada';

    setPageTitle('Página não encontrada');
  }, []);

  return (
    <AlignCenter>
      <h1>404 - Página não encontrada</h1>
    </AlignCenter>
  );
}
