pragma solidity >=0.4.4;

import "./Common.sol";
import "./Controller.sol";

contract Token is Finalizable, TokenReceivable, SafeMath, EventDefinitions {

    string public name = "FunFair";
    uint8 public decimals = 8;
    string public symbol = "FUN";

    Controller controller;
    address owner;

    function setController(address _c) onlyOwner notFinalized {
        controller = Controller(_c);
    }

    function balanceOf(address a) constant returns (uint) {
        return controller.balanceOf(a);
    }

    function totalSupply() constant returns (uint) {
        return controller.totalSupply();
    }

    function allowance(address _owner, address _spender) constant returns (uint) {
        return controller.allowance(_owner, _spender);
    }

    function transfer(address _to, uint _value)
    onlyPayloadSize(2)
    returns (bool success) {
       success = controller.transfer(msg.sender, _to, _value);
        if (success) {
            Transfer(msg.sender, _to, _value);
        }
    }

    function transferFrom(address _from, address _to, uint _value)
    onlyPayloadSize(3)
    returns (bool success) {
       success = controller.transferFrom(msg.sender, _from, _to, _value);
        if (success) {
            Transfer(_from, _to, _value);
        }
    }

    function approve(address _spender, uint _value)
    onlyPayloadSize(2)
    returns (bool success) {
        //promote safe user behavior
        if (controller.allowance(msg.sender, _spender) > 0) throw;

        success = controller.approve(msg.sender, _spender, _value);
        if (success) {
            Approval(msg.sender, _spender, _value);
        }
    }

    function increaseApproval (address _spender, uint _addedValue)
    onlyPayloadSize(2)
    returns (bool success) {
        success = controller.increaseApproval(msg.sender, _spender, _addedValue);
        if (success) {
            uint newval = controller.allowance(msg.sender, _spender);
            Approval(msg.sender, _spender, newval);
        }
    }

    function decreaseApproval (address _spender, uint _subtractedValue)
    onlyPayloadSize(2)
    returns (bool success) {
        success = controller.decreaseApproval(msg.sender, _spender, _subtractedValue);
        if (success) {
            uint newval = controller.allowance(msg.sender, _spender);
            Approval(msg.sender, _spender, newval);
        }
    }

    modifier onlyPayloadSize(uint numwords) {
    assert(msg.data.length == numwords * 32 + 4);
        _;
    }

    function burn(uint _amount) {
        controller.burn(msg.sender, _amount);
        Transfer(msg.sender, 0x0, _amount);
    }
}
