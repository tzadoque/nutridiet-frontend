import styled from "styled-components";

export const CustomInput = styled.input`
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

export const CustomPasswordInput = styled(CustomInput)`
  padding: 10px 64px 10px 16px;
`;
