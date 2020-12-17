var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('covid', { title: 'covid' });
});

module.exports = router;