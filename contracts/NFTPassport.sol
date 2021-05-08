// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFTVotingToken is ERC721 {
        
        string private _name;
        string private _symbol;
        uint private _token_id;
        
        constructor(string memory token_name, 
                    string memory token_symbol
                    ) public ERC721(token_name, token_symbol){
            _name = token_name;
            _symbol = token_symbol;
            _mint(msg.sender, _token_id);

        } 
}