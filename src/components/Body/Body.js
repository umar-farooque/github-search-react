import React from 'react';

export default function Body({ children, ...rest }) {
  return (
    <p className='line-clamp-2' {...rest}>
      {children}
    </p>
  );
}
