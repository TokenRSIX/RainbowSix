const hre = require("hardhat");

async function main() {
  const RainbowSix = await hre.ethers.getContractFactory("RainbowSix");
  const rainbowSix = await RainbowSix.deploy(100000000, 50);

  await rainbowSix.deployed();

  console.log("Rainbow Six deployed: ", rainbowSix.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});