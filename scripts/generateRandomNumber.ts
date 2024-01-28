import { ethers } from "hardhat";
import { WrapperBuilder } from "@redstone-finance/evm-connector";

const address = "0x0B147f650010d72c82A9bA28b61191A5863E4CdA";

async function main() {
  const [ owner ] = await ethers.getSigners();
  const examplePseudoRandom = await ethers.getContractAt("ExamplePseudoRandom", address, owner);
  const wrappedContract = WrapperBuilder.wrap(examplePseudoRandom).usingDataService({
    dataFeeds: ["ENTROPY"],
  });
  const maxValue = 100;

  console.log(`Contract address: ${examplePseudoRandom.address}`);
  const number = await wrappedContract.generateRandomNumber(maxValue);
  console.log(`Random number: ${number}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
