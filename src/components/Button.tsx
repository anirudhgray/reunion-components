import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './button.css';


type ButtonProps = {
    /**
     * Is this the principal call to action on the page?
     */
    mode?: string;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: string;
    /**
     * Button contents
     */
    label?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    disabled?: boolean;
    state?: string;
    color?: string;
    borderRadius?: number;
    variant?: string;
    children?: JSX.Element | string;
    style?: object;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    mode = 'secondary', size = 'medium', state, backgroundColor, color, className, label = 'Button', variant, onClick, borderRadius, style, children, disabled
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            type="button"
            className={['button', `button--${size}`, `button--${mode}`, `button--${variant}`, `${disabled ? 'opacity-60' : 'opacity-100'}`, className].join(' ')}
            style={{ backgroundColor, color, borderRadius, ...style }}
            onClick={onClick}
        >
            {children ? children : label}
        </button>
    );
};
