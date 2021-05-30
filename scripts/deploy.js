const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log(
    "Deploying contracts with the account:",
    deployer.address
  );

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, World!");

  const FCTToken = await hre.ethers.getContractFactory("FCTToken");
  const fctToken = await FCTToken.deploy("FCTToken", "TKN");

  await greeter.deployed();
  await fctToken.deployed();

  console.log("Greeter deployed to:", greeter.address);
  console.log("Token deployed to:", fctToken.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
