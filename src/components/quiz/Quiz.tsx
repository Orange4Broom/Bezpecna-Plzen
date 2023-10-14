import './quiz.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Quiz = () => {
  const [correctAnswer, setCorrectAnswer] = useState();
  const [wrongAnswer, setWrongAnswer] = useState();
  const [openModal, setOpenModal] = useState(false);
  function handleCorrectAnswer() {
    setCorrectAnswer(true);
    setWrongAnswer(false);
    setOpenModal(true);
  }
  function handleWrongAnswer() {
    setCorrectAnswer(false);
    setWrongAnswer(true);
    setOpenModal(true);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);
  return (
    <>
      <div className="quiz" data-aos="fade-up">
        <img
          className="panev__img"
          src="../../../img/panev.png"
          alt="horici panev"
        />
        <span>
          <h1 className="quizz__header">
            Připravuješ si večeři, když v tom najednou začne hořet pánvička s
            olejem.
          </h1>
          <h1 className="quizz__header">Jak zareaguješ?</h1>
        </span>

        <div className="quiz__answers">
          <button className="quiz__answer" onClick={handleWrongAnswer}>
            <img
              src="../../../img/watter.png"
              style={{ height: '70px', width: '70px' }}
              alt="voda"
            />
            <p>Poleju jí vodou</p>
          </button>
          <button className="quiz__answer" onClick={handleWrongAnswer}>
            <img
              src="../../../img/poklice.png"
              style={{ height: '50px', width: '100px' }}
              alt="poklice"
            />
            <p>Přiklopím jí puklicí</p>
          </button>
          <button className="quiz__answer" onClick={handleCorrectAnswer}>
            <img
              src="../../../img/windows.png"
              style={{ height: '70px', width: '70px' }}
              alt="okno"
            />
            <p>Vyhodím jí z okna</p>
          </button>
        </div>

        {/* <div className="quiz__timer"></div> */}
      </div>

      <div className={`overlay ${openModal ? `show` : ``}`}>
        <div className={`modal ${correctAnswer ? `show__correct` : `notshow`}`}>
          <h1 className="modal__header">Správně!</h1>
          <div className="modal__content">
            <p className="modal__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              earum magni, corrupti laudantium exercitationem officia nemo
              inventore molestiae aperiam tenetur delectus sed, eaque
              repellendus dignissimos quo, numquam excepturi molestias fugiat.
            </p>
            <img
              className="modal__image"
              src="../../../img/correct.jpg"
              alt="correct"
            />
          </div>
          <Link to={AppRoutes.HOME}>
            <button className="modal__button">Pokračovat</button>
          </Link>
        </div>

        <div className={`modal ${wrongAnswer ? `show__wrong` : `notshow`}`}>
          <h1 className="modal__header">Špatně!</h1>
          <div className="modal__content">
            <p className="modal__text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              earum magni, corrupti laudantium exercitationem officia nemo
              inventore molestiae aperiam tenetur delectus sed, eaque
              repellendus dignissimos quo, numquam excepturi molestias fugiat.
            </p>
            <img
              className="modal__image"
              src="../../../img/wrong.jpg"
              alt="wrong"
            />
          </div>
          <Link to={AppRoutes.HOME}>
            <button className="modal__button">Pokračovat</button>
          </Link>
        </div>
      </div>
    </>
  );
};
