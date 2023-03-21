import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

//INTERNAL IMPORTS
import Style from './NavBar.module.css';
import images from '../../assets';
import { Modal, TokenList } from '../index';

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
  const [openTokenBox, setOpenTokenBox] = useState(false);
  const [account, setAccount] = useState(false);
  
  return (
    <div className={Style.NavBar}>
      <div className={Style.NavBar_box}>
        <div className={Style.NavBar_box_left}>
          {/* LOGO IMAGE */}
          <div className={Style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>
          {/* MENU ITEMS */}
          <div className={Style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link
                key={i +1}
                href={{pathname: `${el.name}` }}
              >
                <p className={Style.NavBar_box_left_menu_item}>{el.name}</p>
              </Link>
            ))}
          </div>
        </div>
        {/* SEARCH BOX */}
        <div className={Style.NavBar_box_middle}>
          <div className={Style.NavBar_box_middle_search}>
            <div className={Style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>
        {/* RIGHT SECTION */}
        <div className={Style.NavBar_box_right}>
          <div className={Style.NavBar_box_right_box}>
            <div className={Style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>
          {
            account ? (
              <button onClick={() => setOpenModal(true)}>Connect</button>
            ) : (
              <button onClick={() => setOpenTokenBox(true)}>0xhdhere343ddxdi..</button>
            )
          }
          
          {openModal && (
            <Modal setOpenModal={setOpenModal} connectWallet="Connect" />
          )}
        </div>
      </div>

      {/* TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenDate="hey" setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  )
}

export default NavBar