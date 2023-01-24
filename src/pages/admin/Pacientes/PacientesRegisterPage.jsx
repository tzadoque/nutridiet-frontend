import { useContext, useEffect, useState } from 'react';
// components
import MainContent from '../../../components/Containers/MainContent';
import CustomForm from '../../../components/Form/CustomForm';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/api';
import { PrimaryButton } from '../../../components/Buttons';

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
    document.title = 'NutriDiet - Cadastrar paciente';
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cpf: '',
    phone_number: '',
    password: '',
    birth_date: '',
    gender: '',
    ethnic_group: '',
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const {
      name,
      email,
      cpf,
      phone_number,
      password,
      birth_date,
      gender,
      ethnic_group,
    } = formData;

    api
      .post('/users', {
        name,
        email,
        role: 'paciente',
        password,
        confirm_password: password,
        cpf,
        phone_number,
        birth_date,
        gender,
        ethnic_group,
      })
      .then(res => console.log(res));

    alert('O paciente foi cadastrado');

    navigate('/pacientes');
  }

  function handleChange() {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <MainContent>
      <CustomForm stepTitle=' Cadastrar paciente' />

      <FormStyled onSubmit={handleSubmit}>
        <FormControl>
          <label htmlFor='name'>Nome*</label>
          <input
            type='text'
            name='name'
            id='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Digite o nome do paciente'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='email'>Email*</label>
          <input
            type='email'
            name='email'
            id='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='Email do paciente'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='password'>Senha*</label>
          <input
            type='text'
            name='password'
            id='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='Senha do paciente'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='cpf'>CPF*</label>
          <input
            type='number'
            name='cpf'
            id='cpf'
            value={formData.cpf}
            onChange={handleChange}
            placeholder='Informe o cpf do paciente'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='phone_number'>Phone number*</label>
          <input
            type='number'
            name='phone_number'
            id='phone_number'
            value={formData.phone_number}
            onChange={handleChange}
            placeholder='Informe o número de telefone do paciente'
          />
        </FormControl>
        <FormControl>
          <label htmlFor='ethnic_group'>Raça*</label>
          <select
            id='ethnic_group'
            name='ethnic_group'
            value={formData.ethnic_group}
            onChange={handleChange}
            required
          >
            <option value='' disabled>
              Selecione uma opção
            </option>
            <option value='preta'>Preta</option>
            <option value='branca'>Branca</option>
            <option value='indígena'>Indígena</option>
            <option value='amarela'>Amarela</option>
            <option value='parda'>Parda</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor='gender'>Gênero*</label>
          <select
            id='gender'
            name='gender'
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value='' disabled>
              Selecione uma opção
            </option>
            <option value='masculino'>Masculino</option>
            <option value='feminino'>Feminino</option>
            <option value='outros'>Outros</option>
          </select>
        </FormControl>
        <FormControl>
          <label htmlFor='birth_date'>Data de nascimento*</label>
          <input
            type='text'
            name='birth_date'
            id='birth_date'
            value={formData.birth_date}
            onChange={handleChange}
            placeholder='aaaa-mm-dd'
          />
        </FormControl>
        <FormControl>
          <PrimaryButton type='button' onClick={handleSubmit}>
            Cadastrar paciente
          </PrimaryButton>
        </FormControl>
      </FormStyled>
    </MainContent>
  );
}
