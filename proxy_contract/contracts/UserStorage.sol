pragma solidity ^8.0.0;


contract UserStorage {

    constructor() {
      owner = msg.sender;
    }

    address public proxy_contract;
    address owner;

    struct User {
        uint deposite;
        bool state;
    }

    mapping(address => User) public users;
    
    function setProxyContract(address _address) public {
        proxy_contract = _address;
    }

    function createChangeUser(address _user_address, bool _state, uint _deposite) public {
        users[_user_address].state = _state;
        users[_user_address].deposite = _deposite;
    }

    function getUserDeposit(address _user_address) public returns(uint) {
        return users[_user_address].deposite;
    }
}