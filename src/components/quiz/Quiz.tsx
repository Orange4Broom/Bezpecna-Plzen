import './quiz.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../routes/AppRoutes';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Quiz = () => {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
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
              <b>Proč bych měl zvážit toto řešení?</b>
              <br />
              {''} Vyhodit pánev z okna může být v extrémní situaci rychlým a
              účinným způsobem, jak se pokusit uhasit oheň, a existují důvody,
              proč byste se mohl rozhodnout tak učinit. V první řadě, když
              vzniká oheň, je nejdůležitější zachránit vlastní život a zdraví.
              Vyhození pánve z okna by mohlo odvrátit riziko popálenin a
              inhalace jedovatých kouřů. Odstranění zdroje ohně - tedy hořící
              pánve - může zamezit šíření požáru na další části domu nebo bytu.
              V extrémních situacích nemusíte mít čas na hledání hasicího
              přístroje. Rychlá reakce může být klíčová k minimalizaci škod.
              Někdy to může být jediná možnost, pokud nemáte jiné nástroje na
              uhašení ohně k dispozici. Je však třeba zdůraznit, že vyhození
              pánve z okna by mělo být až posledním řešením v případě, že nemáte
              jinou možnost. Mělo by to být provedeno opatrně tak, aby nedošlo k
              ohrožení bezpečnosti lidí pod oknem, a mělo by být následováno
              okamžitým kontaktováním hasičů.
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
              <b>Proč není dobrý nápad hasit oheň na pánvičce vodou?</b>
              <br />
              {''} Hasit oheň na pánvičce vodou může být nebezpečné. Přidání
              vody na horkou pánvičku může způsobit prudké stříkání oleje a
              hořícího materiálu, což může vést k šíření ohně na jiná místa v
              kuchyni nebo způsobit popáleniny. Když voda narazí na velmi horký
              olej, může se okamžitě přeměnit na páru, což může vést k výbuchu a
              zranění osob v okolí.
              <br />
              {''}
              <br />
              {''}
              <b>Jak bych měl tedy situaci vyřešit?</b>
              <br />
              {''}V případě, že hořící pánvičku musíte uhasit, je lepší použít
              hasicí přístroj určený k hašení olejových požárů, poklop na pánvi,
              nebo hasící přikrývku.
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
