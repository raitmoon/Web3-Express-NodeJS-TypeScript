var request = require('supertest');
import app from '../../build/app'

describe('POST /', function() {
  it('get Hello', function(done) {
    request(app)
    .post('/')
    .expect(200, done);
  });

  it('web3 connection is successful and get block number', function(done) {
    request(app)
    .post('/getBlockNumber')
    .expect(200, done);
  });
});