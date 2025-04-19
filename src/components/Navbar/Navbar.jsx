import React from 'react';
import { TiShoppingCart } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router';
const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar shadow-sm ">
                <div className="navbar-start">
                    
                        <div>
                           <h1 className='text-[#FFFFFF] text-2xl font-bold'>Gadget Heaven</h1>
                        </div>
                    
                    
                </div>
                <div className="navbar-center list-none gap-2 my-auto">
                   <NavLink to="/"> <li><button className='text-xl text-[#FFFFFF] hover:text-gray-200'>Home</button></li></NavLink>
                    <NavLink to="/statistic"><li><button className='text-xl text-[#FFFFFF] hover:text-gray-200'>Statistic</button></li></NavLink>
                    <NavLink to="/dashboard"><li><button className='text-xl text-[#FFFFFF] hover:text-gray-200'>Dashboard</button></li></NavLink>
                </div>
                <div className="navbar-end">
                    <button className="text-2xl">
                    <TiShoppingCart />
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <div className="text-2xl">
                        <FaHeart />
                            
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;