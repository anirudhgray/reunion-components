import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './modal.css';
import { Button } from './Button'


type ModalProps = {
    onClick?: () => void;
    style?: object;
    className?: string;
    title?: string;
    description?: string;
    theme?: string;
    buttons?: any | JSX.Element
}

export const Modal: React.FC<ModalProps> = ({
    className, style, title, description, buttons, theme
}: ModalProps) => {
    return (
        <div style={style} className={`flex flex-column justify-content-center align-items-center ${className} ${theme === 'error' ? 'modal--error' : theme === 'success' ? 'modal--success' : 'modal--default'}`}>
            <img height={120} src={theme === 'error' ? require(`../assets/error.svg`).default : theme === 'success' ? require(`../assets/greenTick.svg`).default : require(`../assets/info.svg`).default} alt='icon'></img>
            <h2 className='mt-3 modal--title'>{title}</h2>
            <p className='modal--desc'>{description}</p>
            {(React.isValidElement(buttons)) ? buttons : (
                <Button className='mt-4 align-self-center' size='medium' variant='filled' mode={theme === 'error' ? 'danger' : 'primary'}>{buttons}</Button>
            )}
        </div>
    );
};
