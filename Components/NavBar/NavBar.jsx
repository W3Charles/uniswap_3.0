import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//INTERNAL IMPORTS
import Style from './NavBar.module.css';
import images from '../../assets';
import { Modal, TOkenList } from '../index';

const NavBar = () => {
  const menuItems = [
    {
      name: "Swap",
      link: "/",
    },
    {
      name: "Tokens",
      link: "/",
    },
    {
      name: "Pools",
      link: "/",
    },
  ];
  
  //USESTATE
  const [openModal, setOpenModal] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false)
  
  return (
    <div>NavBar</div>
  )
}

export default NavBar