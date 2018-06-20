"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index = express_1.Router();
/* GET home page. */
index.get('/', function (req, res, next) {
    res.render('index', { title: 'Visual Studio Code!' });
});
exports.default = index;
//# sourceMappingURL=index.js.map