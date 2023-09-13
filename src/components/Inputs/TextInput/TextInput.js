import React from 'react';

export default function TextInput({
  ref,
  placeholder,
  type = 'text',
  value,
  name,
  onChange,
  ...rest
}) {
  return (
    <>
      <input
        ref={ref}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='border border-gray-200  focus:border-gray-400 outline-none rounded-lg px-3 py-2 md:w-2/6'
        {...rest}
      />
    </>
  );
}
