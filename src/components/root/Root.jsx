import React from 'react';
import Navbar from '../Navbar/Navbar';
import Fotter from '../Footer/Fotter';
import { Outlet } from 'react-router';

const Root = () => {
    return (

        <div>

            <div className='max-w-6xl mx-auto'>

                <Navbar></Navbar>

                <Outlet></Outlet>

                <Fotter></Fotter>
            </div>
        </div>

    );
};

export default Root;