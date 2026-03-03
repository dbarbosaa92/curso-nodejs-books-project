const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conn')

const hbs = exphbs.create()

const taskRoutes = require('./routes/taskRoutes')

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.redirect('/tasks')
})

app.use('/tasks', taskRoutes)

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((err) => console.log(err))
