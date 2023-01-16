import styled from 'styled-components';
import { PrimaryButtonLink } from './Buttons';
import SearchInput from './Input/SearchInput';

const TopSearchBarContainer = styled.div`
  padding: 18px 24px;
  background: #f4f4f4;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const TopSearchBarTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  font-family: Lato;
  color: #292929;
`;

const TopSearchBarButton = styled(PrimaryButtonLink)`
  margin-left: auto;
`;

export default function TopSearchBar() {
  return (
    <TopSearchBarContainer>
      <TopSearchBarTitle>Pesquisar</TopSearchBarTitle>
      <SearchInput placeholder='Pesquise por nome, cpf ou data do último atendimento' />

      <TopSearchBarButton to='/'>Cadastrar paciente</TopSearchBarButton>
    </TopSearchBarContainer>
  );
}
