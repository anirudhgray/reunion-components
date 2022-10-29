import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './alertButton.css';


type AlertButtonProps = {
    title?: string;
    description?: string;
    onClick?: () => void;
    style?: object;
    className?: string;
}

export const AlertButton: React.FC<AlertButtonProps> = ({
    className, style, title, description
}: AlertButtonProps) => {
    return (
        <div className='flex flex-column'>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div></div>
        </div>
    );
};
