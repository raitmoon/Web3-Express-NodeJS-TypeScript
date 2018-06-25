"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Web3 = require("web3");
const router = express_1.Router();
const provider = 'http://localhost:7545';
const web3 = new Web3(provider);
/* GET Methods */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello' });
});
/* POST Methods */
router.post('/', (req, res, next) => {
    res.send('Hello');
});
router.post('/getBlockNumber', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const blockNumber = yield web3.eth.getBlockNumber();
    res.send({ blockNumber });
}));
router.post('/getCurrentProvider', (req, res, next) => {
    const currentProvider = web3.eth.currentProvider;
    res.send({ currentProvider });
});
router.post('/getDefaultAccount', (req, res, next) => {
    const defaultAccount = web3.eth.defaultAccount;
    res.send({ defaultAccount });
});
router.post('/getCoinbase', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const coinbase = yield web3.eth.getCoinbase();
    res.send({ coinbase });
}));
router.post('/getAccounts', (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const accounts = yield web3.eth.getAccounts();
    res.send({ accounts });
}));
exports.default = router;
//# sourceMappingURL=index.js.map