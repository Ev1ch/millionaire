import React, { ReactNode, useRef, MouseEvent, KeyboardEvent } from 'react';
import clsx from 'clsx';
import styles from './hexagon.module.scss';

interface IHexagonProps {
    children?: ReactNode;
    className?: string;
    containerClassName?: string;
    onClick?: (event?: MouseEvent<HTMLDivElement>) => void;
}

function Hexagon({ children, containerClassName, className, onClick }: IHexagonProps) {
    const hexagonRef = useRef<HTMLDivElement>(null);

    const clickHandler = (event: MouseEvent<HTMLDivElement>) => {
        if (!onClick) {
            return;
        }

        onClick(event);
    };

    const keydownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.code !== 'Enter') {
            return;
        }

        if (document.activeElement !== hexagonRef.current) {
            return;
        }

        if (!onClick) {
            return;
        }

        onClick();
    };

    return (
        <div
            role="button"
            className={clsx(styles.hexagon, className)}
            onClick={clickHandler}
            ref={hexagonRef}
            onKeyDown={keydownHandler}
            tabIndex={0}
        >
            <div className={clsx(styles.hexagon__container, containerClassName)}>{children}</div>
        </div>
    );
}

export default Hexagon;
