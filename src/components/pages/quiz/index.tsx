import React from 'react';
import { IIndexedQuestion } from 'domain/question';
import { IIndexedAnswer } from 'domain/answer';
import { Answer, Container, Stage } from 'components/basic';
import ALPHABET from 'common/constants/alphabet';
import styles from './quiz.module.scss';

interface IQuizProps {
    question: IIndexedQuestion;
    questions: IIndexedQuestion[];
    onAnswer: (answer: IIndexedAnswer) => void;
}

function Quiz({ question, questions, onAnswer }: IQuizProps) {
    const getLabel = (id: number) => ALPHABET[(id % ALPHABET.length) - 1].toLocaleUpperCase();

    const getStageType = (currentQuestion: IIndexedQuestion) => {
        if (currentQuestion.id < question.id) {
            return 'passed';
        }

        if (currentQuestion.id === question.id) {
            return 'active';
        }

        return undefined;
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
                                answer={currentAnswer}
                                className={styles.game__answer}
                                onClick={() => {
                                    onAnswer(currentAnswer);
                                }}
                            />
                        ))}
                    </div>
                </Container>
            </section>
            <section className={styles.stages}>
                <div className={styles.stages__container}>
                    <div className={styles.stages__content}>
                        {[...questions].reverse().map((currentQuestion) => (
                            <Stage
                                key={currentQuestion.id}
                                question={currentQuestion}
                                className={styles.stages__stage}
                                type={getStageType(currentQuestion)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Quiz;
