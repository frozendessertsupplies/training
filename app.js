const quiz = require('./model/quiz_model')
const PORT = process.env.PORT || 3003
const express = require('express')
let exphbs  = require('express-handlebars');

const app = express()
app.listen(PORT)

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', exphbs({
    extname : '.hbs',
    helpers : {
        radio_button :  function(id, answers){
            console.log("parameters: ", id, answers)
            let ret = ''
            for (let i = 0; i < answers.length; i++) {
                ret += `<input type='radio' id='${id}' name='${id}'> ${answers[i]}`
            }
            console.log("return string: " + ret)
            return ret;
        }
    }
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

    res.render('home', {
        quiz: true,
        department: data.department,
        manager_email: data.manager_email,
        questions: data.questions
    })
})
