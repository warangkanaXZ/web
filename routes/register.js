const e = require('express');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_login"
});

router.get('', function(req, res, next) {
  res.render('register', { title: 'register' });
});

router.post('/registerAcc', function(req, res) {
  //Contact DB
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;
  var sql = "INSERT INTO register (name, email, password) ";
  //INSERT INTO `register` (`uname`, `lname`, `email`, `password`) VALUES ('123', '123', '123', '123')
  sql += "VALUES ('"+name+"', '"+email+"', '"+password+"')";
  con.query(sql, function(err, result, fields) {
    if (err) {
      throw err;
    }
    console.log(result);
    if(result.affectedRows > 0) {
      res.send({"result":1});
    } else {
      res.send({"result":0});
    }
  });
  // con.connect(function(err){
  //   if(err){throw err;}
  //   console.log("connected!");
  // });
  
});

module.exports = router;





