let express = require('express')
let router = express.Router()

// define the contact route
router.get('/', function (req, res) {
  res.render('contact.njk', { contactActive: "is-active" })
});

module.exports = router
