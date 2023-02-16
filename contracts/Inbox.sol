pragma solidity >=0.4.22 <0.9.0;

contract Inbox{
    string public message;
    constructor (string memory initialMessage) {
     message=initialMessage;
    }
    function setMessage(string memory initialMessage) public{
        message=initialMessage;
    }
}
