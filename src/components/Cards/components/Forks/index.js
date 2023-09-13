import React from 'react';
import { FaCodeFork } from 'react-icons/fa6';
export default function Forks({ forks }) {
  return (
    <>
      {forks && (
        <>
          <FaCodeFork />
          <p>{forks}</p>
        </>
      )}
    </>
  );
}
