var express = require('express');
var router = express.Router();

router.get('/living', function (req, res, next) {
    res.render('/living');
});