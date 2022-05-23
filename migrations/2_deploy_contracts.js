var MintContract = artifacts.require("./Mint.sol");
module.exports = function (deployer) {
  deployer.deploy(MintContract);
};
