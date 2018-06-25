import { Router } from 'express'
import Web3 = require('web3')
const router: Router = Router()
const provider: string = 'http://localhost:7545'
const web3 = new Web3(provider)

/* GET Methods */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello' })
})

/* POST Methods */
router.post('/', (req, res, next) => {
  res.send('Hello')
})

router.post('/getBlockNumber', async (req, res, next) => {
  const blockNumber = await web3.eth.getBlockNumber()
  res.send({ blockNumber })
})

router.post('/getCurrentProvider', (req, res, next) => {
  const currentProvider = web3.eth.currentProvider
  res.send({ currentProvider })
})

router.post('/getDefaultAccount', (req, res, next) => {
  const defaultAccount = web3.eth.defaultAccount
  res.send({ defaultAccount })
})

router.post('/getCoinbase', async (req, res, next) => {
  const coinbase = await web3.eth.getCoinbase()
  res.send({coinbase})
})

router.post('/getAccounts', async (req, res, next) => {
  const accounts = await web3.eth.getAccounts()
  res.send({accounts})
})

export default router
