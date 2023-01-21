import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import DashboardIcon from '../../assets/dashboard.svg';
import DashboardLightIcon from '../../assets/dashboardLight.svg';
import Pacientes from '../../assets/pacientes.svg';
import PacientesLight from '../../assets/pacientesLight.svg';
import Consultas from '../../assets/consultas.svg';
import ConsultasLight from '../../assets/consultasLight.svg';
import Nutricionistas from '../../assets/nutricionistas.svg';
import NutricionistasLight from '../../assets/nutricionistasLight.svg';
import Alimentos from '../../assets/alimentos.svg';
import AlimentosLight from '../../assets/alimentosLight.svg';

export const CustomNavLink = styled(NavLink)`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s ease-in-out;
  background-repeat: no-repeat;
  background-position: center center;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover {
    background-color: #f4f4f4;
    transition: 0.2s ease-in-out;
  }

  &.active,
  &:hover.active {
    background-color: ${props => props.theme.colors.primary};
    transition: 0.2s ease-in-out;
  }
`;

export const DashboardNavLink = styled(CustomNavLink)`
  background-image: url(${DashboardIcon});

  &.active {
    background-image: url(${DashboardLightIcon});
  }
`;

export const PacientesNavLink = styled(CustomNavLink)`
  background-image: url(${Pacientes});

  &.active {
    background-image: url(${PacientesLight});
  }
`;

export const ConsultasNavLink = styled(CustomNavLink)`
  background-image: url(${Consultas});

  &.active {
    background-image: url(${ConsultasLight});
  }
`;

export const ProfissionaisNavLink = styled(CustomNavLink)`
  background-image: url(${Nutricionistas});

  &.active {
    background-image: url(${NutricionistasLight});
  }
`;

export const AlimentosNavLink = styled(CustomNavLink)`
  background-image: url(${Alimentos});

  &.active {
    background-image: url(${AlimentosLight});
  }
`;
