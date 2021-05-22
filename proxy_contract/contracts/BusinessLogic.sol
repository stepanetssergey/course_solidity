pragma solidity ^8.0.0;


contract BusinessLogic {

    constructor () {

    }

    address public proxy_contract;
    address owner;
    
    function getCreaditLimit(uint _deposit) public returns(uint) {
        return _deposit*100;
    }

    function setProxyContract(address _address) public {
        proxy_contract = _address;
    }


}