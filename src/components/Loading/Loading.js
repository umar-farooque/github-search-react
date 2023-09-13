import React from 'react';

const DEFAULT = `Loading....`;
export default function Loading({ msg = DEFAULT }) {
  return <p>{msg}</p>;
}
