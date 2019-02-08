var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Palm Court Pavilion' });
});

/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

/* GET example page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu', menus: {0: 'Breakfast', 1: 'Brunch', 2: 'Lunch', 3: 'Veg', 4: 'Drinks', 5: 'Sunday', 6: 'Kids'} });
});

/* GET example page. */
router.get('/open', function(req, res, next) {
  res.render('open', { title: 'Open' });
});

/* GET example page. */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'View' });
});

/* GET example page. */
router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Book' });
});

/* GET example page. */
router.get('/functions', function(req, res, next) {
  res.render('functions', { title: 'Functions' });
});

/* GET example page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
