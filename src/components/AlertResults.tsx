import React from 'react';
import '/node_modules/primeflex/primeflex.css'
import './alertResults.css';
import { Tag } from './Tag';


type AlertResultsProps = {
    /**
    *style for container element
    */
    style?: object;
    /**
    *className for container element
    */
    className?: string;
    /**
    *style for individual item elements
    */
    itemStyle?: object;
    /**
    *className for individual item elements
    */
    itemClassName?: object;
    /**
     * id, name, owner and address
     */
    items?: Item[];
}

export interface Item {
    id: string;
    name: string;
    owner: string;
    address: string;
}

export const AlertResults: React.FC<AlertResultsProps> = ({
    className, style, items, itemClassName, itemStyle
}: AlertResultsProps) => {
    return (
        <div style={{ ...style }} className={`flex flex-column radius-md alert-results ${className}`}>
            {items?.map((item, index) => {

                return (
                    <div style={{ ...itemStyle }} className={`${itemClassName} text-sm alert-results--item flex flex-row justify-content-between gap-4`}>
                        <div className="flex-shrink-0 mr-4">
                            <p>{item.name}</p>
                            <Tag className='mt-2' content={item.id} />
                        </div>
                        <div className="md:block hidden font-light">
                            <p>{item.owner}</p>
                        </div>
                        <div className="md:block hidden font-light">
                            <p>{item.address}</p>
                        </div>
                        <div className='flex-shrink-0 flex flex-column align-items-center gap-1 justify-content-center'>
                            <img src={require('../assets/add.svg').default} alt="add" />
                            <p className='text-center sm:block hidden'>Add to tracklist</p>
                        </div>
                    </div>
                )
            })}
        </div>
    );
};
