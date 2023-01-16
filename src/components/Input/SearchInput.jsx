import styled from 'styled-components';
import SearchIcon from '../../assets/search.svg';

const SearchInputForm = styled.form`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  max-width: 551px;
  height: 33px;
  display: flex;
  box-sizing: border-box;
`;

const SearchInputStyled = styled.input`
  all: unset;
  padding: 8px 16px;
  color: #292929;
  font-size: 14px;
  font-family: Lato;
  font-weight: 600;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #c4c4c4;
  }
`;

const SearchInputSubmitButton = styled.button`
  all: unset;
  height: 100%;
  width: 48px;
  background: url(${SearchIcon}) no-repeat center center;
  box-sizing: border-box;
  cursor: pointer;
`;

export default function SearchInput({ placeholder, onClickFunction }) {
  return (
    <SearchInputForm>
      <SearchInputStyled type='text' placeholder={placeholder} />
      <SearchInputSubmitButton type='button' onClick={onClickFunction} />
    </SearchInputForm>
  );
}
