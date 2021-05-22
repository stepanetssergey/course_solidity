pragma solidity ^8.0.0;

import './IUserStorage.sol';
import './IBudinessLogic.sol';
contract ProxyContract {

    constructor() {

    }

    address public user_storage;
    address public business_logic; 

    function setUserStorageAddress(address _user_storage_address) public {
        user_storage = _user_storage_address;
    }

    function setBusinessLogicAddress(address _business_logic_address) public {
        business_logic = _business_logic_address;
    }

    function setUser(address _user_address, bool _state, uint _deposite) public returns(uint){
        IUserStorage _user_storage = IUserStorage(user_storage);
        _user_storage.createChangeUser(_user_address, _state, _deposite);
        IBudinessLogic _business_logic = IBudinessLogic(business_logic);
        return _business_logic.getCreaditLimit(_deposite);

    } 

    // 1. задеплоить контракты
    // 2. Проветить по тестам правильно ли все работает
    // 3. Написать интерфейс по апдейту userStorage and BusinessLogic 

}