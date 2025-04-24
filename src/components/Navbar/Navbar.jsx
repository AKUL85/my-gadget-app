import React, { useEffect, useState } from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router'; // Fixed import
import { getStoredList } from '../../utility/Utility';
import { getStoredWish } from '../../utility/Wish';

const Navbar = () => {
    const [list, setList] = useState(0);
    const [wish, setWish] = useState(0);
    const location = useLocation(); // Get current route location

    useEffect(() => {
        const interval = setInterval(() => {
            const localList = getStoredList();
            const localWish = getStoredWish();
            setList(Array.isArray(localList) ? localList.length : 0);
            setWish(Array.isArray(localWish) ? localWish.length : 0);
        }, 300); 

        return () => clearInterval(interval); 
    }, []);

    // Determine navbar background color based on route
    const navbarBgColor = location.pathname === '/' ? 'bg-[#9538E2]' : 'bg-default-color'; // Change 'bg-default-color' to your desired default

    return (
        <div className={`${navbarBgColor} transition-colors duration-300`}> {/* Added transition for smooth color change */}
            <div className="navbar shadow-sm">
                <div className="navbar-start">
                    <div>
                        <h1 className='text-[#FFFFFF] text-2xl font-bold'>Gadget Heaven</h1>
                    </div>
                </div>
                <div className="navbar-center list-none gap-2 my-auto">
                    <NavLink to="/"> 
                        <li>
                            <button className={`text-xl ${location.pathname === '/' ? 'text-white font-semibold' : 'text-[#FFFFFF] hover:text-gray-200'}`}>
                                Home
                            </button>
                        </li>
                    </NavLink>
                    <NavLink to="/statistic">
                        <li>
                            <button className={`text-xl ${location.pathname === '/statistic' ? 'text-white font-semibold' : 'text-[#FFFFFF] hover:text-gray-200'}`}>
                                Statistic
                            </button>
                        </li>
                    </NavLink>
                    <NavLink to="/dashboard">
                        <li>
                            <button className={`text-xl ${location.pathname === '/dashboard' ? 'text-white font-semibold' : 'text-[#FFFFFF] hover:text-gray-200'}`}>
                                Dashboard
                            </button>
                        </li>
                    </NavLink>
                    <NavLink to="/review">
                        <li>
                            <button className={`text-xl ${location.pathname === '/review' ? 'text-white font-semibold' : 'text-[#FFFFFF] hover:text-gray-200'}`}>
                                Review
                            </button>
                        </li>
                    </NavLink>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="relative inline-block">
                        <button className="text-3xl text-white">
                            <TiShoppingCart />
                        </button>
                        {list > 0 && (
                            <div className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {list}
                            </div>
                        )}
                    </div>
                    <div className="relative inline-block">
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
        </div>
    );
};

export default Navbar;