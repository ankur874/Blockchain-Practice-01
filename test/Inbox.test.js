const asset = require('assert');
const ganache = require('ganache');
const Web3 = require('web3'); // W is capital in Web3 coz it's a constructor function 
const web3 = new Web3(ganache.provider());// w is small in web3 coz it's an instance of 'Web3' .
const {abi,evm} = require('../compile');

let bytecode = evm.bytecode.object;
let accounts,inbox;

beforeEach(async()=>{
    accounts =await web3.eth.getAccounts();//fetch all accounts
    inbox = await new web3.eth.Contract(abi)
       .deploy({data:bytecode,arguments:['Hi there!']})
       .send({from:accounts[0],gas:'1000000'});
});
describe("test",()=>{
    it('test1',()=>{
     console.log(inbox);
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
