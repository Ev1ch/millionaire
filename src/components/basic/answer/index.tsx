import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import IAnswer from 'domain/answer';
import styles from './answer.module.scss';

interface IAnswerProps {
    onClick?: (answer: IAnswer) => void;
    className?: string;
    id: string;
    answer: IAnswer;
}

function Answer({ id, onClick, className, answer }: IAnswerProps) {
    const clickHandler = () => {
        if (!onClick) {
            return;
        }

        onClick(answer);
    };

    return (
        <div className={clsx(styles.answer, styles.answer_disabled, className)}>
            <Hexagon
                className={styles.answer__hexagon}
                containerClassName={styles.answer__container}
                onClick={clickHandler}
            >
                <span className={styles.answer__id}>{id}</span>
                <p className={styles.answer__text}>{answer.text}</p>
            </Hexagon>
        </div>
    );
}

export default Answer;
