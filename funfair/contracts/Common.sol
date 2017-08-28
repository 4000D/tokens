pragma solidity >=0.4.4;

//from Zeppelin
contract SafeMath {
    function safeMul(uint a, uint b) internal returns (uint) {
        uint c = a * b;
        assert(a == 0 || c / a == b);
        return c;
    }

    function safeSub(uint a, uint b) internal returns (uint) {
        assert(b <= a);
        return a - b;
    }

    function safeAdd(uint a, uint b) internal returns (uint) {
        uint c = a + b;
        assert(c>=a && c>=b);
        return c;
    }

    function assert(bool assertion) internal {
        if (!assertion) throw;
    }
}

contract Owned {
    address public owner;

    function Owned() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        if (msg.sender != owner) throw;
        _;
    }

    address newOwner;

    function changeOwner(address _newOwner) onlyOwner {
        newOwner = _newOwner;
    }

    function acceptOwnership() {
        if (msg.sender == newOwner) {
            owner = newOwner;
        }
    }
}

contract Finalizable is Owned {
    bool public finalized;

    function finalize() onlyOwner {
        finalized = true;
    }

    modifier notFinalized() {
        if (finalized) throw;
        _;
    }
}

contract IToken {
    function transfer(address _to, uint _value) returns (bool);
    function balanceOf(address owner) returns(uint);
}

contract TokenReceivable is Owned {
    event logTokenTransfer(address token, address to, uint amount);

    function claimTokens(address _token, address _to) onlyOwner returns (bool) {
        IToken token = IToken(_token);
        uint balance = token.balanceOf(this);
        if (token.transfer(_to, balance)) {
            logTokenTransfer(_token, _to, balance);
            return true;
        }
        return false;
    }
}

contract EventDefinitions {
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval(address indexed owner, address indexed spender, uint value);
}
