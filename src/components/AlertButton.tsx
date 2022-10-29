import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './alertButton.css';
import '../main.css'


type AlertButtonProps = {
    title?: string;
    description?: string;
    onClick?: () => void;
    style?: object;
    className?: string;
    selected?: boolean;
    backgroundColor?: string;
}

export const AlertButton: React.FC<AlertButtonProps> = ({
    className, style, title, description, backgroundColor, selected = true
}: AlertButtonProps) => {
    return (
        <div style={{ ...style, borderColor: backgroundColor }} className={`flex flex-column alert-button ${!selected ? 'alert-button--unselected' : null} ${className}`}>
            <div className='alert-button--main'>
                <h2 className='alert-button--title'>{title}</h2>
                <p className='alert-button--desc'>{description}</p>
            </div>
            <div style={{ backgroundColor }} className={`alert-button--click flex ${!selected ? 'alert-button--click-unselected' : null}`}>
                <img src='#' alt='tick' className={`mx-auto ${!selected ? 'opacity-0' : 'opacity-100'}`}></img>
            </div>
        </div>
    );
};
