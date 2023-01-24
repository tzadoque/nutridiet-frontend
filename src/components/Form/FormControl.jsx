import styled from "styled-components";

export const LoginFormControl = styled.div`
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
