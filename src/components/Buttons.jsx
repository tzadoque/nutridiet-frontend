import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PrimaryButtonLink = styled(NavLink)`
  all: unset;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  font-family: Lato;
  text-align: center;
  cursor: pointer;
`;

export const PrimaryButton = styled.button`
  all: unset;
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 8px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 1rem;
  font-family: Lato;
  text-align: center;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;
