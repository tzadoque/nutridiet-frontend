import { useContext, useState } from 'react';
import { useEffect } from 'react';
// components
import MainContent from '../../../components/Containers/MainContent';
import { CustomTable } from '../../../components/Table/CustomTable';
import TopSearchBar from '../../../components/TopSearchBar';

import { AlimentosContext } from '../../../context/AlimentosContext';
import { GlobalContext } from '../../../context/GlobalContext';

export default function AlimentosAdminPage() {
  const { setTitle } = useContext(GlobalContext);

  useEffect(() => {
    // altera o título da aba
    document.title = 'NutriDiet - Alimentos';

    setTitle('Alimentos');
  }, []);

  const { error, loading, data, handleDelete } = useContext(AlimentosContext);

  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(
      data.map(item => {
        return {
          id: `#${item.id}`,
          name: item.name,
          type: item.type.replace(/-/g, ' '),
        };
      })
    );
  }, [data]);

  return (
    <MainContent>
      <TopSearchBar
        textButton='Cadastrar alimento'
        link='/alimentos/cadastro'
        placeholder='Pesquise pelo nome do alimento'
      ></TopSearchBar>
      {error && <p>{error}</p>}
      {!error && (
        <CustomTable
          titulos={['ID', 'Nome do alimento', 'Tipo']}
          elementos={filteredData}
          handleDelete={handleDelete}
          route='/alimentos'
        />
      )}
    </MainContent>
  );
}
