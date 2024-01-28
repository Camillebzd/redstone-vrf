import { ethers } from "hardhat";

async function main() {
  const ExamplePseudoRandom = await ethers.getContractFactory("ExamplePseudoRandom", []);
  const examplePseudoRandom = await ExamplePseudoRandom.deploy();

  console.log(`Contract address: ${examplePseudoRandom.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
