import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

let ratingAbi = [{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"ratingsReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"movieList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movieNames","type":"bytes32[]"}],"name":"setMovieList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"movie","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"movie","type":"bytes32"}],"name":"voteForMovie","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];

let ratingAddress = '0x99a438819add452ba007227d9d9e47fd92a6a704';

web3.eth.defaultAccount = web3.eth.accounts[0];

const ratingContract = new web3.eth.contract(ratingAbi, ratingAddress);

export {ratingContract};