import React from 'react';
import './button.css';


interface ButtonProps {
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
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
    state?: string;
    color?: string;
    borderRadius?: number;
}

export const Button = ({
    mode = 'secondary', size = 'medium', state, backgroundColor, color, label, borderRadius, ...props
}: ButtonProps) => {
    return (
        <button
            type="button"
            className={['button', `button--${size}`, `button--${mode}`].join(' ')}
            style={{ backgroundColor, color, borderRadius }}
            {...props}
        >
            {label}
        </button>
    );
};
