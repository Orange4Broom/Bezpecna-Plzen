import { Icon } from '../icon/Icon';
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; Bezpečná Plzeň 2023</p>
      <ul className="footer__socials">
        <a
          className="social"
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="instagram" type="fab" color="" />
        </a>
        <a
          className="social"
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="facebook" type="fab" color="" />
        </a>
        <a
          className="social"
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icon name="youtube" type="fab" color="" />
        </a>
      </ul>
    </footer>
  );
};
