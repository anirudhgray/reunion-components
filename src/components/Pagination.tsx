import React, { useEffect, useState } from 'react';
import '/node_modules/primeflex/primeflex.css'
import './pagination.css';
import { Button } from './Button'


type PaginationProps = {
    style?: object;
    className?: string;
    page?: number;
    totalPages?: number;
    setCurrentPage?: (param: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
    className, style, page = 1, setCurrentPage, totalPages, ...props
}: PaginationProps) => {
    const [p, setPage] = useState(page)
    useEffect(() => {
        setPage(page)
    }, [page])
    useEffect(() => {
        if (setCurrentPage)
            setCurrentPage(p)
    }, [p, setCurrentPage])
    return (
        <div {...props} style={{ ...style }} className={`text-xs flex flex-row gap-2 ${className}`}>
            <Button onClick={() => { setPage(p - 1) }} disabled={p <= 1} size='tiny' variant='text' mode='secondary'>
                <img alt='left' src={require('../assets/left-arrow.svg').default}></img>
            </Button>
            {p > 1 ? (
                <Button onClick={() => { setPage(p - 1) }} size='tiny' className='pagination--button' mode='secondary' label={p - 1}></Button>
            ) : <Button className='pagination--button' disabled size='tiny' mode='secondary'>&#8226;</Button>}
            <Button className='pagination--button' size='tiny' mode='primary' label={p}></Button>
            {p !== totalPages ? (
                <Button className='pagination--button' onClick={() => { setPage(p + 1) }} size='tiny' mode='secondary' label={p + 1}></Button>
            ) : (
                <Button className='pagination--button' disabled size='tiny' mode='secondary'>&#8226;</Button>
            )}
            <Button disabled={p === totalPages} onClick={() => { setPage(p + 1) }} size='tiny' variant='text' mode='secondary'>
                <img alt='right' src={require('../assets/right-arrow.svg').default}></img>
            </Button>
        </div>
    );
};
