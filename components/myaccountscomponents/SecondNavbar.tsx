'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function SecondNavbar() {
    const [activeLink, setActiveLink] = useState('/');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            const pathname = window.location.pathname;
            setActiveLink(pathname);
        }
    }, [isMounted]);

    const handleClick = (href) => {
        setActiveLink(href);
    };

    if (!isMounted) return null; // Ensure the component only renders on the client side

    return (
        <div className="w-full border-2 mb-5 bg-white text-black p-2 shadow-md sticky top-0 overflow-x-auto">
            <ul className="md:flex  items-center justify-around font-bold flex-nowrap whitespace-nowrap">

                <li className="inline-block md:block px-3">
                    <Link href="/myaccount">
                        <span
                            onClick={() => handleClick('/myaccount')}
                            className={activeLink === '/myaccount' ? 'text-[#0C7203]' : ''}
                        >
                            My Account
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/mypet">
                        <span
                            onClick={() => handleClick('/mypet')}
                            className={activeLink === '/mypet' ? 'text-[#0C7203]' : ''}
                        >
                            My Pet
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/sitter">
                        <span
                            onClick={() => handleClick('/sitter')}
                            className={activeLink === '/sitter' ? 'text-[#0C7203]' : ''}
                        >
                            Sitter
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/walker">
                        <span
                            onClick={() => handleClick('/walker')}
                            className={activeLink === '/walker' ? 'text-[#0C7203]' : ''}
                        >
                            Walker
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/trainer">
                        <span
                            onClick={() => handleClick('/trainer')}
                            className={activeLink === '/trainer' ? 'text-[#0C7203]' : ''}
                        >
                            Trainer
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/groomer">
                        <span
                            onClick={() => handleClick('/groomer')}
                            className={activeLink === '/groomer' ? 'text-[#0C7203]' : ''}
                        >
                            Groomer
                        </span>
                    </Link>
                </li>
                <li className="inline-block md:block px-3">
                    <Link href="/veterinary">
                        <span
                            onClick={() => handleClick('/veterinary')}
                            className={activeLink === '/veterinary' ? 'text-[#0C7203]' : ''}
                        >
                            Veterinary
                        </span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SecondNavbar;
