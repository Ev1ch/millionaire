import React, { useState } from 'react';
import clsx from 'clsx';
import { IIndexedQuestion } from 'domain/question';
import { IIndexedAnswer } from 'domain/answer';
import { Answer, Container, IconButton, Stage } from 'components/basic';
import ALPHABET from 'common/constants/alphabet';
import burgerIcon from 'assets/icons/burger.svg';
import timesIcon from 'assets/icons/times.svg';
import delay from 'helpers/delay';
import styles from './quiz.module.scss';

interface IQuizProps {
    question: IIndexedQuestion;
    questions: IIndexedQuestion[];
    onAnswer: (answer: IIndexedAnswer) => void;
}

function Quiz({ question, questions, onAnswer }: IQuizProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [chosenAnswer, setChosenAnswer] = useState<IIndexedAnswer | null>(null);

    const toggleHandler = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    const getLabel = (id: number) => ALPHABET[(id % ALPHABET.length) - 1].toLocaleUpperCase();

    const getStageStyle = (currentQuestion: IIndexedQuestion) => {
        if (currentQuestion.id < question.id) {
            return 'passed';
        }

        if (currentQuestion.id === question.id) {
            return 'active';
        }

        return undefined;
    };

    const getAnswerStyle = (currentAnswer: IIndexedAnswer) => {
        if (!chosenAnswer) {
            return undefined;
        }

        if (chosenAnswer.id !== currentAnswer.id) {
            return 'disabled';
        }

        if (!chosenAnswer.isCorrect) {
            return 'wrong';
        }

        return 'correct';
    };

    return (
        <main className={styles.quiz}>
            <section className={styles.game}>
                <Container className={styles.game__container}>
                    <h1 className={styles.game__question}>{question.text}</h1>
                    <div className={styles.game__answers}>
                        {question.answers.map((currentAnswer) => (
                            <Answer
                                key={currentAnswer.id}
                                label={getLabel(currentAnswer.id)}
                                style={getAnswerStyle(currentAnswer)}
                                answer={currentAnswer}
                                className={styles.game__answer}
                                onClick={async () => {
                                    setChosenAnswer(currentAnswer);
                                    await delay(1000);
                                    onAnswer(currentAnswer);
                                    setChosenAnswer(null);
                                }}
                                disabled={Boolean(chosenAnswer)}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <section className={clsx(styles.stages, isMenuOpen && styles.stages_burger)}>
                <Container className={styles.stages__container}>
                    <IconButton
                        className={styles.stages__toggler}
                        icon={isMenuOpen ? timesIcon : burgerIcon}
                        onClick={toggleHandler}
                    />
                    <div className={styles.stages__content}>
                        {[...questions].reverse().map((currentQuestion) => (
                            <Stage
                                key={currentQuestion.id}
                                question={currentQuestion}
                                className={styles.stages__stage}
                                style={getStageStyle(currentQuestion)}
                            />
                        ))}
                    </div>
                </Container>
            </section>
        </main>
    );
}

export default Quiz;
