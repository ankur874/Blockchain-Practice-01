const assert = require('assert');
const ganache = require('ganache');
const Web3 = require('web3'); // W is capital in Web3 coz it's a constructor function 
const provider = ganache.provider();
const web3 = new Web3(provider);// w is small in web3 coz it's an instance of 'Web3' .
const {abi,evm} = require('../compile');

let bytecode = evm.bytecode.object;
let accounts,inbox;
const INITAL_MSG='Hi there!';

beforeEach(async()=>{
    accounts =await web3.eth.getAccounts();//fetch all accounts
    inbox = await new web3.eth.Contract(abi)
       .deploy({data:bytecode,arguments:[INITAL_MSG]})
       .send({from:accounts[0],gas:'1000000'});
    inbox.setProvider(provider);
});
describe("Inbox",()=>{
    it('Is contract deployed?',()=>{
       assert.ok(inbox.options.address);
    });
    it('Is initial message set?',async()=>{
        const message=await inbox.methods.message().call();
        assert.equal(message,INITAL_MSG);
    })
    it('Is setMessage working?',async()=>{
      await inbox.methods.setMessage('bye').send({from:accounts[0]});
      const message=await inbox.methods.message().call();
      assert.equal(message,'bye');
    });
});


// class Car{
//     park(){
//         return "stopped";
//     }
//     drive(){
//         return "vroom";
//     }
// }

// let car;
// beforeEach(()=>{
//     car=new Car();
// });

// describe("Car",()=>{
//     it('can park',()=>{
//         asset.equal(car.park(),"stopped");
//     })
//     it('can drive',()=>{
//         asset.equal(car.drive(),"vroom");
//     });
// });
