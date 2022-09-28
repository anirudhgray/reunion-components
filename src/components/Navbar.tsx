import React, { useState } from 'react';
import '../main.css';
import '/node_modules/primeflex/primeflex.css'
import { Button } from './Button';


interface NavbarProps {
    navItems?: string[],
    start?: any | JSX.Element,
    end?: any | JSX.Element,
    className?: string,
    style?: object,
}

export const Navbar = ({
    navItems, start, end, className, style,
    ...props
}: NavbarProps) => {
    const [mobileNav, showMobileNav] = useState(false)
    return (
        <div>
            <div style={{ ...style }} className={`flex flex-row bg-white justify-content-between align-items-center ${className} px-3 py-2`} {...props}>
                {(React.isValidElement(start)) ? start : (
                    <img className='h-2rem' alt='logo' src={start}></img>
                )}
                <nav className={`md:flex hidden ml-auto lg:gap-5 gap-3`}>
                    {navItems?.map((item, index) => {
                        return (
                            <Button key={index} className='p-2' size='small' variant='text'>{item}</Button>
                        )
                    })}
                    {(React.isValidElement(end)) ? end : (
                        <Button size='small' variant='filled' mode='primary'>{end}</Button>
                    )}
                </nav>
                <Button onClick={() => showMobileNav(!mobileNav)} className='p-0 md:hidden block' variant='text'>
                    <img src={require('../assets/hamburger.svg').default} alt='hamburger'></img>
                </Button>
            </div>
            <div className={`${mobileNav ? 'block' : 'hidden'}`}>
                boom test
            </div>
        </div>
    );
};
