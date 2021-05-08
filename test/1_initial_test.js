const Voting = artifacts.require("Voting");
const VoteToken = artifacts.require("VoteToken");

contract("Voting", accounts => {
    console.log(accounts);
    it("Check tokens mint total supply", async () => {
        const token = await VoteToken.deployed();
        const balance = await token.balanceOf(accounts[0]);
        const name = await token.name();
        console.log('Tokens balance', balance.toNumber())
        assert.equal(balance.toNumber(), 1000, "Not correct total supply")
        assert.equal(name, "Voting Token", "Not corrent name")

    })
    it("Transfer tokens to other", async () => {
        const token = await VoteToken.deployed();
        await token.transfer(accounts[1], 100);
        const balance_account1 = await token.balanceOf(accounts[1])
        assert.equal(balance_account1, 100, "Not correct amount accounts 1");
    })
    it("Get value from contract", async () => {
       const voting = await Voting.deployed();
       const _value = await voting.value.call();
       console.log(_value.toNumber())
    }),
    it("Voting process", async () => {
        const voting = await Voting.deployed();
        await voting.addPoliticalParty("Solidity developers", {from: accounts[0]});
        const partyId = await voting.politicalParty_id.call();
        assert.equal(partyId.toNumber(), 1, "ID of party is not correct!!!")
    })

})


