import './home.scss';
import { useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          eligendi sed similique nesciunt sunt voluptatibus eos dolorum fuga
          eveniet corporis neque qui, rerum, quisquam impedit maxime autem rem
          quo voluptatum.
        </p>
        <div className="home__buttons" data-aos="fade-up">
          <HashLink to="/#quizzes">
            <button className="button">Kvízy</button>
          </HashLink>
          <HashLink to="/quizzesdemo">
            <button className="button">Demo</button>
          </HashLink>
        </div>
      </section>
      <section className="quizzes">Quizzes</section>
    </>
  );
};
