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

  h1 {
    font-family: Lato;
    font-weight: bold;
    font-size: 2rem;
    color: #292929;
    margin-bottom: 32px;
  }
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LoginFormControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;
  width: 100%;
  font-family: Lato;
  position: relative;

  input {
    width: 100%;
    height: 32px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 32px;
  }
`;

const LoginError = styled.p`
  color: red;
  margin: 0;
`;

const CustomInput = styled.input`
  padding: 10px 16px;
  background: #fcfcfc;
  border: 1px solid ${props => (props.hasError ? 'red' : '#e6e6e6 ')};
  border-radius: 8px;
  color: black;
  font-size: 1rem;
  font-family: Lato;
  font-weight: 500;
  height: 40px !important;

  width: 100%;

  &:focus {
    outline: 1px solid #e6e6e6;
  }

  &::placeholder {
    color: #c4c4c4;
  }
`;

const PasswordInput = styled(CustomInput)`
  padding: 10px 64px 10px 16px;
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
  border-radius: 21px;
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
            <PasswordInput
              type={showPassword ? 'password' : 'text'}
              name='password'
              id='password'
              hasError={formData.passwordError}
              value={formData.password}
              onChange={handleChange}
              placeholder='Digite a sua senha'
            ></PasswordInput>
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
