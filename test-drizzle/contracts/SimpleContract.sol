pragma solidity ^0.8.0;


contract SimpleContract {

    constructor() {

    }

    string public message = 'hello I am from contract';
    uint public deposit;

    function sendMessage(string memory _message) public {
        message = _message;
    }

    function setDepositAmount(uint _deposite) public {
        deposit = _deposite;
    }

    function getDepositeAmount() public view returns(uint) {
        return deposit;
    }

    function getMessage() public view returns(string memory) {
        return message;
    }
}