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

  it('get current provider', async function() {
    const {
      body: { currentProvider }
    } = await request(app)
      .post('/getCurrentProvider')
      .expect(200)
  })

  it('get default account', async function() {
    const {
      body: { defaultAccount }
    } = await request(app)
      .post('/getDefaultAccount')
      .expect(200)
  })

  it('get coinbase', async function() {
    const {
      body: { coinbase }
    } = await request(app)
      .post('/getCoinbase')
      .expect(200)
  })

  it('get accounts', async function() {
    const {
      body: { accounts }
    } = await request(app)
      .post('/getAccounts')
      .expect(200)
  })
})
