export interface Quiz {
  quiz_id: string;
  quiz_name: string;
  quiz_icon: string;
  quiz_info: string;
  quiz_questions: QuizQuestions;
}

export interface QuizQuestions {
  question_id: string;
  question_situation: string;
  question_right_info: string;
  question_situation_imgpath: string;
  question_time: number;
  question_answers: QuizAnswers;
}

export interface QuizAnswers {
  answer_id: string;
  answer_text: string;
  answer_imgpath: string;
  answer_correct: boolean;
}
