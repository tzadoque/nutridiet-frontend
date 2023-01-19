import { useState } from 'react';
import { useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function LoginPage() {
  useEffect(() => {
    document.title = 'NutriDiet - Login';
  }, []);

  //local states
  const [cpf, setCpf] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();

  const { handleLogin } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();

    await handleLogin(cpf, password);
  }

  return (
    <form
      style={{ display: 'flex', flexDirection: 'column', gap: '18' }}
      onSubmit={handleSubmit}
    >
      <label htmlFor=''>cpf</label>
      <input
        type='number'
        value={cpf}
        onChange={e => setCpf(e.target.value)}
        required
      />
      <label htmlFor=''>senha</label>
      <input
        type='text'
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      />

      <button type='submit'>enviar</button>
    </form>
  );
}
