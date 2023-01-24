import { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../App';

import MainContent from '../components/Containers/MainContent';
import { PrimaryButton } from '../components/Buttons';

//context
import { AuthContext } from '../context/AuthContext';

// images
import EyeIcon from '../assets/eye.svg';
import EyeClosedIcon from '../assets/eyeClosed.svg';
import { LoginFormControl } from '../components/Form/FormControl';
import {
  CustomInput,
  CustomPasswordInput,
} from '../components/Input/StyledInputs';

const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const LoginMainContent = styled(MainContent)`
  max-width: 395px;
  height: auto;
  padding: 64px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginError = styled.p`
  color: red;
  margin: 0;
`;

const HidePasswordButton = styled.button`
  all: unset;
  background: url(${props => (props.hide ? EyeIcon : EyeClosedIcon)});
  background-repeat: no-repeat;
  background-position: center center;
  height: 32px;
  width: 32px;
  cursor: pointer;
`;

const LoginButton = styled(PrimaryButton)`
  border-radius: 8px;
  margin-top: 16px;
`;

export default function LoginPage() {
  useEffect(() => {
    document.title = 'NutriLife - Login';
  }, []);

  //local states
  const [formData, setFormData] = useState({
    cpf: '',
    password: '',
    cpfError: '',
    passwordError: '',
  });

  const [showPassword, setShowPassword] = useState(true);

  const { loading, handleLogin } = useContext(AuthContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const { cpf, password } = formData;

    if (!cpf || !password) {
      if (!cpf) {
        setFormData(prevState => ({
          ...prevState,
          cpfError: 'Este campo é obrigatório',
        }));
      }

      if (!password) {
        setFormData(prevState => ({
          ...prevState,
          passwordError: 'Este campo é obrigatório',
        }));
      }

      return;
    }

    const checkLoginErros = await handleLogin(formData.cpf, formData.password);

    if (checkLoginErros.hasOwnProperty('error')) {
      console.log(checkLoginErros);
      if (checkLoginErros.error.cpf) {
        setFormData(prevState => ({
          ...prevState,
          cpfError: checkLoginErros.error.cpf,
        }));
      }

      if (checkLoginErros.error.password) {
        setFormData(prevState => ({
          ...prevState,
          passwordError: checkLoginErros.error.password,
        }));
      }
    }
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
    <LoginContainer>
      <GlobalStyle />

      <LoginMainContent>
        <h1>LOGO</h1>
        <LoginForm onSubmit={handleSubmit}>
          <LoginFormControl>
            <label htmlFor='cpf'>Cpf*</label>
            <CustomInput
              type='text'
              name='cpf'
              id='cpf'
              hasError={formData.cpfError}
              value={formData.cpf}
              onChange={handleChange}
              placeholder='Digite o cpf'
            />
            {formData.cpfError && <LoginError>{formData.cpfError}</LoginError>}
          </LoginFormControl>
          <LoginFormControl>
            <label htmlFor='password'>Password*</label>
            <CustomPasswordInput
              type={showPassword ? 'password' : 'text'}
              name='password'
              id='password'
              hasError={formData.passwordError}
              value={formData.password}
              onChange={handleChange}
              placeholder='Digite a sua senha'
            ></CustomPasswordInput>
            {formData.passwordError && (
              <LoginError>{formData.passwordError}</LoginError>
            )}
            <HidePasswordButton
              hide={showPassword}
              type='button'
              onClick={() => setShowPassword(!showPassword)}
            />
          </LoginFormControl>

          {loading ? (
            <LoginButton disabled>Entrar</LoginButton>
          ) : (
            <LoginButton>Entrar</LoginButton>
          )}
        </LoginForm>
      </LoginMainContent>
    </LoginContainer>
  );
}
