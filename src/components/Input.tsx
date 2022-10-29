import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './input.css';


type InputProps = {
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    error?: boolean;
    onClick?: () => void;
    style?: object;
    labelStyle?: object;
    labelClassName?: object;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    className, style, label, placeholder, disabled, labelClassName, labelStyle, error
}: InputProps) => {
    return (
        <label style={{ ...labelStyle }} className={`${labelClassName} ${error ? 'text--error' : null}`}>
            {label}
            <input style={{ ...style }} placeholder={placeholder} className={`mt-2 block textinput ${className} ${error ? 'textinput--error' : null}`} disabled={disabled}></input>
        </label>
    );
};
