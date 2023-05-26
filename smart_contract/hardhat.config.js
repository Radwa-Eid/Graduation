// https://eth-sepolia.g.alchemy.com/v2/_k3rUPOzC7UNncp2dzqBO5LYMt3smMQh
// privateKey:61e1f3100076ddc63cbd3eb7357fcb9ba561bdc8a92f763181a43bb83d9c19f9

require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url:'https://eth-sepolia.g.alchemy.com/v2/_k3rUPOzC7UNncp2dzqBO5LYMt3smMQh',
      accounts:['61e1f3100076ddc63cbd3eb7357fcb9ba561bdc8a92f763181a43bb83d9c19f9'],
    },
  },
};

