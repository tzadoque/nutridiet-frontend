import { useContext } from 'react';
import styled from 'styled-components';
import GlobalContext from '../../context/GlobalContext';

import AvatarIcon from '../../assets/avatar.svg';
import { NavLink } from 'react-router-dom';

const CustomHeader = styled.header`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  font-family: Lato;
  position: sticky;
  top: 0;

  .header-top {
    background-color: #fff;
    padding: 18px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo a {
    font-size: 30px;
    font-weight: bold;
    color: #292929;
    text-decoration: none;
  }

  .page-title {
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 40px;
    background-color: #f9f9f9;
  }

  .user-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #292929;
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 576px) {
    .user-dropdown p {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .header-top {
      padding: 8px 21px;
    }

    .page-title {
      padding: 8px 21px;
    }
  }
`;

export default function Header() {
  const { user, pageTitle } = useContext(GlobalContext);

  return (
    <CustomHeader>
      <div className='header-top'>
        <div className='logo'>
          <NavLink to='/'>LOGO</NavLink>
        </div>
        <div className='user-dropdown'>
          <img src={AvatarIcon} />
          <p>{user}</p>
        </div>
      </div>
      <div className='page-title'>{pageTitle}</div>
    </CustomHeader>
  );
}
