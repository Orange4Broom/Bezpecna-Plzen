import './home.scss';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { QuizzesGrid } from '../quizzesGrid/QuizzesGrid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
  document.body.classList.remove('background-blur');
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);
  return (
    <>
      <section className="home">
        <h1 className="home__header" data-aos="fade-up">
          Bezpečná Plzeň
        </h1>
        <p className="home__paragraph" data-aos="fade-up">
          Vítejte na výukovém portálu krizových situací města Plzně, kde se
          naučíte vše, co potřebujete, abyste byli připraveni na nečekané
          události a krizové situace. Bezpečnost a připravenost jsou klíčovými
          faktory pro efektivní reakci na různé typy krizových situací. <br />{' '}
          Začněte s prozkoumáním našich kvízů a staňte se připravenými na
          nejistou budoucnost s jistotou, že zvládnete ochránit sebe i své
          blízké..
        </p>
        <div className="home__buttons" data-aos="fade-up">
          <HashLink to="/#quizzes">
            <button className="button">Kvízy</button>
          </HashLink>
          <HashLink to="/quiz">
            <button className="button">Demo</button>
          </HashLink>
        </div>
      </section>
      <section className="quizzes" id="quizzes">
        <QuizzesGrid />
      </section>
    </>
  );
};
