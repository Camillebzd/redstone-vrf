import { WrapperBuilder } from "@redstone-finance/evm-connector";
import { ethers } from "hardhat";

describe("ExamplePseudoRandom", function () {
  let contract: any;

  beforeEach(async () => {
    // Deploy contract
    const ExamplePseudoRandom = await ethers.getContractFactory("ExamplePseudoRandom");
    contract = await ExamplePseudoRandom.deploy();
  });

  it("Build random NFT indexes", async function () {
    // Wrapping the contract
    const wrappedContract = WrapperBuilder.wrap(contract).usingDataService({
      dataFeeds: ["ENTROPY"],
    });

    // Interact with the contract (getting oracle value securely)
    const generateManyRandomNumbersTx = await wrappedContract.generateManyRandomNumbers(10, 10);
    await generateManyRandomNumbersTx.wait();
    const generatedNFTIndexes = await wrappedContract.getGeneratedNFTIndexes();
    console.log({ generatedNFTIndexes });
  });
});
