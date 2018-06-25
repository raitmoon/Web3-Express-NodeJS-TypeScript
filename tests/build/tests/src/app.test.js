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
const request = require("supertest");
const app_1 = require("../../src/app");
const chai_1 = require("chai");
describe('POST /', function () {
    it('get Hello', function (done) {
        request(app_1.default)
            .post('/')
            .expect(200, done);
    });
    it('web3 connection is successful and get block number', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: { blockNumber } } = yield request(app_1.default)
                .post('/getBlockNumber')
                .expect(200);
            chai_1.assert.isNumber(blockNumber, 'Blocknumber is not a number.');
            chai_1.assert.isAbove(blockNumber, -1, 'BlockNumber is too low.');
        });
    });
    it('get current provider', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: { currentProvider } } = yield request(app_1.default)
                .post('/getCurrentProvider')
                .expect(200);
        });
    });
    it('get default account', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: { defaultAccount } } = yield request(app_1.default)
                .post('/getDefaultAccount')
                .expect(200);
        });
    });
    it('get coinbase', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: { coinbase } } = yield request(app_1.default)
                .post('/getCoinbase')
                .expect(200);
        });
    });
    it('get accounts', function () {
        return __awaiter(this, void 0, void 0, function* () {
            const { body: { accounts } } = yield request(app_1.default)
                .post('/getAccounts')
                .expect(200);
        });
    });
});
//# sourceMappingURL=app.test.js.map