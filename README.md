# Redstone vrf test

This repo is a simple redstone test.

The hardhat config file is ready for multiple chains but you can remove some parts if you don't want to use them.

## Install

First, run:

```
npm install
```

## Tests

Then, you can use the hardhat commands to compile, test and deploy the random system:
```
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network <your_network>
```

## Transactions

I added 2 scripts to test the contract deployed:
```
npx hh run scripts/generateRandomNumber.ts --network <your_network>
npx hh run scripts/generateManyRandomNumbers.ts --network <your_network>
```

**Important:** You need to specify in each script the address of the contract on the network you're actually testing.

## Random generator addresses

Etherlink: 0x0B147f650010d72c82A9bA28b61191A5863E4CdA