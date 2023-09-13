import React from 'react';

export default function Heading({ children, ...rest }) {
  return (
    <h1 className='line-clamp-1 text-lg font-bold text-violet-600' {...rest}>
      {children}
    </h1>
  );
}
