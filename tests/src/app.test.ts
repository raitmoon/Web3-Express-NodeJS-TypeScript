import request = require('supertest')
import app from '../../src/app'
import { assert } from 'chai'

describe('POST /', function() {
  it('get Hello', function(done) {
    request(app)
      .post('/')
      .expect(200, done)
  })

  it('web3 connection is successful and get block number', async function() {
    const {
      body: { blockNumber }
    } = await request(app)
      .post('/getBlockNumber')
      .expect(200)
    assert.isNumber(blockNumber, 'Blocknumber is not a number.')
    assert.isAbove(blockNumber, -1, 'BlockNumber is too low.')
  })
})
