const quiz = require('./model/quiz_model')

const express = require('express')
let exphbs  = require('express-handlebars');

const app = express()
const PORT = process.env.PORT || 3001
app.listen(PORT)

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', exphbs({
    extname : '.hbs',
}));
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

app.get('/quiz/:dept', (req, res) => {
    let data = quiz.getQuiz(req.params.dept)
    data = JSON.parse(data)
    console.log(questions[0].id)
    res.render('home', {
        quiz: true,
        department: data.department,
        manager_email: data.manager_email,
        questions: data.questions
    })
})
