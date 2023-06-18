import { InputHTMLAttributes, memo } from 'react';
import cn from 'classnames';

import styles from './Input.module.scss';

interface IInputComponent extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    inputClassName?: string;
}

const InputComponent = (props: IInputComponent) => {
    const { className, inputClassName } = props;

    return (
        <div className={cn(styles.container, className)}>
            <input className={cn(styles.input, inputClassName)} />
        </div>
    );
};

export const Input = memo(InputComponent);
