import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import { IIndexedAnswer } from 'domain/answer';
import styles from './answer.module.scss';

const Styles = {
    disabled: styles.answer_disabled,
    active: styles.answer_active,
    wrong: styles.answer_wrong,
    correct: styles.answer_correct,
};

interface IAnswerProps {
    onClick?: (answer: IIndexedAnswer) => void;
    className?: string;
    label: string;
    answer: IIndexedAnswer;
    style?: keyof typeof Styles;
    disabled?: boolean;
}

function Answer({ label, onClick, className, answer, style, disabled }: IAnswerProps) {
    const clickHandler = async () => {
        if (disabled) {
            return;
        }

        if (!onClick) {
            return;
        }

        onClick(answer);
    };

    return (
        <div className={clsx(styles.answer, style && Styles[style], className)}>
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
