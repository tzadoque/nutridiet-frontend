import { createContext, useEffect, useState } from 'react';
import api from '../api/api';

const GlobalContext = createContext({});

function GlobalProvider({ children }) {
  const [consultas, setConsultas] = useState([]);
  const [alimentos, setAlimentos] = useState([]);
  const [pacientes, setPacientes] = useState([]);
  const [nutricionistas, setNutricionistas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.get('/foods').then(res => setAlimentos(res.data));

    api.get('/consultations').then(res => setConsultas(res.data));

    api.get('/users/role/paciente').then(res => setPacientes(res.data));

    api
      .get('/users/role/nutricionista')
      .then(res => setNutricionistas(res.data));

    setCurrentUser(JSON.parse(localStorage.getItem('user')));

    setLoading(false);
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        currentUser,
        consultas,
        alimentos,
        pacientes,
        nutricionistas,
        loading,
        title,
        setTitle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
