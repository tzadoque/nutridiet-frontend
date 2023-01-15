import styled from 'styled-components';

const CustomHeader = styled.header`
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  font-family: Lato;

  .header-top {
    background-color: #fff;
    padding: 18px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    font-size: 30px;
    color: #292929;
    font-weight: bold;
  }

  .page-title {
    color: #000000;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 40px;
    background-color: #f9f9f9;
  }

  .user-dropdown {
    font-size: 16px;
    color: #292929;
    font-weight: 500;
  }
`;

export default function Header() {
  return (
    <CustomHeader>
      <div className='header-top'>
        <div className='logo'>LOGO</div>
        <div className='user-dropdown'>Administrador</div>
      </div>
      <div className='page-title'>Dashboard</div>
    </CustomHeader>
  );
}
