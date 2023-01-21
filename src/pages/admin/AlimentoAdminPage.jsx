import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// components
import MainContent from '../../components/Containers/MainContent';
import { AlimentosContext } from '../../context/AlimentosContext';

export default function AlimentoAdminPage() {
  useEffect(() => {
    // altera o título da aba
    document.title = 'NutriDiet - Alimento';
  }, []);

  const { error, data, handleDelete } = useContext(AlimentosContext);
  const { id } = useParams();

  const [currentAlimento, setCurrentAlimento] = useState({});

  useEffect(() => {
    setCurrentAlimento(data.filter(item => item.id == id)[0]);
  }, [data]);

  return (
    <MainContent>
      {currentAlimento && (
        <>
          <Link to={`/alimentos`}>voltar</Link>
          <h1>{currentAlimento.name}</h1>
          <p>Tipo: {currentAlimento.type}</p>
          <p>Calorias: {currentAlimento.calories}</p>
          <p>Lipídios: {currentAlimento.lipids}</p>

          <Link to={`/alimentos/${id}/editar`}>Editar</Link>
          <button onClick={() => handleDelete(id)}>Excluir</button>
        </>
      )}
    </MainContent>
  );
}
