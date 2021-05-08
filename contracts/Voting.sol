// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
contract Voting {

  /*list of PoliticalParties and candidates
  1. Європейська солідарність => Порошенко Пётр Алексеевич
  2.Справедливість => Николаенко Станислав Николаевич
  3.Трудова Україна => Сопельник Владимир Иванович
  VM
  storage
  memory
  stack
  */
  event TransferTokenGetMoney(address _sender);

  address owner;
  uint public value;
  address public token_address;

  constructor (uint _value) {
    owner = msg.sender;
    value = _value;
 }

  // Counters
  uint public politicalParty_id;
  uint public candidate_id;
  string public winner;

  // Mappinngs
  mapping (uint => politicalParty) public PoliticalParties;
  mapping (uint => candidate) public Candidates;
  mapping (address => voter) public Voters;

  // Structure of politicalParty

  struct politicalParty {
    string politicalPartyName;
  }

  // Structure of candidate
  struct candidate {
    string candidateName;
    uint politicalParty_id;
    uint amount;
  }

  // Structure of Voters
  struct voter {
      uint electedid;
      bool vote;
  }

  modifier onlyOwner {require(msg.sender == owner);_;}

  function setTokenAddress (address _token_address) onlyOwner public {
    token_address = _token_address;
  }

  function addPoliticalParty (string memory _politicalPartyName) onlyOwner public {
    politicalParty_id += 1;
    PoliticalParties[politicalParty_id].politicalPartyName = _politicalPartyName;
  }

  function addCandidate (string memory _candidateName, uint _politicalParty_id) onlyOwner public {
    candidate_id++;
    Candidates[candidate_id].candidateName=_candidateName;
    Candidates[candidate_id].politicalParty_id= _politicalParty_id;
  }

  function registrationVoter() public payable {
    require(msg.value == 0.1 ether,"not correct ehters value");
    IERC20 _token = IERC20(token_address);
    _token.transfer(msg.sender, 10);
  }

  function VotingProcess(uint _candidat_id) public {
    IERC20 _token = IERC20(token_address);
    _token.transferFrom(msg.sender, address(this), 10);
    Candidates[_candidat_id].amount += 1;
    emit TransferTokenGetMoney(msg.sender);
  }


  // function createNFTVotingToken(string memory _id_code) public {

  // }

  /*
  1. Випустити транспортні токени (Transport tokens, TR-TRN)
     - in folder migration
     - total supply, transfer
  2. При голосуванні перечиляти по 10 токенів на рахунок виборця. 
     - при голосуванні що куди іде (перечислення токенів)
  3. Написати смарт контракт транспортної компанії
     - отримання токенів від громадян і т.д.
  4. В цьому контракті повинна бути функція зарахування токенів за проїзд 
  5. При зарахуванні в контракті база сумує всі токени які перечислив виборець

  */

}
