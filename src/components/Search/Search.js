import React from 'react';
import options from '../../data/sort';
import { Select } from '../Inputs/Select';
import { TextInput } from '../Inputs/TextInput';
import { Order } from '../Order';

export default function Search({
  search,
  sort,
  order,
  handleSort,
  handleOrder,
  handleSearchText,
}) {
  return (
    <div className='flex gap-2'>
      <TextInput
        name='search'
        type='text'
        placeholder='Search....'
        onChange={handleSearchText}
        value={search}
      />
      <Select
        className='border p-2 rounded-lg border-gray-200 outline-none'
        name='sort'
        value={sort}
        onChange={handleSort}
      >
        {options.map((op) => (
          <option key={op.key} value={op.value}>
            {op.key}
          </option>
        ))}
      </Select>
      <Order order={order} handleOrder={handleOrder} />
    </div>
  );
}
