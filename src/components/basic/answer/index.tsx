import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import { IIndexedAnswer } from 'domain/answer';
import styles from './answer.module.scss';

interface IAnswerProps {
    onClick?: (answer: IIndexedAnswer) => void;
    className?: string;
    label: string;
    answer: IIndexedAnswer;
}

function Answer({ label, onClick, className, answer }: IAnswerProps) {
    const clickHandler = async () => {
        if (!onClick) {
            return;
        }

        onClick(answer);
    };

    return (
        <div className={clsx(styles.answer, className)}>
            <Hexagon
                className={styles.answer__hexagon}
                containerClassName={styles.answer__container}
                onClick={clickHandler}
            >
                <span className={styles.answer__label}>{label}</span>
                <p className={styles.answer__text}>{answer.text}</p>
            </Hexagon>
        </div>
    );
}

export default Answer;
