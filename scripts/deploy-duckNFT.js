const hre = require("hardhat");

async function main() {
  const duckNFT = await hre.ethers.getContractFactory("duckNFT");
  const is_duckNFT = await duckNFT.deploy();

  await is_duckNFT.deployed();

  console.log("duckNFT deployed to:", is_duckNFT.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
