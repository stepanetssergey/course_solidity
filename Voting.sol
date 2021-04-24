// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Voting {
    
    address owner;
    
    constructor() {
       owner = msg.sender;    
    }
    
    // Structure of Party
    uint public party_id;
    uint public voter_id;
    struct party {
        string name;
    }
    
    mapping(uint => party) public Party;
    
    struct candidat {
        string name;
        uint party_id;
        uint amount;
    }
    
    mapping(uint => candidat) public Candidats;
    
    mapping(address => uint) public Voters; //[(id, - address),(id, - address)] 
    
    function addParty(string memory _name) public {
        party_id += 1;
        Party[party_id].name = _name;
    }
    
    function addCandidat(string memory _name, uint _party_id) public {
        Candidats[_party_id].name = _name;
    }
    
    function voteProcess(uint _id_candidat) public {
        voter_id += 1;
        Voters[msg.sender] = voter_id;
    }
    
    /* Вибори мера версія 1.00

   1.  Партии структура (название, ID)
   2. Структура кандидатов (имя, партия (id), количество голосов) - мапинг структуры -> ID
       struct  candidat {
                          String name;
                          Uint partita;
                          Uint amount;
   }
   mapping(id -> candidat) Candidats;

   3. Мапинг (адресс -> id) [(address, id), (address, id)] voiting[address] = 0 !=0 уже проголосовал
   4. Функцию по добавлению партий
   5. Функцию по добавлению кандидатов в меры
   6. Функция по голосованию address = msg.sender; id кандидата voteCall(id) { 
           6.0 Проверить голосовал ли этот человек уже
           6.1 Добавить голос в структуру кандидатов в соответствии с ID кандидата 
           6.2 Добавить голосовавшего в мапинг address->id */
    
}
