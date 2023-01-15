import { AppRoutes } from './Routes';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter } from 'react-router-dom';

import DesktopGrid from './components/Grid/DesktopGrid.jsx';
import Header from './components/Header/Header.jsx';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F1F1F1;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <Header />
      <DesktopGrid>
        <GlobalStyle />
        <Sidebar />
        <AppRoutes />
      </DesktopGrid>
    </BrowserRouter>
  );
}

export default App;
