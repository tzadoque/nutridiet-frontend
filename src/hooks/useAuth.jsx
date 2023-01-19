import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const token = localStorage.getItem('token');

      if (token) {
        api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;

        // checar se o token salvo no localhost é válido
        try {
          setAuthenticated(true);
          const res = await api.get('/protected');
        } catch (error) {
          setAuthenticated(false);
          navigate('/login');
        }
      }

      setLoading(false);
    })();
  }, []);

  async function handleLogin(cpf, password) {
    try {
      const res = await api.post('/auth/login', { cpf, password });

      // erro no login
      if (res.data.errorMsg) {
        return console.log(res.data.errorMsg);
      }

      // login feito com sucesso
      localStorage.setItem('token', JSON.stringify(res.data.token));
      localStorage.setItem('user', JSON.stringify(res.data.user));

      api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

      setAuthenticated(true);
      setLoading(false);

      return navigate('/');
    } catch (e) {
      //erro no login
      return console.log(e.response.data.errorMsg);
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    api.defaults.headers.Authorization = undefined;
    localStorage.removeItem('token');

    return navigate('/login');
  }

  return { authenticated, loading, handleLogin, handleLogout };
}
