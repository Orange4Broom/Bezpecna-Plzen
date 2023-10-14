import { AppRoutes } from '../../routes/AppRoutes';
import { Link, redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Icon } from '../icon/Icon';
import { useLogin } from '../../hooks/useLogin';
import AOS from 'aos';
import './login.scss';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { error, login } = useLogin();

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);

  const handleLogin = async () => {
    await login({ email, password });
    error === null ? redirect(AppRoutes.HOME) : redirect(AppRoutes.LOGIN);
  };

  document.body.classList.add('background-blur');
  return (
    <div className="login" data-aos="fade-up">
      <div className="login__image"></div>
      <form className="form">
        <div className="form__header">Přihlášení</div>

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
            Zapomenuté heslo?
          </Link>
          <Link className="form__login" to={AppRoutes.REGISTRATION}>
            Vytvořit účet
          </Link>
        </span>
        <Link className="confirm" to={AppRoutes.LOGIN}>
          <button className="form__button" onClick={handleLogin}>
            Přihlásit se
            <Icon name="arrow-right" type="fas" color="" />
          </button>
        </Link>
      </form>
    </div>
  );
};
