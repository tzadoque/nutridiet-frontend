import { AppRoutes } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

//authcontext
import { AuthProvider } from './context/AuthContext';

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
      <AuthProvider>
        <GlobalStyle />
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
