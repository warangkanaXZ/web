var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tearly', { title: 'tearly' });
});

module.exports = router;