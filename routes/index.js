var express = require('express');
var router = express.Router();

var data_index = require('../app/mock/index.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data_index);
});

module.exports = router;
