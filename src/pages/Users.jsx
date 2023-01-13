import { AddButton } from '../components/Button';
import { useQuery } from 'react-query';
import { UserPage } from '../pages/User';
import { requester } from '../api/requester';
import { Link } from 'react-router-dom';

export function UsersPage() {
  const { data: users, isFetching } = useQuery(
    'getUsers',
    async () => {
      const res = await requester({
        baseURL: import.meta.env.VITE_BASE_API_URL,
      }).get('/users');

      return res.data;
    },
    {
      refetchOnWindowFocus: true,
    }
  );

  async function createUser() {
    try {
      const res = await requester({
        baseURL: import.meta.env.VITE_BASE_API_URL,
      }).post('http://localhost:3000/users', {
        name: 'Zadoque Teófilo',
        email: 'tzadoque@gmail.com',
        password: 'Senha123',
        confirm_password: 'Senha123',
        cpf: '68692683043',
        birth_date: '2004-01-07',
        gender: 'masculino',
        ethnic_group: 'branca',
      });

      return console.log(JSON.parse(res.request.response));
    } catch (e) {
      return console.error(e.response.data);
    }
  }

  return (
    <>
      <h1>Users from NutriDiet api</h1>

      <AddButton onClickFunc={createUser} />

      <ul>
        {users &&
          users.map(user => {
            return (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
