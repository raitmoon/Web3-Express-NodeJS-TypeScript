"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Hello' });
});
/* POST methods. */
router.post('/', (req, res, next) => {
    res.send('Hello');
});
/* Post tip listing. */
router.post('/tip', (req, res, next) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const amount = req.body.amount;
    const param = { 'senderId:': senderId };
    res.send(param);
});
/* Post tip listing. */
router.post('/getBalance', (req, res, next) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const amount = req.body.amount;
    const param = { 'balance:': senderId };
    res.send(param);
});
exports.default = router;
//# sourceMappingURL=routes.js.map