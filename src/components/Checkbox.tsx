import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './checkbox.css';


type CheckboxProps = {
    disabled?: boolean;
    backgroundColor?: string;
    onClick?: () => void;
    style?: object;
    className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    className, style, disabled, backgroundColor, ...props
}: CheckboxProps) => {
    return (
        <label className='checkbox--main'>
            <input {...props} disabled={disabled} type='checkbox'>
            </input >
            <span
                style={{ backgroundColor, ...style }}
                className={`checkbox ${disabled ? 'checkbox--disabled' : null} ${className}`}
            ></span>
        </label>
    );
};
