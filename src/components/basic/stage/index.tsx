import React from 'react';
import clsx from 'clsx';
import { Hexagon } from 'components/basic';
import { IIndexedQuestion } from 'domain/question';
import { formatNumber } from 'helpers';
import styles from './stage.module.scss';

const Styles = {
    passed: styles.stage_passed,
    active: styles.stage_active,
};

interface IStageProps {
    question: IIndexedQuestion;
    className?: string;
    style?: keyof typeof Styles;
}

function Stage({ question, className, style }: IStageProps) {
    return (
        <div className={clsx(styles.stage, style && Styles[style], className)}>
            <Hexagon className={styles.stage__hexagon}>
                <p className={styles.stage__prize}>
                    &#36;
                    {formatNumber(question.prize)}
                </p>
            </Hexagon>
        </div>
    );
}

export default Stage;
