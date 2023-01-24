import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { GlobalProvider } from './context/GlobalContext';

//authcontext
import { AuthProvider } from './context/AuthContext';

export const GlobalStyle = createGlobalStyle`
  body {
    background: #F1F1F1;
    padding: 0;
    margin: 0;
  }

  * {
    box-sizing: border-box;
    font-family: Lato;
  }
`;

export function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>
          <GlobalStyle />
          <AppRoutes />
        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  );
}
