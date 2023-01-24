import { useContext, useEffect, useState } from 'react';

import documento from '../../assets/documento.svg';
import PacientesIcon from '../../assets/pacientes.svg';
import heart from '../../assets/heart.svg';
import apple from '../../assets/apple.svg';

import Card from '../../components/Cards/Card';
import { CardsGrid } from '../../components/Grid/CardsGrid';
import { GlobalContext } from '../../context/GlobalContext';

export default function AdminDashboardPage() {
  const { alimentos, pacientes, nutricionistas, consultas, setTitle } =
    useContext(GlobalContext);

  useEffect(() => {
    setTitle('Dashboard');
  });

  return (
    <CardsGrid>
      <Card
        number={consultas.length}
        caption='Consultas Realizadas'
        icon={documento}
      />
      <Card
        number={pacientes.length}
        caption='Pacientes Cadastrados'
        icon={PacientesIcon}
      />
      <Card
        number={nutricionistas.length}
        caption='Nutricionistas cadastrados'
        icon={heart}
      />
      <Card
        number={alimentos.length}
        caption='Alimentos Cadastrados'
        icon={apple}
      />
    </CardsGrid>
  );
}
