import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/AdminDashboardPage';
import { UsersAdminPage } from './pages/Users/UsersAdminPage';
import { UserPage } from './pages/Users/User';
import NotFoundPage from './pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='*' element={<NotFoundPage />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/users' element={<UsersAdminPage />} />
      <Route path='/users/:id' element={<UserPage />} />
    </Routes>
  );
}
