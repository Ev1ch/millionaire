import React from 'react';
import { Button, Container } from 'components/basic';
import styles from './error.module.scss';

interface IErrorProps {
    title: string;
    message: string;
}

function Error({ title, message }: IErrorProps) {
    const refreshHandler = () => {
        document.location.reload();
    };

    return (
        <main className={styles.error}>
            <Container className={styles.error__container}>
                <div className={styles.error__content}>
                    <h1 className={styles.error__title}>{title}</h1>
                    <h2 className={styles.error__message}>{message}</h2>
                    <Button onClick={refreshHandler}>Refresh page</Button>
                </div>
            </Container>
        </main>
    );
}

export default Error;
