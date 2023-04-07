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
    //USESTATE
    const [account, setAccount] = useState('');
    const [ether, setEther] = useState('');
    const [networkConnect, setNetworkConnect] = useState('');
    const [weth9, setWeth9] = useState('');
    const [dai, setDai] = useState('');
    
    const [tokenData, setTokenData] = useState([]);

    const addToken = [ 
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        "0x9e7F7d0E8b8F38e3CF2b3F7dd362ba2e9E82baa4",
        "0x0724F18B2aA7D6413D3fDcF6c0c27458a8170Dd9",
    ];

    // FETCH DATA - DISPLAY USER WALLET BALANCE, ETC.
    const fetchingData = async () => {
        try {
            //GET USER ACCOUNT
            const userAccount = await checkIfWalletConnected();
            setAccount(userAccount);

            //CREATE PROVIDER
            const web3modal = new Web3Modal();
            const connection = await web3modal.connect();
            const provider = new ethers.providers.Web3Provider(connection);
           
            //CHECK BALANCE
            const balance = await provider.getBalance(userAccount);
            const convertBal = BigNumber.from(balance).toString();
            const ethValue = ethers.utils.formatEther(convertBal);
            setEther(ethValue);
           
            // ALL TOKEN DATA & BALANCES
            addToken.map((el, i) => {
                // GET CONTRACT
                const contract = new ethers.Contract(el, ERC20.abi, provider);
                console.log(contract);
            })

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchingData();
    }, []);

    const swap = "welcome to swap my token"

    return (
        <SwapTokenContext.Provider value={{swap}}>
            {children}
        </SwapTokenContext.Provider>
    );
};
