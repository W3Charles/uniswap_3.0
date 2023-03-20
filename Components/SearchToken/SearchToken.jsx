import React from 'react';
import image from 'next/image';

//INTERNAL IMPORTS
import Style from './SearchToken.module.css';
import images from '../../assets';

const SearchToken = ({ openToken, tokens, tokenData }) => {
  //USESTATE
  const [active, setActive] = useState(1);

  //DEMO DATA
  const coin = [
    {
      img: images.ether,
      name: "ETH"
    },
    {
      img: images.ether,
      name: "DAI"
    },
    {
      img: images.ether,
      name: "DOG"
    },
    {
      img: images.ether,
      name: "FUN"
    },
    {
      img: images.ether,
      name: "WETH9"
    },
    {
      img: images.ether,
      name: "UNI"
    },
    {
      img: images.ether,
      name: "TIME"
    },
    {
      img: images.ether,
      name: "LOO"
    },
    {
      img: images.ether,
      name: "POO"
    },
  ]

  return (
    <div>SearchToken</div>
  )
}

export default SearchToken