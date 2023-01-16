import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/admin/AdminDashboardPage';
import { PacientesAdminPage } from './pages/admin/Pacientes/PacientesAdminPage';
import NotFoundPage from './pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />

      {/* admin routes */}
      <Route path='/admin/dashboard' element={<HomePage />} />
      <Route path='/admin/pacientes' element={<PacientesAdminPage />} />
      <Route path='/admin/consultas' element={<NotFoundPage />} />
      <Route path='/admin/profissionais' element={<NotFoundPage />} />
      <Route path='/admin/alimentos' element={<NotFoundPage />} />
    </Routes>
  );
}
