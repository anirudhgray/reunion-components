import React, { useState } from 'react';
import '../main.css';
import '/node_modules/primeflex/primeflex.css'
import { Button } from './Button';
import { motion } from "framer-motion"


interface NavbarProps {
    navItems?: string[],
    start?: any | JSX.Element,
    end?: any | JSX.Element,
    className?: string,
    style?: object,
}

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-120%" },
}


export const Navbar = ({
    navItems, start, end, className, style,
    ...props
}: NavbarProps) => {
    const [mobileNav, showMobileNav] = useState(false)
    const [animMobileNav, showAnimMobileNav] = useState(false)
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
                <Button onClick={() => {
                    showAnimMobileNav(!animMobileNav)
                    if (mobileNav)
                        setTimeout(() => showMobileNav(!mobileNav), 300)
                    else showMobileNav(!mobileNav)
                }} className='p-0 md:hidden block' variant='text'>
                    {mobileNav ? (
                        <img src={require('../assets/cross.svg').default} alt='hamburger'></img>
                    ) : (
                        <img src={require('../assets/hamburger.svg').default} alt='hamburger'></img>
                    )}
                </Button>
            </div>
            <motion.div
                animate={animMobileNav ? "open" : "closed"}
                variants={variants}
                className={`py-4 px-3 flex-column flex-grow-1 bg-white align-items-start gap-3 ${mobileNav ? 'flex' : 'hidden'}`}>
                {navItems?.map((item, index) => {
                    return (
                        <Button key={index} className='p-2 text-lg' size='small' variant='text'>{item}</Button>
                    )
                })}
                {(React.isValidElement(end)) ? end : (
                    <Button className='mt-4 align-self-center' size='medium' variant='filled' mode='primary'>{end}</Button>
                )}
            </motion.div>
        </div>
    );
};
