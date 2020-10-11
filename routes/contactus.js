var express = require('express');
var router = express.Router();
var db = require('../database');
router.get('/', function (req, res, next) {
  res.render('contactus');
});

router.post('/create', function (req, res, next) {

  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var telnum = req.body.telnum;
  var feedback = req.body.feedback;
  var approval = req.body.approve;
  var areacode = req.body.areacode;
  var methpref = req.body.method;

  var sql = `INSERT INTO users (firstname,lastname,areacode,telnum,contactperm,prefmeth, feedback,email) VALUES 
        ('${firstname}', '${lastname}', ${areacode}, ${telnum}, '${approval}' , '${methpref}' , '${feedback}' , '${email}')`;


  db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("record inserted");
  });
  res.redirect('/contactus');
});

module.exports = router;