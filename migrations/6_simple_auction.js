const SimpleAuction = artifacts.require("SimpleAuction");

module.exports = function (deployer) {
  deployer.deploy(SimpleAuction, 60000, "0x8D67716DE05d313911A957077B91730D2C7e7c70");
};
