var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tgarden', { title: 'tgarden' });
});

module.exports = router;