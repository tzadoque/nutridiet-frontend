import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
// components
import MainContent from '../../../components/Containers/MainContent';
import { StyledTable } from '../../../components/Table/CustomTable';
import { TableBody } from '../../../components/Table/TableBody';
import { TableHead } from '../../../components/Table/TableHead';
import { TableRow } from '../../../components/Table/TableRow';
import TopSearchBar from '../../../components/TopSearchBar';
import PeopleIcon from '../../../assets/people.svg';

import { GlobalContext } from '../../../context/GlobalContext';

export default function AlimentosAdminPage() {
  const { setTitle, pacientes, loading } = useContext(GlobalContext);

  useEffect(() => {
    // altera o título da aba
    document.title = 'NutriDiet - Pacientes';

    setTitle('Pacientes');
  }, []);

  return (
    <MainContent>
      <TopSearchBar
        textButton='Cadastrar Paciente'
        link='/pacientes/cadastro'
        placeholder='Pesquise pelo nome do paciente'
      ></TopSearchBar>
      <StyledTable>
        <TableHead>
          <TableRow padding='8px 16px' background='#fff'>
            <span className='td-head'>ID</span>
            <span className='td-head'>Nome do paciente</span>
            <span className='td-head'>CPF</span>
            <span className='td-head'></span>
          </TableRow>
        </TableHead>
        <TableBody>
          {pacientes &&
            pacientes.map((paciente, index) => (
              <TableRow padding='20px 16px' background='#F4F4F4' key={index}>
                <span className='tdata'>{paciente.id}</span>
                <span className='tdata'>{paciente.name}</span>
                <span className='tdata'>{paciente.cpf}</span>

                <span className='tdata'>
                  <Link to={`/users/${paciente.id}`}>
                    <img src={PeopleIcon} alt='' />
                  </Link>
                </span>
              </TableRow>
            ))}
        </TableBody>
      </StyledTable>
    </MainContent>
  );
}
