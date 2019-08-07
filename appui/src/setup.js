import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://172.20.10.2:7545'));

let ratingAbi = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"movieNames","type":"bytes32[]"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

let ratingAddress = '0xe8639c7b5dd9acfe0891bb40607bd238ae6e26ee';

web3.eth.defaultAccount = web3.eth.accounts[0];

const contract = web3.eth.contract(ratingAbi);

const ratingContract= contract.at(ratingAddress);

export {ratingContract};