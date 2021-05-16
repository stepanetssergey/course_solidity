// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
interface IVoting {
    
    function getTransportTokenAddress() external view returns (address);
    
    function checkVoter(address _address) external view returns(bool);
}