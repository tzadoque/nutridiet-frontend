import './Navbar.css';

export function Navbar() {
  const { pathname } = window.location;

  return (
    <nav>
      <ul>
        <li>
          <a href='/' className={pathname == '/' ? 'active' : ''}>
            Home
          </a>
        </li>
        <li>
          <a href='/users' className={pathname == '/users' ? 'active' : ''}>
            Users
          </a>
        </li>
      </ul>
    </nav>
  );
}
