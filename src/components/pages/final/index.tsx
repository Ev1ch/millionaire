import React from 'react';
import { Button, Container } from 'components/basic';
import finalImage from 'assets/images/thumb-up.svg';
import styles from './final.module.scss';

interface IFinalProps {
    prize: number;
    onTryAgain: () => void;
}

function Final({ prize, onTryAgain }: IFinalProps) {
    return (
        <main className={styles.final}>
            <Container className={styles.final__container}>
                <img src={finalImage} alt="" className={styles.final__image} />
                <div className={styles.final__content}>
                    <h2 className={styles.final__subtitle}>Total score:</h2>
                    <h1 className={styles.final__title}>
                        &#36;
                        {prize.toLocaleString('en-US')}
                        &nbsp;earned
                    </h1>
                    <Button className={styles.final__button} onClick={onTryAgain}>
                        Try again
                    </Button>
                </div>
            </Container>
        </main>
    );
}

export default Final;
