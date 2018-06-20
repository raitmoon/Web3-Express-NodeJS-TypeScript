"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = require("web3");
const provider = 'http://localhost:8545';
function createWeb3Instance() {
    const web3 = new web3_1.default();
    web3.setProvider(new web3.providers.HttpProvider(provider));
}
/*
function getBlockNumber(){
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://stbnlp-dns-reg1.japaneast.cloudapp.azure.com:8545'));
  web3.eth.getBlockNumber().then(console.log);
}

function createAccount(){
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var _account = web3.eth.personal.newAccount("test");
  console.log(_account)
}

function sendEther() {
  var Web3 = require('web3');
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var _account = web3.personal.newAccount("test");
  console.log(_account)

}

function sendToken() {
  var Web3 = require('web3');
  var web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));
  var _account = web3.personal.newAccount("test");
  console.log(_account)

}
*/
//# sourceMappingURL=eth.js.map