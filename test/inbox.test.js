const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["Hi there!"],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(inbox);
  });
});





// beforeEach (()=>{
//     // get a list  of all acconts
//     web3.eth.getAccounts()
//         .then(fetchedAccounts=>{
//             console.log(fetchedAccounts)
//         });
// })

// describe('Inbox', () =>{
//     it('deploys a contract', () =>{});
// })

// class Car {
//     park() {
//         return 'stopped';

//     }

//     drive() {
//         return 'vroom';
//     }
// }
// let car
// beforeEach(()=>{
//      car = new Car();
//     // const printCar = () =>{
//     //     console.log(car);
//     // }
// })

// describe('Car',()=>{
//     it('can park', () => {
//         const car = new Car();
//         assert.equal(car.park(),'stopped');
//     });
//     it('can drive', () => {
//         const car = new Car();
//         assert.equal(car.drive(),'vroom');
//     })
// });
