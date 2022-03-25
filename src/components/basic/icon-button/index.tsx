import React, { MouseEvent } from 'react';
import clsx from 'clsx';
import styles from './icon-button.module.scss';

interface IIconButtonProps {
    icon?: string;
    className?: string;
    text?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function IconButton({ className, icon, text, onClick }: IIconButtonProps) {
    const clickHandler = (event: MouseEvent<HTMLButtonElement>) => {
        if (!onClick) {
            return;
        }

        onClick(event);
    };

    return (
        <button type="button" className={clsx(styles.iconButton, className)} onClick={clickHandler}>
            {icon && <img src={icon} alt={text} />}
        </button>
    );
}

export default IconButton;
