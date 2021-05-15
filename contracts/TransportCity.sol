// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract TransportCity {
    constructor() {

    }


    struct User {
        address customer;
        uint total_tokens;
        bool active;
    }

    mapping(address => User) public UserList;

    // [ (address => {customer, total_tokens, active}), 
    //   (address => {customer, total_tokens, active}) ]

    function getPayment(uint _tokens) public {
       UserList[msg.sender].total_tokens += _tokens;
    }
}