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
router.post('/getBlockNumber', async (req, res, next) => {
  const web3 = new Web3('http://localhost:8545')
  const blockNumber = await web3.eth.getBlockNumber()
  res.send({ blockNumber })
})

export default router
