var express = require('express');
var router = express.Router();

router.get('/products', function (req, res, next) {
    res.render('/products');
});