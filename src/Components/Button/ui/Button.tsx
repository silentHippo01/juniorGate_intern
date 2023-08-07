import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './Button.module.scss';
import classNames from 'classnames';

export type ButtonThemeType = 'primary' | 'ouline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children?: ReactNode;
    theme?: string;
    className?: string;
}

export const Button = memo((props: ButtonProps) => {
    const {
        children,
        theme = 'primary',
        className,
        ...otherProps
    } = props;

    const mods: Record<string, boolean | undefined> = {
        [cls[theme]]: true,
    }

    return (
        <button
            type="button" 
            className={classNames(cls.Button, mods, [className])} 
            {...otherProps} 
        >
            {children}
        </button>
    );
});
