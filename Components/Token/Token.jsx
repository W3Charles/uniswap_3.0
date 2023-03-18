import React, { useState, useEffect } from 'react';
import Image from 'next/image';

//INTERNAL IMPORTS
import Style from './Token.module.css';
import images from '../../assets';
import { Toggle } from '../index';
import { ST } from 'next/dist/shared/lib/utils';

const Token = ({ setOpenSetting }) => {
  return (
    <div className={Style.Token}>
        <div className={Style.Token_box}>
            <div className={Style.Token_box_heading}>
                <h4>Setting</h4>
                <Image 
                    src={images.close}
                    alt="close"
                    width={50}
                    height={50}
                    onClick={() => setOpenSetting(false)}
                />
            </div>
        </div>
    </div>
  )
}

export default Token