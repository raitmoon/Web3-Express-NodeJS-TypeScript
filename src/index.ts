import { Router } from 'express'
import Web3 = require('web3')
// declare let Web3: any

const router: Router = Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Hello' })
})

/* POST home page. */
router.post('/', (req, res, next) => {
  res.send('Hello')
})

/* POST get block number. */
router.post('/getBlockNumber', (req, res, next) => {
  let web3
  web3 = Web3.constructor(new web3.providers.HttpProvider('http://localhost:8545'))
  // web3.eth.getBlockNumber().then(console.log)
  res.send(web3.eth.getBlockNumber)
})

export default router
