import React from 'react';

import { NavLink } from 'react-router';

const ShowData = ({ data }) => {
    const { product_title, product_image, price ,product_id} = data;
    return (
        <div>
            <div className="card bg-base-100 w-80 shadow-sm border-1 border-gray-100 mx-auto">
                <figure className="px-10 pt-10">
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="rounded-xl h-40 w-80" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{product_title}</h2>
                    <p className='font-bold'>price:{price}$</p>
                    <div className="card-actions">
                       
                        <NavLink to={`productDetails/${product_id}`}>
                            <button className="btn btn-primary rounded-2xl">View Details</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ShowData;