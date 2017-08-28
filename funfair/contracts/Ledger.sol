pragma solidity >=0.4.4;

import "./Common.sol";

contract Ledger is Owned, SafeMath, Finalizable {
    address public controller;
    mapping(address => uint) public balanceOf;
    mapping (address => mapping (address => uint)) public allowance;
    uint public totalSupply;

    function setController(address _controller) onlyOwner notFinalized {
        controller = _controller;
    }

    modifier onlyController() {
        if (msg.sender != controller) throw;
        _;
    }

    function transfer(address _from, address _to, uint _value)
    onlyController
    returns (bool success) {
        if (balanceOf[_from] < _value) return false;

        balanceOf[_from] = safeSub(balanceOf[_from], _value);
        balanceOf[_to] = safeAdd(balanceOf[_to], _value);
        return true;
    }

    function transferFrom(address _spender, address _from, address _to, uint _value)
    onlyController
    returns (bool success) {
        if (balanceOf[_from] < _value) return false;

        var allowed = allowance[_from][_spender];
        if (allowed < _value) return false;

        balanceOf[_to] = safeAdd(balanceOf[_to], _value);
        balanceOf[_from] = safeSub(balanceOf[_from], _value);
        allowance[_from][_spender] = safeSub(allowed, _value);
        return true;
    }

    function approve(address _owner, address _spender, uint _value)
    onlyController
    returns (bool success) {
        //require user to set to zero before resetting to nonzero
        if ((_value != 0) && (allowance[_owner][_spender] != 0)) {
            return false;
        }

        allowance[_owner][_spender] = _value;
        return true;
    }

    function increaseApproval (address _owner, address _spender, uint _addedValue)
    onlyController
    returns (bool success) {
        uint oldValue = allowance[_owner][_spender];
        allowance[_owner][_spender] = safeAdd(oldValue, _addedValue);
        return true;
    }

    function decreaseApproval (address _owner, address _spender, uint _subtractedValue)
    onlyController
    returns (bool success) {
        uint oldValue = allowance[_owner][_spender];
        if (_subtractedValue > oldValue) {
            allowance[_owner][_spender] = 0;
        } else {
            allowance[_owner][_spender] = safeSub(oldValue, _subtractedValue);
        }
        return true;
    }

    event LogMint(address indexed owner, uint amount);
    event LogMintingStopped();

    function mint(address _a, uint _amount) onlyOwner mintingActive {
        balanceOf[_a] += _amount;
        totalSupply += _amount;
        LogMint(_a, _amount);
    }

    function multiMint(uint[] bits) onlyOwner mintingActive {
        for (uint i=0; i<bits.length; i++) {
        address a = address(bits[i]>>96);
        uint amount = bits[i]&((1<<96) - 1);
        mint(a, amount);
        }
    }

    bool public mintingStopped;

    function stopMinting() onlyOwner {
        mintingStopped = true;
        LogMintingStopped();
    }

    modifier mintingActive() {
        if (mintingStopped) throw;
        _;
    }

    function burn(address _owner, uint _amount) onlyController {
        balanceOf[_owner] = safeSub(balanceOf[_owner], _amount);
        totalSupply = safeSub(totalSupply, _amount);
    }
}
