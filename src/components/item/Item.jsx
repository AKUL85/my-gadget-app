import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import Category_btn from '../category/Category_btn';

const Item = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('gadgetData.json')
            .then(res => res.json())
            .then(data => setShows(data));
    }, [])




    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-4'>Explore Cutting-Edge Gadgets</h1>
            
            <div className='md:flex gap-4'>
            <div>
                    <Category_btn ></Category_btn>
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-8 '>
                    {
                        shows.map(data => <ShowData key={data.product_id} data={data}></ShowData>)
                    }
                </div>
               
            </div>


        </div>

    );
};

export default Item;