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
    endButton?: string;
}

export const Input: React.FC<InputProps> = ({
    className, style, label, placeholder, disabled, labelClassName, labelStyle, error, endButton, ...props
}: InputProps) => {
    return (
        <label style={{ ...labelStyle }} className={`${labelClassName} textinput--label ${error ? 'text--error' : null}`}>
            {label}
            <input {...props} style={{ ...style }} placeholder={placeholder} className={`${label ? 'mt-2' : null} ${endButton ? 'pr-4' : null} block textinput ${className} ${error ? 'textinput--error' : null}`} disabled={disabled}></input>
            {endButton ? (
                <span className='textinput--end-button'>
                    <img alt='endbutton' src={require('../assets/tick.svg').default}></img>
                </span>
            ) : null}
        </label>
    );
};
