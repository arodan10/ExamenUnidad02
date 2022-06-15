var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res, next) {
  res.render('main');
});

router.get('/add-registro', function(req, res, next) {
  res.render('registro/add');
});

router.get('/add-tramite', function(req, res, next) {
  res.render('tramite/add');
});

module.exports = router;
