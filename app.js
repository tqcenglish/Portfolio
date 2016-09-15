let express = require('express')
let nunjucks = require('nunjucks')
let app = express()

app.use(express.static('public'));

nunjucks.configure('views', {
  autoescape: false,
  express: app
})
app.get('/', (req, res) => {
  res.redirect('/portfolio')
})

let portfolio = require('./routers/portfolio');
let about = require('./routers/about')
let blog = require('./routers/blog')
let contact = require('./routers/contact')
app.use('/portfolio', portfolio);
app.use('/about', about)
app.use('/blog', blog)
app.use('/contact', contact)

app.listen(3000)
