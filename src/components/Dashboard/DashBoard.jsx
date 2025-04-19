import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import DisplayList from '../AddList/DisplayList';

const DashBoard = () => {
  const AllData = useLoaderData();
  const [showType, setShowType] = useState('cart'); 
  const [isSorted, setIsSorted] = useState(false); 

  const handleSortToggle = () => {
    if(isSorted===false){
      setIsSorted(!isSorted);
    }
    
  };

  return (
    <div>
      <div className='space-y-5 py-6 bg-[#9538E2]'>
        <h1 className='font-bold text-2xl text-center text-white'>Dashboard</h1>
        <div>
          <p className='text-center text-white'>Explore the latest gadgets that will take your experience to the next level.</p>
          <p className='text-center text-white'>From smart devices to the coolest accessories, we have it all!</p>
        </div>
        <div className='flex justify-center gap-6'>
          <button
            className={`btn ${showType === 'cart' ? 'btn-warning' : 'btn-outline'} text-white`}
            onClick={() => setShowType('cart')}
          >
            Cart
          </button>
          <button
            className={`btn ${showType === 'wish' ? 'btn-warning' : 'btn-outline'} text-white`}
            onClick={() => setShowType('wish')}
          >
            WishList
          </button>
        </div>
      </div>

      <div className='my-8'>
        <div className='flex justify-between'>
          <h1 className='font-bold'>{showType === 'cart' ? 'Cart' : 'WishList'}</h1>
          <div className='flex justify-evenly gap-2 items-center'>
            <h1 className='font-bold'>Total Cost:</h1>
            <button
              className='bg-white text-[#9538E2] px-4 py-1 rounded-xl hover:bg-red-100'
              onClick={handleSortToggle}
            >
              Sort Price
            </button>
            <button className='bg-[#9538E2] px-4 py-1 text-white rounded-xl'>Purchase</button>
          </div>
        </div>

        <DisplayList data={AllData} showType={showType} isSorted={isSorted} />
      </div>
    </div>
  );
};

export default DashBoard;
