import React from 'react';

export default function Select({ name, value, onChange, children, ...rest }) {
  return (
    <select name={name} onChange={onChange} value={value} {...rest}>
      {children}
    </select>
  );
}
