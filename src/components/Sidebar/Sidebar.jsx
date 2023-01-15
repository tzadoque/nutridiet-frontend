import styled from 'styled-components';
import {
  AlimentosNavLink,
  ConsultasNavLink,
  DashboardNavLink,
  NutricionistasNavLink,
  PacientesNavLink,
} from './SidebarLinks';

const CustomNav = styled.nav`
  width: 60px;
  height: fit-content;
  display: flex;
  background: #fff;
  padding: 8px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-sizing: border-box;
  }

  @media (max-width: 768px) {
    width: 100%;
    position: sticky;
    bottom: 0px;
    order: 1;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row;
    }
  }
`;

export function Sidebar() {
  return (
    <CustomNav>
      <ul>
        <li>
          <DashboardNavLink to='/' />
        </li>
        <li>
          <PacientesNavLink to='/users' />
        </li>
        <li>
          <ConsultasNavLink to='/consultas' />
        </li>
        <li>
          <NutricionistasNavLink to='/nutricionistas' />
        </li>
        <li>
          <AlimentosNavLink to='/alimentos' />
        </li>
      </ul>
    </CustomNav>
  );
}
