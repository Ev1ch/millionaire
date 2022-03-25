import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import { IIndexedQuestion } from 'domain/question';
import styles from './stage.module.scss';

const Types = {
    passed: styles.stage_passed,
    active: styles.stage_active,
};

interface IStageProps {
    question: IIndexedQuestion;
    className?: string;
    type?: keyof typeof Types;
}

function Stage({ question, className, type }: IStageProps) {
    return (
        <div className={clsx(styles.stage, type && Types[type], className)}>
            <Hexagon className={styles.stage__hexagon}>
                <p className={styles.stage__prize}>
                    &#36;
                    {question.prize.toLocaleString('en-US')}
                </p>
            </Hexagon>
        </div>
    );
}

export default Stage;
