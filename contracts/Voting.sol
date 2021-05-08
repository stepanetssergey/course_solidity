// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.5.0 <0.9.0;

contract Voting {

  /*list of PoliticalParties and candidates
  1. Європейська солідарність => Порошенко Пётр Алексеевич
  2.Справедливість => Николаенко Станислав Николаевич
  3.Трудова Україна => Сопельник Владимир Иванович
  */

  address owner;
  uint public value;

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



  function addPoliticalParty (string memory _politicalPartyName) onlyOwner public {
    politicalParty_id += 1;
    PoliticalParties[politicalParty_id].politicalPartyName = _politicalPartyName;
  }

  function addCandidate (string memory _candidateName, uint _politicalParty_id) onlyOwner public {
    candidate_id++;
    Candidates[candidate_id].candidateName=_candidateName;
    Candidates[candidate_id].politicalParty_id= _politicalParty_id;
  }
  // 1. добавить кандидата
  // 2. Проверить имя id партии

  //  function VotingProcess (uint _candidate_id) public {
  //   require (_candidate_id <= candidate_id,"There are no candidates with this id");
  //   require (Voters[msg.sender].vote != true,"You have already voted!");
  //   Voters[msg.sender].electedid = _candidate_id;
  //   Voters[msg.sender].vote = true;
  //   Candidates[_candidate_id].amount++;
  //   }

//   function WhoIsTheWinner () public {
//         int max;

//             for (int8 i; i < candidate_id;i++) {
//                 if (Candidates[i].amount > max) {
//                     max = Candidates[i].amount;
//                     winner = Candidates[i].candidateName;
//                 }
//             }
//     }

}
