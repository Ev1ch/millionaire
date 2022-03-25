import React from 'react';
import clsx from 'clsx';
import styles from './icon-button.module.scss';

interface IIconButtonProps {
    icon: string;
    className?: string;
    text?: string;
}

function IconButton({ className, icon, text }: IIconButtonProps) {
    return (
        <button type="button" className={clsx(styles.iconButton, className)}>
            <img src={icon} alt={text} />
        </button>
    );
}

export default IconButton;
