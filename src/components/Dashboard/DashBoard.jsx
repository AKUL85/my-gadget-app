import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router';
import DisplayList from '../AddList/DisplayList';
import { getStoredList } from '../../utility/Utility';
import { getStoredWish } from '../../utility/Wish';
import image from '../../assets/Group.png';

const DashBoard = () => {
  const AllData = useLoaderData();
  const [showType, setShowType] = useState('cart');
  const [isSorted, setIsSorted] = useState(false);
  const [storedIds, setStoredIds] = useState(showType === 'cart' ? getStoredList() : getStoredWish());
  const [totalCost, setTotalCost] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setStoredIds(showType === 'cart' ? getStoredList() : getStoredWish());
  }, [showType]);

  useEffect(() => {
    let total = 0;
    AllData.forEach(item => {
      if (storedIds.includes(item.product_id)) {
        total += item.price;
      }
    });
    setTotalCost(total);
  }, [storedIds, AllData]);

  const handleSortToggle = () => {
    setIsSorted(prev => !prev);
  };

  const handleRemove = (id) => {
    setStoredIds(prev => prev.filter(itemId => itemId !== id));
  };

  const handlePurchase = () => {
    if (totalCost > 0) {
      const key = showType === 'cart' ? 'added cart' : 'Added wish';
      localStorage.removeItem(key);
      setStoredIds([]);
      setTotalCost(0);
      setIsModalOpen(true); // Only open modal if totalCost > 0
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            <h1 className='font-bold'>Total Cost: {totalCost} $</h1>
            <button
              className='bg-white text-[#9538E2] px-4 py-1 rounded-xl hover:bg-red-100'
              onClick={handleSortToggle}
            >
              Sort Price
            </button>
            <button
              onClick={handlePurchase}
              className='bg-[#9538E2] px-4 py-1 text-white rounded-xl'
            >
              Purchase
            </button>
          </div>
        </div>

        <DisplayList
          data={AllData}
          showType={showType}
          isSorted={isSorted}
          storedIds={storedIds}
          onRemove={handleRemove}
        />
      </div>

      {/* Modal - Only show if isModalOpen is true */}
      {isModalOpen && (
        <dialog id="my_modal_1" className="modal modal-open">
          <div className="modal-box">
            <div className='flex justify-center'>
              <div>
                <img className='mx-auto' src={image} alt="" />
                <h3 className="font-bold text-lg">
                  Payment Successful
                </h3>
                <p className="py-4">Thanks For Purchasing</p>
              </div>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
};

export default DashBoard;