import React, { useState, useEffect } from 'react';
import Logo from "./Images/logo.png";

function Menu() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <menu className="bg-black text-white z-50">
                <nav className={`p-6 bg-black fixed top-0 left-0 right-0 transition-all duration-500 ${isScrolled ? 'border-b-2 border-white' : ''}`}>
                    <div className="absolute flex items-center top-[3px] left-10">
                        <a href="/" className='cursor-pointer'><img src={Logo} alt="Logo" width={70} /></a>
                        <div className="border-r-2 h-4 mr-4"></div>
                        <ul className="mb-1">
                            <li><a href="mailto:contact@matheobatelier.fr">contact@matheobatelier.fr</a></li>
                        </ul>
                    </div>
                    <div className="mb-1">
                        <ul className="flex items-center justify-center gap-4">
                            <li><a href="/">Projets</a></li>
                            <div className="border-r-2 h-4"></div>
                            <li><a href="/">Services</a></li>
                            <div className="border-r-2 h-4"></div>
                            <li><a href="/">Blog</a></li>
                        </ul>
                    </div>
                    <div className="absolute top-[18px] right-10">
                        <a href="/#Contact" className='cursor-pointer'><button className="bg-blue-700 rounded-full px-4 py-2">Contact</button></a>
                    </div>
                </nav>
            </menu>
        </>
    );
}

export default Menu;
