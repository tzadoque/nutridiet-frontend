import { useState } from 'react';

import documento from '../assets/documento.svg';
import pacientes from '../assets/pacientes.svg';
import heart from '../assets/heart.svg';
import apple from '../assets/apple.svg';

import Card from '../components/Cards/Card';
import { CardsGrid } from '../components/Grid/CardsGrid';

export function HomePage() {
  return (
    <CardsGrid>
      <Card number={16} caption='Consultas Realizadas' icon={documento} />
      <Card number={10} caption='Pacientes Cadastrados' icon={pacientes} />
      <Card number={8} caption='Dietas criadas' icon={heart} />
      <Card number={25} caption='Alimentos Cadastrados' icon={apple} />
      <Card number={25} caption='Alimentos Cadastrados' icon={apple} />
      <Card number={25} caption='Alimentos Cadastrados' icon={apple} />
      <Card number={25} caption='Alimentos Cadastrados' icon={apple} />
    </CardsGrid>
  );
}
