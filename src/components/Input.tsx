import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import '../main.css';


type InputProps = {
    disabled?: boolean;
    backgroundColor?: string;
    onClick?: () => void;
    style?: object;
    className?: string;
}

export const Input: React.FC<InputProps> = ({
    className, style, disabled, backgroundColor
}: InputProps) => {
    return (
        <input disabled={disabled}></input>
    );
};
