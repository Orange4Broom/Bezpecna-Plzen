import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../img/logo.png';
import './navigation.scss';

export const Navigation = () => {
  const location = useLocation();
  const pathname = location.pathname.replace('/', '');
  document.title = `Bezpečná Plzeň ${
    pathname.charAt(0).toUpperCase() + pathname.slice(1)
  }`;
  return (
    <nav className="navigation">
      <Link to={AppRoutes.HOME}>
        <img
          className="navigation__logo"
          src={logo}
          alt="bezpecna-plzen logo"
        />
      </Link>
      <ul className="navigation__links">
        <HashLink
          to="/"
          className={`link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Domu
        </HashLink>
        <Link
          to={AppRoutes.LOGIN}
          className={`link ${location.pathname === '/login' ? 'active' : ''}`}
        >
          Přihlásit se
        </Link>
        <Link
          to={AppRoutes.REGISTRATION}
          className={`link ${
            location.pathname === '/registration' ? 'active' : ''
          }`}
        >
          Registrace
        </Link>
      </ul>
    </nav>
  );
};
