"use client";
import React from 'react';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from 'next/link';
import Image from 'next/image';

const HeaderComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true);
    }, []);


    if (!mounted) {
        return null;
    }
    return (
        <div className='header mt-2'>
            <nav className="border-b-2 fixed w-full z-10 top-0 left-0 dark:border-b bg-slate-100 dark:bg-[#081b29] shadow-md py-3">
                <div className="max-w-screen flex flex-wrap items-center justify-between px-4">
                    <a href="#" className="flex items-center">
                        <Image height={64} width={48} src="https://static.vecteezy.com/system/resources/thumbnails/024/785/816/small/3d-male-character-happy-working-on-a-laptop-free-png.png"
                            className="h-[3rem] mx-3 bg-primary dark:bg-dark-primary rounded-full" alt="Flowbite Logo" />
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className='primary-button' onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "light" ? "Dark" : "Light"} Mode</button>
                        <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-cta" type="button" className="md:hidden w-12 ml-2" aria-controls="navbar-cta" aria-expanded="false">
                            <svg
                                className={`fill-current px-3 py-2 ${isOpen ? "hidden" : "block"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                                className={`fill-current px-3 py-2 ${isOpen ? "block" : "hidden"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>
                    <div className={`w-full block md:flex lg:items-center md:w-auto ${isOpen ? "block" : "hidden"}`} id="navbar-cta">
                        <ul
                            className="flex flex-col font-medium p-4 md:p-0 mt-2 focus:outline-0 border-slate-100 rounded-lg 
                                 bg-slate-200 md:flex-row md:space-x-4 md:mt-0 md:border-0 md:bg-slate-100 dark:bg-[#081b29] 
                                 border-2 dark:border-gray-700"
                        >
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="#" className='navbar-link'>Home</Link>
                            </li>
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="#tech-stack" className='navbar-link'>Tech Stack</Link>
                            </li>
                            <li onClick={() => setIsOpen(false)}>
                                <Link href="" className='navbar-link'>Projects</Link>
                            </li>
                            <li>
                                <Link href="" className='navbar-link'>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default HeaderComponent;