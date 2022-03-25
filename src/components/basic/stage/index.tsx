import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import IQuestion from 'domain/question';
import styles from './stage.module.scss';

interface IStageProps {
    question: IQuestion;
    className?: string;
}

function Stage({ question, className }: IStageProps) {
    return (
        <div className={clsx(styles.stage, className)}>
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
