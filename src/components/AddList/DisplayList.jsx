import React, { useEffect, useState } from 'react';
import Show from '../show/Show';

const DisplayList = ({ data, showType, isSorted, storedIds, onRemove }) => {
  const [itemsToDisplay, setItemsToDisplay] = useState([]);

  useEffect(() => {
    let filteredItems = data.filter(item => storedIds.includes(item.product_id));

    if (isSorted) {
      filteredItems = [...filteredItems].sort((a, b) => a.price - b.price);
    }

    setItemsToDisplay(filteredItems);
  }, [data, storedIds, showType, isSorted]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      {itemsToDisplay.map(item => (
        <Show
          key={item.product_id}
          item={item}
          showType={showType}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default DisplayList;
