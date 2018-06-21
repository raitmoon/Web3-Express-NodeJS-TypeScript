"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var request = require('supertest');
const app_1 = require("../../build/app");
describe('POST /', function () {
    it('get Hello', function (done) {
        request(app_1.default)
            .post('/')
            .expect(200, done);
    });
    it('web3 connection is successful and get block number', function (done) {
        request(app_1.default)
            .post('/getBlockNumber')
            .expect(200, done);
    });
});
//# sourceMappingURL=test.js.map