import React, { useState, useEffect } from "react";
import { ethers, BigNumber } from "ethers";
import Web3Modal from "web3modal";

// INTERNAL IMPORTS
import {
    checkIfWalletConnected,
    connectWallet,
    connectingWithBooToken,
    connectingWithLIfeToken,
    connectingWithSingleSwapToken,
    connectingWithIWETHToken,
    connectingWithDAIToken,
} from '../Utils/appFeatures';

import { IWETHABI } from './constants';
import ERC20 from './ERC20.json';

export const SwapTokenContext = React.createContext();

export const SwapTokenContextProvider = ({ children }) => {
    return (
        <SwapTokenContext.Provider value={{swap}}>{children}</SwapTokenContext.Provider>
    );
};
