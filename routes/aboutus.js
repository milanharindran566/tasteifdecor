var express = require('express');
var router = express.Router();

router.get('/aboutus', function (req, res, next) {
    res.render('/aboutus');
});