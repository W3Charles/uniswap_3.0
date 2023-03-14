import React, { useState, useEffect } from 'react';
import Image from 'next/image';

//INTERNAL IMPORTS
import Style from './HeroSection.module.css';
import images from '../../assets';
import { Token, SearchToken } from '../index';

const HeroSection = ({ accounts, tokenData }) => {
  //USESTATE
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokensTwo, setOpenTokensTwo] = useState(false);

  //TOKEN 1
  const [tokenOne, setTokeOne] = useState({
    name: "",
    image: "",
  });

  //TOKEN 2
  const [tokenTwo, setTokeTwo] = useState({
    name: "",
    image: "",
  });

  
  return (
    <div>HeroSection</div>
  )
}

export default HeroSection