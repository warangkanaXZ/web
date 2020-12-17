var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tkangwat', { title: 'tkangwat' });
});

module.exports = router;