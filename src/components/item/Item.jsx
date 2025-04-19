import React, { useEffect, useState } from 'react';
import ShowData from '../ShowData/ShowData';
import Category_btn from '../category/Category_btn';

const Item = () => {
    const [shows, setShows] = useState([]);
    const [allData, setAllData] = useState([]); 

    useEffect(() => {
        fetch('gadgetData.json')
            .then(res => res.json())
            .then(data => {
                setShows(data);
                setAllData(data); 
            });
    }, []);

    const handleButton = (cat) => {
        if (cat === 'product') {
            setShows(allData); 
        } else if (cat === 'phone') {
            setShows(allData.filter(i => i.category === "Smartphones"));
        } else if (cat === 'laptop') {
            setShows(allData.filter(i => i.category === "Laptops"));
        } else if (cat === 'watch') {
            setShows(allData.filter(i => i.category === "Smartwatches"));
        }
    };

    return (
        <div>
            <h1 className='text-2xl font-bold text-center my-4'>Explore Cutting-Edge Gadgets</h1>
            
            <div className='md:flex gap-4'>
                <div>
                    <Category_btn handleButton={handleButton} />
                </div>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-8 '>
                    {
                        shows.map(data => (
                            <ShowData key={data.product_id} data={data} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Item;
