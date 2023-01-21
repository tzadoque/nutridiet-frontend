import { useContext, useEffect, useState } from 'react';
// components
import MainContent from '../../components/Containers/MainContent';
import CustomForm from '../../components/Form/CustomForm';

import styled from 'styled-components';
import { AlimentosContext } from '../../context/AlimentosContext';

const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormStyled = styled.form`
  max-width: 554px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  box-sizing: border-box;

  input,
  select {
    height: 32px;
  }
`;

export default function AlimentosRegisterPage() {
  useEffect(() => {
    // altera o título da aba
    document.title = 'NutriDiet - Criar alimentos';
  }, []);

  const { handleCreate } = useContext(AlimentosContext);

  const [formData, setFormData] = useState({
    name: '',
    type: '',
    calories: '',
    lipids: '',
    nameError: '',
    typeError: '',
    caloriesError: '',
    lipidsError: '',
    generalError: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const { name, type, calories, lipids } = formData;

    await handleCreate({ name, type, calories, lipids });

    setFormData({ name: '', type: '', calories: '', lipids: '' });
  }

  function handleChange() {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
      [name + 'Error']: '',
    }));
  }

  return (
    <MainContent>
      <CustomForm stepTitle='Criar alimento' />

      <FormStyled onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor='type'>Tipo*</label>
          <select
            id='type'
            name='type'
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value='' disabled>
              Selecione uma opção
            </option>
            <option value='frutos-do-mar'>Frutos do mar</option>
            <option value='sementes'>Sementes</option>
            <option value='vegetais'>Vegetais</option>
            <option value='graos'>Grãos</option>
            <option value='paes'>Pães</option>
            <option value='legumes'>Legumes</option>
            <option value='laticinios'>Laticínios</option>
            <option value='gordura'>Gordura</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor='name'>Nome*</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Digite o nome do alimento'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='calories'>Calorias*</label>
          <input
            type='number'
            name='calories'
            id='calories'
            value={formData.calories}
            onChange={handleChange}
            placeholder='Informe quantas calorias por grama tem o alimento'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='lipids'>Lipídios*</label>
          <input
            type='number'
            name='lipids'
            id='lipids'
            value={formData.lipids}
            onChange={handleChange}
            placeholder='Informe quantos lipídios por grama tem o alimento'
          />
        </FormControl>
        <FormControl>
          <button type='button' onClick={handleSubmit}>
            Cadastrar alimento
          </button>
        </FormControl>
      </FormStyled>
    </MainContent>
  );
}
