const TransportContract = artifacts.require("TransportCity");

module.exports = function (deployer, accounts) {
    console.log(accounts);
    deployer.deploy(TransportContract);
};
