import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { removeFromLocalstorage } from '../../utility/remove';

const Show = ({ item, showType, onRemove }) => {
  const { product_image, product_title, description, price, product_id } = item;

  const handleRemoveClick = () => {
    const key = showType === "cart" ? "added cart" : "Added wish";
    removeFromLocalstorage(key, product_id);
    if (onRemove) {
      onRemove(product_id);
    }
  };

  return (
    <div className="flex bg-white shadow-md rounded-lg overflow-hidden mb-6 hover:shadow-lg transition-shadow duration-300 my-8">
      <div className="border-r border-gray-100 flex items-center justify-center p-4 bg-gray-50">
        <img className="h-40 w-60 object-cover rounded-md" src={product_image} alt={product_title} />
      </div>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="pr-4">
            <h1 className="text-2xl font-bold text-[#9538E2] mb-2">{product_title}</h1>
            <p className="text-gray-600 mb-4">{description}</p>
          </div>
          <button onClick={handleRemoveClick} className="text-gray-400 hover:text-red-500 text-xl">
            <RxCross2 />
          </button>
        </div>
        <h2 className="text-lg font-semibold text-green-600">Price: ${price}</h2>
      </div>
    </div>
  );
};

export default Show;
