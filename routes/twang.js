var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('twang', { title: 'twang' });
});

module.exports = router;