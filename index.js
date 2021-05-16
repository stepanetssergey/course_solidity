const Web3 = require('web3');
const Voting = require('./build/contracts/Voting.json');
const TransportToken = require('./build/contracts/TransportToken.json');

const provider = new Web3.providers.HttpProvider('http://localhost:8545');
const web3 = new Web3(provider);

const init = async() => {
    const network_id = await web3.eth.net.getId();
    const blockNumber = await web3.eth.getBlockNumber();
    const voting = new web3.eth.Contract(Voting.abi, Voting.networks[network_id].address);

    // const transport_token = new web3.eth.
    //                         Contract(TransportToken.abi, TransportToken.networks[network_id].address);

    // const balance_0 = await transport_token.methods
    //                                   .balanceOf("0x8D67716DE05d313911A957077B91730D2C7e7c70").call();

    // await transport_token.methods.transfer("0xc7161c18D656b9513dd5AfB183cEF86ad0980A27",100)
    //                              .send({from: "0x8D67716DE05d313911A957077B91730D2C7e7c70"});

    // const balance_3 = await transport_token.methods
    //                         .balanceOf("0xc7161c18D656b9513dd5AfB183cEF86ad0980A27").call();

    // console.log('initial supply:',balance_0, 'trasfer tokens:', balance_3);

    // const balance_0_after = await transport_token.methods
    //                                   .balanceOf("0x8D67716DE05d313911A957077B91730D2C7e7c70").call();
    // const blockNumber1 = await web3.eth.getBlockNumber();
    // console.log(blockNumber1)
    // const event_example = await transport_token.events.allEvents({fromBlock: blockNumber1},(error,events) => {
    //     console.log(events);
    // });

    // event_example.on('data',function (event) {
    //     console.log(event);
    // })
    // console.log('Get events from transport token:',event_example);                              
    // console.log('After transfer tokens:',balance_0_after)

    // await voting.methods.setTransportTokenAddress("0x9c91431fAb01C1eAA39001db834C0aD562E5Fdf5")
    //       .send({from: "0x8D67716DE05d313911A957077B91730D2C7e7c70" })

    //await voting.methods.addPoliticalParty("First").send({from: "0x8D67716DE05d313911A957077B91730D2C7e7c70" })
    //await voting.methods.addCandidate("TEST2",1).send({from: "0x8D67716DE05d313911A957077B91730D2C7e7c70" })
    
    const candidat_amount = await voting.methods.candidate_id().call();
    console.log(candidat_amount);
    for (var i=0;i< candidat_amount;i++) {
        const candidat = await voting.methods.Candidates(i+1).call();
        console.log('Candidate name', candidat.candidateName)
    }
    
}


//const voting = new web3.eth.

init();