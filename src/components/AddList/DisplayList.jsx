import React from 'react';
import { getStoredList } from '../../utility/Utility';
import { getStoredWish } from '../../utility/Wish';
import Show from '../show/Show';

const DisplayList = ({ data, showType, isSorted }) => {
  const cartIds = getStoredList(); 
  const wishIds = getStoredWish();

  let itemsToDisplay =
    showType === 'cart'
      ? data.filter(item => cartIds.includes(item.product_id))
      : data.filter(item => wishIds.includes(item.product_id));

  if (isSorted) {
    itemsToDisplay = [...itemsToDisplay].sort((a, b) => a.price - b.price);
    
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {itemsToDisplay.map(item => (
        <Show key={item.product_id} item={item} showType={showType} />
      ))}
    </div>
  );
};

export default DisplayList;
