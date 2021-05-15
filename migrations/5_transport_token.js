const TransportToken = artifacts.require("TransportToken");

module.exports = function (deployer) {
  deployer.deploy(TransportToken, "Transport Token", "TTK", 18, 1000);
};
