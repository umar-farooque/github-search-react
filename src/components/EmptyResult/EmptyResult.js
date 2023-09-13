import React from 'react';

const DEFAULT = `Soory,the data you're looking for is not available`;
export default function EmptyResult({ msg = DEFAULT }) {
  return <p>{msg}</p>;
}
