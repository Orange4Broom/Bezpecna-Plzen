import { projectFirestore } from '../../firebase/config';
import { useFetchQuizzes } from '../../hooks/useFetchQuizzes';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { APIResponse } from '../../typings/api';
import { Icon } from '../icon/Icon';
import { Quiz } from '../../typings/quiz';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const QuizzesGrid = () => {
  const { state } = useAuthContext();
  const { data, isPending, error }: APIResponse<Quiz[]> =
    useFetchQuizzes('quizzes');
  const [quizzes, setQuizzes] = useState<Quiz[]>([]); // Initialize quizzes state as an empty array

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-out', // Easing option
      offset: 100, // Offset (in pixels) from the original trigger point
    });
  }, []);

  useEffect(() => {
    if (data) {
      setQuizzes(data);
    }

    const unsubscribe = projectFirestore
      .collection('quizzes')
      .onSnapshot((snapshot) => {
        const newData: Quiz[] = snapshot.docs.map((doc) => ({
          ...(doc.data() as Quiz),
        }));
        setQuizzes(newData);
      });
    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []); // Empty dependency array ensures useEffect runs once after initial render

  console.log(quizzes);
  return (
    <>
      {isPending && <div>Loading...</div>}
      {error && <div>Error fetching data: Error</div>}
      {!isPending && quizzes.length > 0 && (
        <>
          <h1 className="quizzes__header">Kvízy</h1>
          <section className="quizzes" id="quizzes">
            <div className="quizzes__container">
              {Object.keys(quizzes[0]).map((quizId) => {
                const quiz = quizzes[0][quizId];
                return (
                  <Link to={`/quiz`} key={quizId} data-aos="fade-up">
                    <div className="quiz__body" key={quizId}>
                      <Icon name={quiz.quiz_icon} type="fas" color="red" />
                      <h2 className="quiz__header">{quiz.quiz_name}</h2>
                      <p>{state.user ? `1 z 16` : `16 otázek`}</p>
                    </div>
                  </Link>
                );
              })}
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="lightbulb" type="fas" color="red" />
                  <h2 className="quiz__header">Blackout</h2>
                  <p>{state.user ? `1 z 16` : `16 otázek`}</p>
                </div>
              </Link>
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="car-burst" type="fas" color="red" />
                  <h2 className="quiz__header">Dopravní nehoda</h2>
                  <p>{state.user ? `4 z 12` : `12 otázek`}</p>
                </div>
              </Link>
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="person-swimming" type="fas" color="red" />
                  <h2 className="quiz__header">Topící se osoba</h2>
                  <p>{state.user ? `0 z 10` : `10 otázek`}</p>
                </div>
              </Link>
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="house-flood-water" type="fas" color="red" />
                  <h2 className="quiz__header">Povodeň</h2>
                  <p>{state.user ? `11 z 20` : `20 otázek`}</p>
                </div>
              </Link>
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="bomb" type="fas" color="red" />
                  <h2 className="quiz__header">Nález výbušniny</h2>
                  <p>{state.user ? `0 z 6` : `6 otázek`}</p>
                </div>
              </Link>
              <Link to={`/quiz`} data-aos="fade-up">
                <div className="quiz__body">
                  <Icon name="hill-rockslide" type="fas" color="red" />
                  <h2 className="quiz__header">Sesuv půdy</h2>
                  <p>{state.user ? `0 z 18` : `18 otázek`}</p>
                </div>
              </Link>
            </div>
          </section>
        </>
      )}
      {!isPending && quizzes.length === 0 && <div>No quizzes found.</div>}
    </>
  );
};
