"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Web3 = require("web3");
// declare let Web3: any
const router = express_1.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello' });
});
/* POST home page. */
router.post('/', (req, res, next) => {
    res.send('Hello');
});
/* POST get block number. */
router.post('/getBlockNumber', (req, res, next) => {
    const web3 = new Web3('http://localhost:8485');
    // web3 = Web3.constructor(new web3.providers.HttpProvider('http://localhost:8545'))
    // web3.eth.getBlockNumber().then(console.log)
    res.send(web3.eth.getBlockNumber);
});
exports.default = router;
//# sourceMappingURL=index.js.map