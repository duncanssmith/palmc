var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Palm Court Pavilion' });
});

/* GET example page. */
// router.get('example', function(req, res, next) {
  // res.render('example', { title: 'Example pug' });
// });

/* GET home page. */
// router.get('menu', function(req, res, next) {
  // res.render('menu', { title: 'Menu' });
// });


module.exports = router;
