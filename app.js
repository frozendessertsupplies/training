const quiz = require('./model/quiz')

const express = require('express')
let exphbs  = require('express-handlebars');

const app = express()
const PORT = process.env.PORT || 3001
app.listen(PORT)

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use((req, res, next) => {
    console.log("Requesting: " + req.url)
    next()
})

app.get('/', (req, res) => {
    res.render('home', {
        quiz: false
    })
})

app.get('/quiz/:id', (req, res) => {
    let data = quiz.getData(req.params.id)

    res.send('Hello', {
        quiz: true,
        data: data
    })
})
