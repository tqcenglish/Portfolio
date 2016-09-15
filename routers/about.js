let express = require('express');
let router = express.Router();

// define the about route
router.get('/', function (req, res) {
  res.render('about.njk', { aboutActive: 'is-active' });
});

module.exports = router

