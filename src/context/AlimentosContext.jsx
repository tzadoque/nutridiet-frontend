import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/api';

const AlimentosContext = createContext();

const AlimentosProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.get('/foods');

        setLoading(false);

        if (result.data.length === 0) setError('Nenhum alimento encontrado');
        setData(result.data);
      } catch (e) {
        setError(e.message);
      }
    };
    fetchData();
  }, []);

  const handleCreate = async newData => {
    try {
      const result = await api.post('/foods', newData);
      setData([...data, result.data]);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleUpdate = async (updatedFood, id) => {
    try {
      const result = await api.put(`/foods/${id}`, updatedFood);
      const updatedData = data.map(item => {
        if (item.id === id) return result.data;
        return item;
      });
      setData(updatedData);
      navigate(`/alimentos/${id}`);
    } catch (e) {
      setError(e.message);
    }
  };

  const handleDelete = async id => {
    try {
      await api.delete(`/foods/${id}`);
      const updatedData = data.filter(item => item.id !== id);
      setData(updatedData);
      navigate('/alimentos');
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <AlimentosContext.Provider
      value={{
        data,
        error,
        loading,
        handleCreate,
        handleUpdate,
        handleDelete,
        setData,
      }}
    >
      {children}
    </AlimentosContext.Provider>
  );
};

export { AlimentosContext, AlimentosProvider };
