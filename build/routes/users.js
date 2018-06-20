"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users = express_1.Router();
/* GET users listing. */
users.get('/', (req, res, next) => {
    res.send('respond with a resource');
});
exports.default = users;
//# sourceMappingURL=users.js.map