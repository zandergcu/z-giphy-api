var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'API Practice - Giphy API',
    description: 'Giphy API Practice',
    url: 'https://z-giphy-api.herokuapp.com'
  });
});

module.exports = router;
