import React, { useEffect, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { NavLink, useLocation } from 'react-router';
import { getStoredList } from '../../utility/Utility';
import { getStoredWish } from '../../utility/Wish';

const Navbar = () => {
    const [list, setList] = useState(0);
    const [wish, setWish] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            const localList = getStoredList();
            const localWish = getStoredWish();
            setList(Array.isArray(localList) ? localList.length : 0);
            setWish(Array.isArray(localWish) ? localWish.length : 0);
        }, 300);

        return () => clearInterval(interval);
    }, []);

    const navbarBgColor = location.pathname === '/' ? 'bg-[#9538E2]' : 'bg-gray-800';

    const navLinkClass = (path) =>
        `text-lg ${location.pathname === path ? 'text-white font-semibold' : 'text-white hover:text-gray-200'}`;

    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <div className={`${navbarBgColor} transition-colors duration-300`}>
            <div className="navbar flex justify-between items-center px-4 py-3 md:px-8 shadow-sm">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <h1 className='text-white text-2xl font-bold'>Gadget Heaven</h1>
                    {/* Hamburger menu button on mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
                            {menuOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center">
                    <li><NavLink to="/"><span className={navLinkClass('/')}>Home</span></NavLink></li>
                    <li><NavLink to="/statistic"><span className={navLinkClass('/statistic')}>Statistic</span></NavLink></li>
                    <li><NavLink to="/dashboard"><span className={navLinkClass('/dashboard')}>Dashboard</span></NavLink></li>
                    <li><NavLink to="/review"><span className={navLinkClass('/review')}>Review</span></NavLink></li>
                </ul>

                {/* Icons */}
                <div className="flex gap-4 items-center ml-auto md:ml-0">
                    <div className="relative">
                        <button className="text-3xl text-white">
                            <TiShoppingCart />
                        </button>
                        {list > 0 && (
                            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {list}
                            </div>
                        )}
                    </div>
                    <div className="relative">
                        <button className="text-3xl text-white">
                            <FaHeart />
                        </button>
                        {wish > 0 && (
                            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {wish}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <ul className="flex flex-col md:hidden bg-[#9538E2] text-white px-4 py-2 space-y-2 transition-all duration-300">
                    <li><NavLink to="/" onClick={toggleMenu}><span className={navLinkClass('/')}>Home</span></NavLink></li>
                    <li><NavLink to="/statistic" onClick={toggleMenu}><span className={navLinkClass('/statistic')}>Statistic</span></NavLink></li>
                    <li><NavLink to="/dashboard" onClick={toggleMenu}><span className={navLinkClass('/dashboard')}>Dashboard</span></NavLink></li>
                    <li><NavLink to="/review" onClick={toggleMenu}><span className={navLinkClass('/review')}>Review</span></NavLink></li>
                </ul>
            )}
        </div>
    );
};

export default Navbar;
