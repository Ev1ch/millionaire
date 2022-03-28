import React from 'react';
import { Button, Container } from 'components/basic';
import welcomeImage from 'assets/images/thumb-up.svg';
import styles from './start.module.scss';

interface IStartProps {
    onStart: () => void;
}

function Start({ onStart }: IStartProps) {
    return (
        <main className={styles.start}>
            <Container className={styles.start__container}>
                <img src={welcomeImage} alt="" className={styles.start__image} />
                <div className={styles.start__content}>
                    <h1 className={styles.start__title}>Who wants to be a millionaire?</h1>
                    <Button className={styles.start__button} onClick={onStart}>
                        Start
                    </Button>
                </div>
            </Container>
        </main>
    );
}

export default Start;
