import { useEffect } from 'react';
import api from '../api/api';

export default function UsersPage() {
  useEffect(() => {
    document.title = 'NutriDiet - Users page';
  }, []);

  async function handleClick() {
    const res = await api.get('/protected');

    console.log(res);
  }

  return (
    <div>
      <h1>Users Page</h1>
      <button onClick={handleClick}>protectedRoute</button>
    </div>
  );
}
