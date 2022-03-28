import React, { MouseEventHandler, ReactNode } from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

interface IButtonProps {
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

function Button({ className, onClick, children }: IButtonProps) {
    const clickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
        if (!onClick) {
            return;
        }

        onClick(event);
    };

    return (
        <button type="button" className={clsx(styles.button, className)} onClick={clickHandler}>
            {children}
        </button>
    );
}

export default Button;
