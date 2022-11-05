import React, { useEffect, useState } from 'react';
import '/node_modules/primeflex/primeflex.css'
import './pagination.css';
import { Button } from './Button'


type PaginationProps = {
    style?: object;
    className?: string;
    page?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
    className, style, page = 1, ...props
}: PaginationProps) => {
    const [p, setPage] = useState(page)
    useEffect(() => {
        setPage(page)
    }, [page])
    return (
        <div className='flex flex-row gap-2'>
            <Button onClick={() => { setPage(p - 1) }} disabled={p <= 1} size='tiny' variant='text' mode='secondary'>
                <img alt='left' src={require('../assets/left-arrow.svg').default}></img>
            </Button>
            {p > 1 ? (
                <Button onClick={() => { setPage(p - 1) }} size='tiny' mode='secondary' label={p - 1}></Button>
            ) : <Button disabled size='tiny' mode='secondary'>&#8226;</Button>}
            <Button size='tiny' mode='primary' label={p}></Button>
            <Button onClick={() => { setPage(p + 1) }} size='tiny' mode='secondary' label={p + 1}></Button>
            <Button onClick={() => { setPage(p + 1) }} size='tiny' variant='text' mode='secondary'>
                <img alt='right' src={require('../assets/right-arrow.svg').default}></img>
            </Button>
        </div>
    );
};
