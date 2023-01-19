import { createContext } from 'react';

import useAuth from '../hooks/useAuth';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { authenticated, loading, handleLogin, handleLogout } = useAuth();

  return (
    <AuthContext.Provider
      value={{ authenticated, handleLogin, loading, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
