var express = require('express');
var router = express.Router();

router.get('/kitchen', function (req, res, next) {
    res.render('/kitchen');
});