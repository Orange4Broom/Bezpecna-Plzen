import { AppRoutes } from '../../routes/AppRoutes';
import { useState } from 'react';
import { useRegistration } from '../../hooks/useRegistration';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { Icon } from '../icon/Icon';
import './registration.scss';

export const Registration = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { error, registration } = useRegistration();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);

  const handleRegistration = () => {
    registration({ displayName, email, password });
  };

  document.body.classList.add('background-blur');
  return (
    <div className="registration" data-aos="fade-up">
      <div className="registration__image"></div>
      <form className="form">
        <div className="form__header">Registrace</div>
        <div className="form__input">
          <label>Uživatelské jméno</label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
          />
        </div>
        <div className="form__input">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form__input">
          <label>Heslo</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <span className="form__link">
          <Link className="form__login" to={AppRoutes.LOGIN}>
            Přihlásit se
          </Link>
        </span>
        <Link className="confirm" to={AppRoutes.REGISTRATION}>
          <button className="form__button" onClick={handleRegistration}>
            Zaregistrovat se
            <Icon name="plus" type="fas" color="" />
          </button>
        </Link>
      </form>
    </div>
  );
};
