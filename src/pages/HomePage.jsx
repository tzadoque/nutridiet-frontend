import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function HomePage() {
  useEffect(() => {
    document.title = 'NutriDiet - Home';
  }, []);

  const { authenticated, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page - {authenticated ? 'sim' : 'não'}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
