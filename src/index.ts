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

router.post('/send', async (req, res, next) => {
  const senderId = '0x1C925b08ABCD86A5a157D610A283eA54B7183577'
  const senderPassword = 'e659e73d38f2f152258f824c6427ae05143393aeb3d7d273e4ddd032f4b7a40a'
  const duration = 30.0
  const receiverId = '0x6F1328bf39BD5570db3fD876ba272089592Ee225'
  const amount = web3.utils.toWei(req.body.amount.toString(), 'ether')
  const result = await web3.eth.personal.unlockAccount(senderId, senderPassword, duration)
  if (result === true) {
    console.log('success')
    const txResult = await web3.eth.sendTransaction({
      from: senderId,
      to: receiverId,
      value: amount.toString()
    })
    const response = {txId: txResult.transactionHash}
    res.send(response)
  } else {
    console.log('error')
    const response = {txId: '12345678901234567890'}
    res.send(response)
  }
})

export default router
