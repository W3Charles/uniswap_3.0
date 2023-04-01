const hre = require("hardhat");

async function main() {
  //ERC20 BOO TOKEN
  const BooToken = await hre.ethers.getContractFactory("Lock");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`BOO deployed to${booToken.address}`);

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${booToken.address}`
  // );

  //ERC20 LIFE TOKEN
  const LifeToken = await hre.ethers.getContractFactory("Lock");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`Life deployed to${lifeToken.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
