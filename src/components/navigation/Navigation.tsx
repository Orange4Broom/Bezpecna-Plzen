import { Link, useLocation } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import { HashLink } from 'react-router-hash-link';
import { useLogout } from '../../hooks/useLogout';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { Icon } from '../icon/Icon';
import logo from '../../../img/logo.png';
import './navigation.scss';

export const Navigation = () => {
  const { logout } = useLogout();
  const { state } = useAuthContext();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [openedMenu, setOpenedMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const pathname = location.pathname.replace('/', '');
  document.title = `Bezpečná Plzeň ${
    pathname.charAt(0).toUpperCase() + pathname.slice(1)
  }`;

  return (
    <nav className={`navigation ${scrolling ? 'dark-bg' : ''}`}>
      <Link to={AppRoutes.HOME}>
        <img
          className="navigation__logo"
          src={logo}
          alt="bezpecna-plzen logo"
        />
      </Link>
      <ul className="navigation__links">
        {!state.user ? (
          <>
            <HashLink
              to="/"
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Domu
            </HashLink>
            <HashLink to="/#quizzes" className="link">
              Kvízy
            </HashLink>
            <Link
              to={AppRoutes.LOGIN}
              className={`link ${
                location.pathname === '/login' ? 'active' : ''
              }`}
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
          </>
        ) : (
          <>
            <HashLink
              to="/"
              className={`link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Domu
            </HashLink>
            <HashLink to="/#quizzes" className="link">
              Kvízy
            </HashLink>
            <Link className="link" to={AppRoutes.HOME} onClick={logout}>
              Odhlásit se
            </Link>
          </>
        )}
      </ul>

      <button
        className="open-mobile-nav"
        onClick={() => setOpenedMenu(!openedMenu)}
      >
        <Icon name="bars" type="fas" color="" />
      </button>

      <div className={`mobile-nav ${openedMenu ? 'opened' : ''}`}>
        <div className="mobile-nav-header">
          <Link
            className="navigation-logo"
            to={AppRoutes.HOME}
            onClick={() => setOpenedMenu(!openedMenu)}
          >
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="close-mobile-nav"
            onClick={() => setOpenedMenu(!openedMenu)}
          >
            <Icon name="times" type="fas" color="" />
          </button>
        </div>
        <div className="mobile-nav-links">
          {!state.user ? (
            <>
              <HashLink
                className={`link ${location.pathname === '/' ? 'active' : ''}`}
                to={AppRoutes.HOME}
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Domů
              </HashLink>
              <HashLink
                className="link"
                to="/#quizzes"
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Kvízy
              </HashLink>
              <Link
                className="link"
                to={AppRoutes.LOGIN}
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Přihlásit se
              </Link>
              <Link
                className="link"
                to={AppRoutes.REGISTRATION}
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Registrace
              </Link>
            </>
          ) : (
            <>
              <HashLink
                className={`link ${location.pathname === '/' ? 'active' : ''}`}
                to="/#home"
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Domů
              </HashLink>
              <HashLink
                className="link"
                to="/#quizzes"
                onClick={(prev) => setOpenedMenu(!prev)}
              >
                Kvízy
              </HashLink>
              <Link className="link" to={AppRoutes.HOME} onClick={logout}>
                Odhlásit se
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
