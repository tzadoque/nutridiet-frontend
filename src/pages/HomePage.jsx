import { useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function HomePage() {
  useEffect(() => {
    document.title = 'NutriDiet - Home';
  }, []);

  const { authenticated, handleLogout } = useContext(AuthContext);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}
