import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useQuery } from 'react-query';
import GlobalContext from '../../../context/GlobalContext';

// components
import MainContent from '../../../components/Containers/MainContent';
import TopSearchBar from '../../../components/TopSearchBar';

export function PacientesAdminPage() {
  const { setPageTitle } = useContext(GlobalContext);

  // alterando o título da página
  useEffect(() => {
    // altera o título da aba
    document.title = 'NutriDiet - Pacientes';

    // altera o título do header usando o global context
    setPageTitle('Pacientes');
  }, []);

  // get random users
  const { data: pacientes, isFetching } = useQuery('getPacientes', async () => {
    const res = await axios.get('http://localhost:3000/users/roles/2');

    return res.data;
  });

  return (
    <MainContent>
      <TopSearchBar></TopSearchBar>
      {!isFetching && (
        <table>
          <thead>
            <tr>
              <th>CPF</th>
              <th>Nome do paciente</th>
              <th>Último atendimento</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pacientes &&
              pacientes.map(paciente => {
                return (
                  <tr key={paciente.id}>
                    <td>{paciente.cpf}</td>
                    <td>{paciente.name}</td>
                    <td>11/09/2022 às 15h30</td>
                    <td>Ativo</td>
                    <td>[]</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </MainContent>
  );
}
