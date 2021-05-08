const VotingToken = artifacts.require("VoteToken");

module.exports = function (deployer) {
  deployer.deploy(VotingToken, "Voting Token", "VTK", 18, 1000);
};
