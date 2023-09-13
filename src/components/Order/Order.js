import React from 'react';
import { BsArrowDownSquareFill, BsFillArrowUpSquareFill } from 'react-icons/bs';
export default function Order({ order, handleOrder }) {
  return (
    <div
      className='flex gap-1 items-center p-1 border border-gray-200 rounded-lg'
      onClick={handleOrder}
    >
      {order === 'desc' ? (
        <BsArrowDownSquareFill />
      ) : (
        <BsFillArrowUpSquareFill />
      )}
      <p>{order}</p>
    </div>
  );
}
