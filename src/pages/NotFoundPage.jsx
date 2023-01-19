import { useEffect } from 'react';
import styled from 'styled-components';

const AlignCenter = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

export default function NotFoundPage() {
  useEffect(() => {
    document.title = 'NutriDiet - 404 página não encontrada';
  }, []);

  return (
    <AlignCenter>
      <h1>404 - Página não encontrada</h1>
    </AlignCenter>
  );
}
