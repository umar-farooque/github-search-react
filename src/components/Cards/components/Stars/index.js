import React from 'react';
import { AiOutlineStar } from 'react-icons/ai';
export default function Stars({ stars }) {
  return (
    <>
      {stars && (
        <>
          <AiOutlineStar />
          <p>{stars}</p>
        </>
      )}
    </>
  );
}
