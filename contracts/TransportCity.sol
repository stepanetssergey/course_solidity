// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "./interfaces/IVoting.sol";

contract TransportCity {
    constructor() {

    }
    
    address public voting_contract_address;

    struct User {
        address customer;
        uint total_tokens;
        bool active;
    }

    mapping(address => User) public UserList;

    // [ (address => {customer, total_tokens, active}), 
    //   (address => {customer, total_tokens, active}) ]

    function setVotingContractAddress(address _address) public {
       voting_contract_address = _address;
    }

    function getPayment(uint _tokens) public {
        IVoting _voting_contract = IVoting(voting_contract_address);
        address _transport_token_address = _voting_contract.getTransportTokenAddress();
        if (_voting_contract.checkVoter(msg.sender)) {
            IERC20(_transport_token_address).transferFrom(msg.sender, address(this), _tokens);
            UserList[msg.sender].total_tokens += _tokens;
            
        }
    }
}