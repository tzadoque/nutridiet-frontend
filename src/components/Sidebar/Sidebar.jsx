import styled from 'styled-components';
import {
  AlimentosNavLink,
  ConsultasNavLink,
  DashboardNavLink,
  ProfissionaisNavLink,
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
    z-index: 9999;
    position: fixed;
    left: 0;
    bottom: 0px;
    order: 1;
    justify-content: center;
    align-items: flex-start;

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
          <DashboardNavLink to='/admin/dashboard' />
        </li>
        <li>
          <PacientesNavLink to='/admin/pacientes' />
        </li>
        <li>
          <ConsultasNavLink to='/admin/consultas' />
        </li>
        <li>
          <ProfissionaisNavLink to='/admin/profissionais' />
        </li>
        <li>
          <AlimentosNavLink to='/admin/alimentos' />
        </li>
      </ul>
    </CustomNav>
  );
}
