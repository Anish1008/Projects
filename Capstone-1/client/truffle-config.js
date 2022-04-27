const path = require("path");
require("dotenv").config();
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_directory:'./src/contracts',
  contracts_build_directory: './src/abis/',
  networks: {
    develop: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
    solc: {
      version: "^0.8.13", // A version or constraint - Ex. "^0.5.0"
      optimizer: {
        enabled: true, 
        runs: 200   // Optimize for how many times you intend to run the code
      }
    }
  }
};