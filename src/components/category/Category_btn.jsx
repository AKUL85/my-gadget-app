import React from 'react';

const Category_btn = ({handleButton}) => {
    return (
        <div className='mt-8'>
            <div className='flex flex-col gap-4 md:border md:border-gray-100 md:p-2 md:rounded-2xl'>
            <button onClick={()=>handleButton('product')} className="btn bg-blue-200 font-bold text-black md:btn-dash">Products</button>
            <button onClick={()=>handleButton('phone')} className="btn bg-blue-200 font-bold text-black md:btn-dash">Phone</button>
            <button onClick={()=>handleButton('laptop')} className="btn bg-blue-200 font-bold text-black md:btn-dash">Laptop</button>
            <button onClick={()=>handleButton('watch')} className="btn bg-blue-200 font-bold text-black md:btn-dash">Watch</button>
            </div>
        </div>
    );
};

export default Category_btn;