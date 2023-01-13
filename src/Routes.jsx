import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home';
import { UsersPage } from './pages/Users';
import { UserPage } from './pages/User';
import NotFoundPage from './pages/NotFoundPage';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFoundPage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/users/:id' element={<UserPage />} />
      </Routes>
    </Router>
  );
}
