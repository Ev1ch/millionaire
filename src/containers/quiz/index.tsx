import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from 'context';
import { IIndexedAnswer } from 'domain/answer';
import { Quiz as QuizPage } from 'components/pages';
import Routes from 'common/enums/routes';

function Quiz() {
    const navigate = useNavigate();
    const { questions } = useContext(Context);
    const questionIndex = useRef(0);
    const prize = useRef(0);
    const [question, setQuestion] = useState(questions[questionIndex.current]);

    const goToFinal = () => {
        navigate(Routes.FINAL, { state: { prize: prize.current } });
    };

    const answerHandler = (answer: IIndexedAnswer) => {
        if (!answer.isCorrect) {
            goToFinal();
            return;
        }

        prize.current = question.prize;

        const nextQuestionIndex = questionIndex.current + 1;
        questionIndex.current = nextQuestionIndex;

        if (question.id === questions.length) {
            goToFinal();
            return;
        }

        setQuestion(questions[nextQuestionIndex]);
    };

    return <QuizPage question={question} questions={questions} onAnswer={answerHandler} />;
}

export default Quiz;
