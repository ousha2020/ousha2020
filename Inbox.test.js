const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3 (ganache.provider());
const { interface, bytecode } = require( '../compile');

let accounts;
let inbox;


beforeEach(async () =>{

accounts = web3.eth.getAccounts().then(fetchedAccounts => {
    console.log(fetchedAccounts);

     new web3.eth.Contract()
    });




});


describe('Inbox', () => {

    it('deploys a contract', () => {




    });
//    console.log(accounts);
});
