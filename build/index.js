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
    let web3;
    web3 = Web3.constructor(new web3.providers.HttpProvider('http://localhost:8545'));
    web3.eth.getBlockNumber().then(console.log);
    res.send('Hello');
});
exports.default = router;
//# sourceMappingURL=index.js.map