const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytcode} = require('./compile');

const provider = new HDWalletProvider(
    'call of glow test rinkbey',
    'https://rinkeby.infura.io/v3/1a2aa2498d344da885d73600dc6599ae'
);

const web3 = new Web3(provider);


const deploy = async () =>{
    const accounts = await web3.eth.getAccounts();
    console.log(accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data:bytcode,arguments:['Hi there!']})
        .send({gas:'10000',from:accounts[0]})

    console.log(result)
};

deploy();