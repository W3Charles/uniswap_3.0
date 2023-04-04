import { ethers } from "ethers";
import Web3Modal from "web3modal";

import {
    BooTokenAddress,
    BooTokenABI,
    LifeTokenAddress,
    LifeTokenABI,
    SingleSwapTokenAddress,
    SingleSwapTokenABI,
    SwapMultiHopAddress,
    SwapMultiHopABI,
    IWETHAddress,
    IWETHABI,
} from '../Context/constants';

// CHECK IF WALLET IS CONNECTED
export const checkIfWalletConnected = async () => {
    try {
        if (!window.ethereum) return console.log("install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error);
    }
};

// CONNECT WALLET
export const connectWallet = async () => {
    try {
        if (!window.ethereum) return console.log("install MetaMask");
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const firstAccount = accounts[0];
        return firstAccount;
    } catch (error) {
        console.log(error)
    }
};

// FETCHING CONTRACT------------------

// FETCH BOO TOKEN
export const fetchBooContract = (signerOrProvider) => 
    new ethers.Contract(BooTokenAddress, BooTokenABI, signerOrProvider);

// CONNECTING With BOO TOKEN CONTRACT
export const connectingWithBooToken = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchBooContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

// FETCHING CONTRACT------------------

// FETCH LIFE TOKEN
export const fetchLifeContract = (signerOrProvider) => 
    new ethers.Contract(LifeTokenAddress, LifeTokenABI, signerOrProvider);

// CONNECTING With LIFE TOKEN CONTRACT
export const connectingWithLifeToken = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchLifeContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

// FETCHING CONTRACT------------------

// FETCH SingleSwapToken
export const fetchSingleSwapContract = (signerOrProvider) => 
    new ethers.Contract(SingleSwapTokenAddress, SingleSwapTokenABI, signerOrProvider);

// CONNECTING With SingleSwapToken CONTRACT
export const connectingWithSingleSwapToken = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchSingleSwapContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

// FETCHING CONTRACT------------------

// FETCH IWETH TOKEN
export const fetchIWETHContract = (signerOrProvider) => 
    new ethers.Contract (IWETHAddress, IWETHABI, signerOrProvider);

// CONNECTING With IWETH CONTRACT
export const connectingWithIWETHToken = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchIWETHContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};

// FETCHING CONTRACT------------------

// FETCH DAI TOKEN
const DAIAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
export const fetchDAIContract = (signerOrProvider) => 
    new ethers.Contract (DAIAddress, IWETHABI, signerOrProvider);

// CONNECTING With DAI CONTRACT
export const connectingWithDAIToken = async () => {
    try {
        const web3modal = new Web3Modal();
        const connection = await web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchDAIContract(signer);
        return contract;
    } catch (error) {
        console.log(error);
    }
};