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
        // IWETH TOKEN
        "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
        // BOO TOKEN
        "0x6D712CB50297b97b79dE784d10F487C00d7f8c2C",
        // LIFE TOKEN
        "0x04F339eC4D75Cf2833069e6e61b60eF56461CD7C",
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
            addToken.map(async (el, i) => {

                // GET CONTRACT
                const contract = new ethers.Contract(el, ERC20.abi, provider);

                // GET TOKEN BALANCE
                const userBalance = await contract.balanceOf(userAccount);
                const tokenLeft = BigNumber.from(userBalance).toString();
                const convertTokenBal = ethers.utils.formatEther(tokenLeft);

                // GET NAME & SYMBOL
                const symbol = await contract.symbol();
                const name= await contract.name();

                tokenData.push({
                    name: name,
                    symbol: symbol,
                    tokenBalance: convertTokenBal,
                    tokenAddress: el,
                });

                console.log(tokenData);
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
