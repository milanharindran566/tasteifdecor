var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {});
});

router.get('/home', function (req, res, next) {
  res.render('home', {});
});

router.get('/aboutus',function (req,res,next) {
  res.render('aboutus')
});

router.get('/products',function (req, res,next) {
  res.render('products' , {})
});

router.get('/contactus', function (req, res, next) {
  res.render('contactus', {})
});

router.get('/living', function (req, res, next) {
  res.render('living', {});
});

router.get('/bedroom', function (req, res, next) {
  res.render('bedroom', {})
});

router.get('/kitchen', function (req, res, next) {
  res.render('kitchen', {})
});

router.get('/kids', function (req, res, next) {
  res.render('kids', {}) 
});

router.get('/bathroom', function (req, res, next) {
  res.render('bathroom', {})
});



module.exports = router;