const asset = require('assert');
const ganache = require('ganache');
const Web3 = require('web3'); // W is capital in Web3 coz it's a constructor function 
const web3 = new Web3(ganache.provider());// w is small in web3 coz it's an instance of 'Web3' .