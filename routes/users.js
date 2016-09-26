var express = require('express');
var router = express.Router();

var pg = require('pg');
var connectionString = '';


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
