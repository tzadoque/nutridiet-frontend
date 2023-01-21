import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

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
      <AuthProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}
