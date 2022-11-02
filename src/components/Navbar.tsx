import React, { useState } from 'react';
import '../main.css';
import './navbar.css'
import '/node_modules/primeflex/primeflex.css'
import { Button } from './Button';
import { motion } from "framer-motion"


interface NavbarProps {
    onClick?: () => void;
    navItems?: NavItem[],
    start?: any | JSX.Element,
    end?: any | JSX.Element,
    className?: string,
    style?: object,
}

interface NavItem {
    name?: string;
    path?: string;
}

const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-120%" },
}


export const Navbar = ({
    navItems, start, end, className, style, onClick,
    ...props
}: NavbarProps) => {
    const [mobileNav, showMobileNav] = useState(false)
    const [animMobileNav, showAnimMobileNav] = useState(false)
    return (
        <div onClick={onClick}>
            <div style={{ ...style }} className={`flex flex-row navbar justify-content-between align-items-center ${className} lg:px-3 lg:py-2 p-2`} {...props}>
                {(React.isValidElement(start)) ? start : (
                    <img className='h-2rem' alt='logo' src={start}></img>
                )}
                <nav className={`md:flex align-items-center hidden ml-auto lg:gap-5 gap-2`}>
                    {navItems?.map((item, index) => {
                        return (
                            <a href={item.path || "/"}>
                                <Button data-text={item} key={index} className='p-2 navbar--navbutton font-light' size='small' variant='text'>{item.name}</Button>
                            </a>
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
                transition={{ type: "tween", ease: "easeInOut" }}
                className={`z-2 py-4 px-3 absolute flex-column flex-grow-1 navbar w-screen h-screen align-items-start gap-3 ${mobileNav ? 'flex' : 'hidden'}`}>
                {navItems?.map((item, index) => {
                    return (
                        <a href={item.path || "/"}>
                            <Button key={index} className='p-2 navbar--navbutton font-light text-lg' size='small' variant='text'>{item.name}</Button>
                        </a>
                    )
                })}
                {(React.isValidElement(end)) ? end : (
                    <Button className='mt-4 align-self-center' size='medium' variant='filled' mode='primary'>{end}</Button>
                )}
            </motion.div>
        </div>
    );
};
