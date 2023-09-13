import React from 'react';
import { IoLanguageOutline } from 'react-icons/io5';
export default function Language({ language }) {
  return (
    <>
      {language && (
        <>
          <IoLanguageOutline />
          <p>{language}</p>
        </>
      )}
    </>
  );
}
