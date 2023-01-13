import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { requester } from '../api/requester';

export function UserPage() {
  const { id } = useParams();

  const { data: user, isFetching } = useQuery('getUserById', async () => {
    const res = await requester({
      baseURL: import.meta.env.VITE_BASE_API_URL,
    }).get(`/users/${id}`);

    return res.data;
  });

  const [formattedBirthDate, setFormattedBirthDate] = useState('');

  useEffect(() => {
    user &&
      setFormattedBirthDate(() => {
        const year = user.birth_date.slice(0, 4);
        const month = user.birth_date.slice(5, 7);
        const day = user.birth_date.slice(8, 10);

        return `${day}/${month}/${year}`;
      });
  }, [user]);

  return (
    <>
      {isFetching && <p>Carregando...</p>}
      {!isFetching && user && (
        <div>
          <h1>{user.name}</h1>
          <p>email: {user.email}</p>
          <p>cpf: {user.cpf}</p>
          <p>nascimento: {formattedBirthDate}</p>
          <p>gênero: {user.gender}</p>
          <p>etnia: {user.ethnic_group}</p>
        </div>
      )}
    </>
  );
}
