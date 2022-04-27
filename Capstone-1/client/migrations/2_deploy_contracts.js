var Token = artifacts.require("tokens");

module.exports = function(deployer) {
  deployer.deploy(Token);
};
