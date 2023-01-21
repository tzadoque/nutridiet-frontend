import { Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import AlimentosAdminPage from './pages/admin/AlimentosAdminPage';
import AlimentosUpdatePage from './pages/admin/AlimentosUpdatePage';
import AlimentoAdminPage from './pages/admin/AlimentoAdminPage';

//authcontext
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import LayoutBase from './pages/LayoutBase';
import AlimentosRegisterPage from './pages/admin/AlimentosRegisterPage';
import { AlimentosProvider } from './context/AlimentosContext';

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

      <Route path='/' element={<PrivateRoute children={<LayoutBase />} />}>
        <Route
          path=''
          element={<PrivateRoute children={<AdminDashboardPage />} />}
        />

        <Route
          path='/alimentos'
          element={
            <PrivateRoute
              children={
                <AlimentosProvider>
                  <AlimentosAdminPage />
                </AlimentosProvider>
              }
            />
          }
        />
        <Route
          path='/alimentos/:id'
          element={
            <PrivateRoute
              children={
                <AlimentosProvider>
                  <AlimentoAdminPage />
                </AlimentosProvider>
              }
            />
          }
        />
        <Route
          path='/alimentos/cadastro'
          element={
            <PrivateRoute
              children={
                <AlimentosProvider>
                  <AlimentosRegisterPage />
                </AlimentosProvider>
              }
            />
          }
        />
        <Route
          path='/alimentos/:id/editar'
          element={
            <PrivateRoute
              children={
                <AlimentosProvider>
                  <AlimentosUpdatePage />
                </AlimentosProvider>
              }
            />
          }
        />
      </Route>
    </Routes>
  );
}
