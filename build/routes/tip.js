"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* Post tip listing. */
router.post('/', (req, res, next) => {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;
    const amount = req.body.amount;
    const param = { 'senderId:': senderId };
    res.send(param);
});
exports.default = router;
//# sourceMappingURL=tip.js.map