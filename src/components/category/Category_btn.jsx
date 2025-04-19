import React from 'react';

const Category_btn = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-col gap-4 md:border md:border-gray-100 md:p-2 md:rounded-2xl'>
            <button className="btn bg-blue-200 font-bold text-black md:btn-dash">Products</button>
            <button className="btn bg-blue-200 font-bold text-black md:btn-dash">Phone</button>
            <button className="btn bg-blue-200 font-bold text-black md:btn-dash">Laptop</button>
            <button className="btn bg-blue-200 font-bold text-black md:btn-dash">Watch</button>
            </div>
        </div>
    );
};

export default Category_btn;