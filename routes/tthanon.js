var express = require('express');
var router = express.Router();

router.get('', function(req, res, next) {
  res.render('tthanon', { title: 'tthanon' });
});

module.exports = router;