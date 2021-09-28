const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'glide category print tone stage excite such tourist sausage industry crater differ',
  'https://rinkeby.infura.io/v3/131d4cd570e14b0a9474e4153704e39e'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', gasPrice: '100000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};

deploy();