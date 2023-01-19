import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import NotFoundPage from './pages/NotFoundPage';

//authcontext
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

export function AppRoutes() {
  const { authenticated, loading } = useContext(AuthContext);

  function PrivateRoute({ children }) {
    if (!authenticated && !loading) {
      return <Navigate to='/login' />;
    }

    return children;
  }

  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />

      <Route path='/login' element={<LoginPage />} />

      <Route path='/' element={<PrivateRoute children={<HomePage />} />} />
      <Route
        path='/users'
        element={<PrivateRoute children={<UsersPage />} />}
      />
    </Routes>
  );
}
