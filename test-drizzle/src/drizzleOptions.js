import SimpleContract from './artifacts/SimpleContract.json';


const options = {
    contracts:[SimpleContract],
    web3: {
        fallback: {
            type: "ws",
            url: "ws://127.0.0.1:8545"
        }
    }
}

export default options;