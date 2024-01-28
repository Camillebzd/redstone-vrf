import { ethers } from "hardhat";
import { WrapperBuilder } from "@redstone-finance/evm-connector";

const address = "0x0B147f650010d72c82A9bA28b61191A5863E4CdA";

async function main() {
  const [ owner ] = await ethers.getSigners();
  const examplePseudoRandom = await ethers.getContractAt("ExamplePseudoRandom", address, owner);
  const wrappedContract = WrapperBuilder.wrap(examplePseudoRandom).usingDataService({
    dataFeeds: ["ENTROPY"],
  });

  console.log(`Contract address: ${examplePseudoRandom.address}`);
  const generateManyRandomNumbersTx = await wrappedContract.generateManyRandomNumbers(10, 10);
  await generateManyRandomNumbersTx.wait();
  const generatedNFTIndexes = await wrappedContract.getGeneratedNFTIndexes();
  console.log({ generatedNFTIndexes });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
