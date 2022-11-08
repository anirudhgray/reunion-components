import React, { useState } from 'react';
import '/node_modules/primeflex/primeflex.css'
import './input.css';


type InputProps = {
    disabled?: boolean;
    placeholder?: string;
    label?: string;
    error?: string;
    onClick?: () => void;
    style?: object;
    labelStyle?: object;
    labelClassName?: object;
    className?: string;
    endButton?: string;
    type?: string;
}

export const Input: React.FC<InputProps> = ({
    className, style, label, placeholder, disabled, labelClassName, labelStyle, error, endButton, type, ...props
}: InputProps) => {
    const [inputType, setInputType] = useState(type)
    const switchPassword = () => {
        if (inputType === 'password')
            setInputType('text')
        else
            setInputType('password')
    }
    return (
        <label style={{ ...labelStyle }} className={`${labelClassName} textinput--label ${error ? 'text--error' : null}`}>
            {label}
            <div className='w-min relative'>
                <input onInput={(e) => { if (type === "otp") e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, ''); }} maxLength={type === "otp" ? 1 : undefined} type={inputType} {...props} style={{ ...style }} placeholder={placeholder} className={`${label ? 'mt-2' : null} ${type === 'password' ? 'pr-6' : null} block textinput ${className} ${(error && error.length) ? 'textinput--error' : null}`} disabled={disabled}></input>
                {endButton ? (
                    <span className='textinput--end-button'>
                        <img alt='endbutton' src={require('../assets/tick.svg').default}></img>
                    </span>
                ) : null}
                {type === "password" ? (
                    <img onClick={switchPassword} className='absolute translate-up top-50 right-0 mr-3' src={inputType === 'password' ? require('../assets/showpass.svg').default : require('../assets/hidepass.svg').default} alt='show'></img>
                ) : null}
            </div>
            {(error && error.length) ? (
                <p className='mt-1 text-xs text-error'>{error}</p>
            ) : null}
        </label>
    );
};
