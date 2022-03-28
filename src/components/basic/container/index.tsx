import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './container.module.scss';

interface IContainerProps {
    className?: string;
    children?: ReactNode;
}

function Container({ className, children }: IContainerProps) {
    return <div className={clsx(styles.container, className)}>{children}</div>;
}

export default Container;
