const express = require('express') // dowload express library
const path = require('path')
var methodOverride = require('method-override')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 4000
const route = require('./routes')
const db = require('./config/db')
//connect
db.connect()
app.use('/public',express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
    extended:true
}))
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.use(express.json())
// HTTP logger
app.use(morgan('combined'))
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
// Template engine
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: {
        sum:(a,b)=> a+b
    }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

// route
route(app)
// 127.0.0.1 - localhost
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
