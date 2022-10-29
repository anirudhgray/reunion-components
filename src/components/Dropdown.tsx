import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './dropdown.css';


type DropdownProps = {
    options?: string[];
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

export const Dropdown: React.FC<DropdownProps> = ({
    className, style, label, placeholder, disabled, labelClassName, labelStyle, error, options
}: DropdownProps) => {
    return (
        <label style={{ ...labelStyle }} className={`${labelClassName} ${error ? 'text--error' : null}`}>
            {label}
            <select style={{ ...style }} className={`mt-2 block dropdown ${className} ${error ? 'dropdown--error' : null}`} disabled={disabled}>
                <option className='dropdown--placeholder'>{placeholder}</option>
                {options?.map((option, index) => {
                    return (
                        <option>{option}</option>
                    )
                })}
            </select>
        </label>
    );
};
