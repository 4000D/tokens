pragma solidity >=0.4.4;

import "./Common.sol";
import "./Ledger.sol";

contract Controller is Owned, Finalizable {
    Ledger public ledger;
    address public token;

    function setToken(address _token) onlyOwner {
        token = _token;
    }

    function setLedger(address _ledger) onlyOwner {
        ledger = Ledger(_ledger);
    }

    modifier onlyToken() {
        if (msg.sender != token) throw;
        _;
    }

    function totalSupply() constant returns (uint) {
        return ledger.totalSupply();
    }

    function balanceOf(address _a) onlyToken constant returns (uint) {
        return Ledger(ledger).balanceOf(_a);
    }

    function allowance(address _owner, address _spender)
    onlyToken constant returns (uint) {
        return ledger.allowance(_owner, _spender);
    }

    function transfer(address _from, address _to, uint _value)
    onlyToken
    returns (bool success) {
        return ledger.transfer(_from, _to, _value);
    }

    function transferFrom(address _spender, address _from, address _to, uint _value)
    onlyToken
    returns (bool success) {
        return ledger.transferFrom(_spender, _from, _to, _value);
    }

    function approve(address _owner, address _spender, uint _value)
    onlyToken
    returns (bool success) {
        return ledger.approve(_owner, _spender, _value);
    }

    function increaseApproval (address _owner, address _spender, uint _addedValue)
    onlyToken
    returns (bool success) {
        return ledger.increaseApproval(_owner, _spender, _addedValue);
    }

    function decreaseApproval (address _owner, address _spender, uint _subtractedValue)
    onlyToken
    returns (bool success) {
        return ledger.decreaseApproval(_owner, _spender, _subtractedValue);
    }


    function burn(address _owner, uint _amount) onlyToken {
        ledger.burn(_owner, _amount);
    }
}
