import Header from '../components/Header/Header';
import DesktopGrid from '../components/Grid/DesktopGrid';
import { GlobalStyle } from '../App';
import { Sidebar } from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function LayoutBase() {
  return (
    <>
      <Header />
      <DesktopGrid>
        <GlobalStyle />
        <Sidebar />
        <Outlet />
      </DesktopGrid>
    </>
  );
}
