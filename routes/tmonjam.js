var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tmonjam', { title: 'tmonjam' });
});

module.exports = router;