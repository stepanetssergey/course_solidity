const Voting = artifacts.require("Voting");
const VoteToken = artifacts.require("VoteToken");
const TransportToken = artifacts.require("TransportToken");
const TransportCity = artifacts.require("TransportCity");

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
    it("Voting add political party", async () => {
        const voting = await Voting.deployed();
        await voting.addPoliticalParty("Solidity developers", {from: accounts[0]});
        const partyId = await voting.politicalParty_id.call();
        assert.equal(partyId.toNumber(), 1, "ID of party is not correct!!!")
    })

    it("Add candidat", async() => {
        const voting = await Voting.deployed();
        await voting.addCandidate("Candidat1",1)
        const candidat = await voting.Candidates(1);
        assert.equal(candidat.candidateName, "Candidat1", "Not correct candidat")
    })

    it("Set vote token address", async () => {
        const voting = await Voting.deployed();
        const token = await VoteToken.deployed();
        await voting.setVoteTokenAddress(token.address);
        const token_address = await voting.vote_token_address.call();
        assert.equal(token_address,token.address,"Token address is not correct")
    })

    it("Set transport token address", async () => {
        const voting = await Voting.deployed();
        const transport_token_instance = await TransportToken.deployed();
        await voting.setTransportTokenAddress(transport_token_instance.address);
        const token_address = await voting.transport_token_address.call();
        assert.equal(token_address,transport_token_instance.address,"Token address is not correct")
    })

    it("Add tokens to Transport Smart Contract", async () => {
        const transport_token = await TransportToken.deployed();
        const voting_contract = await Voting.deployed();
        await transport_token.transfer(voting_contract.address, 100);
        const balance_transport_contract = await transport_token.balanceOf(voting_contract.address);
        assert.equal(balance_transport_contract, 100, "Not correct balance transport token!")
    })

    it("Check registration", async () => {
        const voting = await Voting.deployed();
        const token_reg = await VoteToken.deployed();
        await token_reg.transfer(voting.address, 100) // for smart contract
        await voting.registrationVoter({from: accounts[2], value: "100000000000000000"})
        const token_balance = await token_reg.balanceOf(accounts[2])
        const token_balance_contract = await token_reg.balanceOf(voting.address)
        const balance_ethers = await web3.eth.getBalance(voting.address)
        assert.equal(token_balance.toNumber(),10,"Not correct token balance")
        assert.equal(balance_ethers, "100000000000000000", "Not crrect contract balance")
        assert.equal(token_balance_contract.toNumber(),90,"Not correct balance")
    })

    it("Token approve for smart contract", async () => {
        const token = await VoteToken.deployed();
        const voting = await Voting.deployed();
        await token.approve(voting.address, 10, {from: accounts[2]})
    })

    it("Voting process", async () => {
        const token = await VoteToken.deployed();
        const voting = await Voting.deployed();
        await voting.VotingProcess(1,{from:accounts[2]})
        const token_balance_smart = await token.balanceOf(voting.address)
        assert.equal(token_balance_smart.toNumber(),100,"Not correct balance after transfere")
        const token_balance_account = await token.balanceOf(accounts[2])
        assert.equal(token_balance_account.toNumber(),0,"Not correct balance after transfere")
    })

    it("Set voting contract address in transport contract", async() => {
        const voting = await Voting.deployed();
        const transport_contract = await TransportCity.deployed();
        await transport_contract.setVotingContractAddress(voting.address);
        const voting_contract_address = await transport_contract.voting_contract_address.call()
        assert.equal(voting_contract_address, voting.address, "Not correct voting address in transport contract")
    })

    it("Approve token transfer for transport tokens", async() => {
        const transport_contract = await TransportCity.deployed();
        const transport_token = await TransportToken.deployed();
        await transport_token.approve(transport_contract.address, 10, {from: accounts[2]})
    })

    it("Transfer tokens to transport contract", async() => {
        const transport_contract = await TransportCity.deployed();
        await transport_contract.getPayment(10, {from: accounts[2]});
        const transport_token = await TransportToken.deployed();
        const customer_balance = await transport_token.balanceOf(accounts[2]);
        assert.equal(customer_balance, 0, "Not correct customer balance")
    })

    it("Transfer transport tokens to test user-3", async() => {
        const transport_token = await TransportToken.deployed();
        await transport_token.transfer(accounts[3], 10);
        const check_transfer_to_accounts3 = await transport_token.balanceOf(accounts[3]);
        assert.equal(check_transfer_to_accounts3, 10, "Not correct transfer to account 3")
    })
    
    it("Transfer tokens to transport contract from accounts 3 (without voting)", async() => {
        const transport_contract = await TransportCity.deployed();
        await transport_contract.getPayment(10, {from: accounts[3]});
        const transport_token = await TransportToken.deployed();
        const customer_balance = await transport_token.balanceOf(accounts[3]);
        assert.equal(customer_balance, 10, "Not correct customer balance")
    })

})


