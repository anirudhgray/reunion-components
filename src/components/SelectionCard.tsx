import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './selectionCard.css';
import '../main.css'


type SelectionCardProps = {
    title?: string;
    description?: string;
    style?: object;
    className?: string;
    selected?: boolean;
    backgroundColor?: string;
}

export const SelectionCard: React.FC<SelectionCardProps> = ({
    className, style, title, description, backgroundColor, selected = true
}: SelectionCardProps) => {
    return (
        <div style={{ ...style, borderColor: backgroundColor }} className={`flex flex-column alert-button ${!selected ? 'alert-button--unselected' : null} ${className}`}>
            <div className='alert-button--main'>
                <h2 className='alert-button--title'>{title}</h2>
                <p className='alert-button--desc'>{description}</p>
            </div>
            <div style={{ backgroundColor }} className={`alert-button--click flex ${!selected ? 'alert-button--click-unselected' : null}`}>
                <img src={require('../assets/tick.svg').default} alt='tick' height={40} className={`mx-auto ${!selected ? 'opacity-0' : 'opacity-100'}`}></img>
            </div>
        </div >
    );
};
