// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TransportToken is ERC20 {
        
        string private _name;
        string private _symbol;
        uint private _decimals;
        uint private _totalSupply;
        constructor(string memory token_name, 
                    string memory token_symbol, 
                    uint decimal, 
                    uint initial_totalSupply) public ERC20(token_name, token_symbol){
            _name = token_name;
            _symbol = token_symbol;
            _decimals = decimal;
            _totalSupply = initial_totalSupply;
            _mint(msg.sender, initial_totalSupply);

        } 
}