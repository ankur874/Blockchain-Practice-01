const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath=path.resolve(__dirname,'contracts','Inbox.sol');
const source=fs.readFileSync(inboxPath,'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Inbox.sol' : {
            content: source
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            },
        },
    },
};

// abi --> contracts['Inbox.sol'].Inbox.abi
// bytecode --> contracts['Inbox.sol'].Inbox.evm.bytecode.object
// console.log(JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox.evm.bytecode.object);
module.exports= JSON.parse(solc.compile(JSON.stringify(input))).contracts['Inbox.sol'].Inbox;

