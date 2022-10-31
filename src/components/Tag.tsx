import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './tag.css';


type TagProps = {
    onClick?: () => void;
    style?: object;
    className?: string;
    content?: string;
}

export const Tag: React.FC<TagProps> = ({
    className, style, content
}: TagProps) => {
    return (
        <span style={{ ...style }} className={`${className} block text-xs font-light tag w-min radius-xs`}>
            {content}
        </span>
    );
};
