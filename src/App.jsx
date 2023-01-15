import { AppRoutes } from './Routes';
import { Sidebar } from './components/Sidebar/Sidebar.jsx';
import { BrowserRouter } from 'react-router-dom';

import DesktopGrid from './components/Grid/DesktopGrid.jsx';
import Header from './components/Header/Header.jsx';
import { createGlobalStyle } from 'styled-components';

//context
import GlobalContext from './context/GlobalContext';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    background: #F1F1F1;
    padding: 0;
    margin: 0;
  }
`;

function App() {
  const [pageTitle, setPageTitle] = useState('NutriDiet');
  const [user, setUser] = useState('Zadoque Teófilo');

  return (
    <BrowserRouter>
      <GlobalContext.Provider
        value={{ user, setUser, pageTitle, setPageTitle }}
      >
        <Header />
        <DesktopGrid>
          <GlobalStyle />
          <Sidebar />
          <AppRoutes />
        </DesktopGrid>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
