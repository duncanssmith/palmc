var express = require('express');
var router = express.Router();

var menus = {
    0: {name: 'breakfast', displayName: 'Breakfast',        image: 'img/Menu/2018/11/breakfast.png'   , pdf: 'img/Menu/2018/11/breakfast.pdf'}, 
    1: {name: 'brunch',    displayName: 'Brunch',           image: 'img/Menu/2018/11/brunch.png'      , pdf: 'img/Menu/2018/11/brunch.pdf'},
    2: {name: 'lunch',     displayName: 'Lunch',            image: 'img/Menu/2018/11/lunch.png'       , pdf: 'img/Menu/2018/11/lunch.pdf'}, 
    3: {name: 'veg',       displayName: 'Vegetarian/Vegan', image: 'img/Menu/2018/04/veganVeggie.png' , pdf: 'img/Menu/2018/04/veganVeggie.pdf'},
    4: {name: 'drinks',    displayName: 'Drinks/Wine',      image: 'img/Menu/2018/04/drinks.png'      , pdf: 'img/Menu/2018/04/drinks.pdf'},
    5: {name: 'sunday',    displayName: 'Sunday lunch',     image: 'img/Menu/2018/11/sundayLunch.png' , pdf: 'img/Menu/2018/11/sundayLunch.pdf'},
    6: {name: 'kids',      displayName: 'Kids',             image: 'img/Menu/2017/05/Kids.png'        , pdf: 'img/Menu/2017/05/kids.pdf'}
  };

/* GET welcome page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Palm Court Pavilion' });
});

/* GET welcome page. */
router.get('/welcome', function(req, res, next) {
  res.render('welcome', { title: 'Welcome' });
});

/* GET menu page. */
router.get('/menu', function(req, res, next) {
  res.render('menu', { title: 'Menu', menus: menus });
});

/* GET open page. */
router.get('/open', function(req, res, next) {
  res.render('open', { title: 'Open' });
});

/* GET view page. */
router.get('/view', function(req, res, next) {
  res.render('view', { title: 'View' });
});

/* GET book page. */
router.get('/book', function(req, res, next) {
  res.render('book', { title: 'Book' });
});

/* GET function page. */
router.get('/functions', function(req, res, next) {
  res.render('functions', { title: 'Functions' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
