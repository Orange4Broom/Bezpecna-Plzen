import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

export const useFetchQuizzes = (collectionName: string) => {
  interface Quiz {
    quiz_id: string;
    quiz_name: string;
    quiz_icon: string;
    quiz_info: string;
    quiz_questions: QuizQuestions;
  }

  interface QuizQuestions {
    question_id: string;
    question_situation: string;
    question_right_info: string;
    question_situation_imgpath: string;
    question_time: number;
    question_answers: QuizAnswers;
  }

  interface QuizAnswers {
    answer_id: string;
    answer_text: string;
    answer_imgpath: string;
    answer_correct: boolean;
  }
  const [data, setData] = useState<Quiz[]>([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection(collectionName)
      .get()
      .then((snapshot: any) => {
        const quiz = snapshot.docs.map((doc: any) => ({
          ...doc.data(),
        }));
        setData(quiz);
        setIsPending(false);
        setError(null);
      })
      .catch((err: any) => {
        setIsPending(false);
        setError(err.message);
      });
  }, []);

  return { data, isPending, error };
};
