import styled from 'styled-components';

import AvatarIcon from '../../assets/avatar.svg';
import ArrowUpIcon from '../../assets/arrow-up.svg';
import ArrowDownIcon from '../../assets/arrow-down.svg';
import { NavLink } from 'react-router-dom';

import { useContext } from 'react';

//context
import { AuthContext } from '../../context/AuthContext';
import { GlobalContext } from '../../context/GlobalContext';

const CustomHeader = styled.header`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  font-family: Lato;
  position: sticky;
  top: 0;
  z-index: 999;

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

  .dropdown-menu {
    position: relative;
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

const CustomDropdownButton = styled.button`
  all: unset;
  display: flex;
  gap: 8px;
`;

const CustomDropdownContent = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  background-color: white;
  width: 100%;
  list-style: none;
  text-align: center;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  top: 100%;
  padding: 16px 0;

  button {
    all: unset;
    cursor: pointer;
    padding: 8px 0;

    &:hover {
      background-color: ${props => props.theme.colors.secondary};
    }
  }
`;

import React, { useState } from 'react';

const DropdownMenu = ({ user, icon, logout }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <div className='dropdown-menu'>
      <CustomDropdownButton onClick={toggleMenu}>
        <img src={icon} />
        <p>{user.name}</p>
        <img src={showMenu ? ArrowUpIcon : ArrowDownIcon} alt='' />
      </CustomDropdownButton>
      {showMenu && (
        <CustomDropdownContent>
          <button onClick={logout}>logout</button>
        </CustomDropdownContent>
      )}
    </div>
  );
};

export default function Header() {
  const { handleLogout } = useContext(AuthContext);
  const { title, currentUser } = useContext(GlobalContext);

  return (
    <CustomHeader>
      <div className='header-top'>
        <div className='logo'>
          <NavLink to='/'>LOGO</NavLink>
        </div>
        <DropdownMenu
          user={currentUser}
          icon={AvatarIcon}
          logout={handleLogout}
        />
      </div>
      <div className='page-title'>{title}</div>
    </CustomHeader>
  );
}
