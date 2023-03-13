import React from 'react';
import Image from 'next/image';

//INTERNAL IMPORTS
import Style from './TokenList.module.css';
import images from '../../assets';

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  const data = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={Style.TokenList}>
      <p 
        className={Style.TokenList_close}
        onClick={() => setOpenTokenBox(false)}
      >
        <Image src={images.close} alt="close" width={50} height={50} /> 
      </p>
    </div>
  )
}

export default TokenList