import React from 'react';

const DEFAULT = `Error...,Something is wrong.Pls try Again Later`;
export default function Error({ msg = DEFAULT }) {
  return <p>{msg}</p>;
}
