require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: "b750f28ebe1fcc76926fc182caa5c9ff860fbf21a57f74163ba099bfb497542a",
          balance: "100000000000000000000"
        }
      ],
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/iKYVcrBEaqX1UqmoVSdYvbw2cWT_5VCp",
      },
    },
  },
};
