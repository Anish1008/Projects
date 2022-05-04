// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract tokens{
    string public owner = "Rich Token";
    string public symbol = "RICH";
    uint256 public decimals = 18;
    uint256 public totalSupply=1000000*(10**decimals);
    mapping(address => uint256) public balances;
    mapping(address => mapping(address => uint256)) public allowances;
    constructor(){
        balances[msg.sender] = totalSupply;
    }

    //Events
    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    function transfer(address to, uint256 value) public returns(bool success){
        require(balances[msg.sender] >= value);
        _transfer(msg.sender, to, value);
        return true;
    }

    function _transfer(address from, address to, uint value) internal {
        require(to!=address(0));
        balances[from] -=value;
        balances[to] += value;
        emit Transfer(from,to,value);
    }
    //Approve Tokens
    function approve(address spender, uint value) public returns(bool success) {
        require(spender!=address(0));
        allowances[msg.sender][spender] = value;
        emit Approval(msg.sender,spender,value);
        return true;
    }

    //Transfer From
    function transferFrom(address from, address to, uint value) public returns(bool success){
        require(value<=balances[from]);
        require(value<=allowances[from][msg.sender]);
        allowances[from][msg.sender] -= value;
        _transfer(from,to,value);
        return true;
    }

}

