var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('welcome', { title: 'Palm Court Pavilion' });
});

/* GET consultation page. */
router.get('/p2_yourOrganisation', function(req, res, next) {
  res.render('p2_yourOrganisation', { title: 'Senh: Your organisation' });
});

/* GET consultation page. */
router.get('/p3_about', function(req, res, next) {
  res.render('p3_about', { title: 'Senh: About' });
});

/* GET consultation page. */
router.get('/p4_contact', function(req, res, next) {
  res.render('p4_contact', { title: 'Senh: Contact' });
});

/* GET consultation page. */
router.get('/p5_enquiry', function(req, res, next) {
  res.render('p5_enquiry', { title: 'Senh: Enquiry' });
});

module.exports = router;
