const Voting = artifacts.require("Voting");

module.exports = function (deployer, accounts) {
    console.log(accounts);
  deployer.deploy(Voting, 5);
};
