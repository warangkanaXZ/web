var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tbanmae', { title: 'tbanmae' });
});

module.exports = router;