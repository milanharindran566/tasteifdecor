var express = require('express');
var router = express.Router();

router.get('/bedroom', function (req, res, next) {
    res.render('/bedroom');
});