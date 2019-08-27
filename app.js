const quiz = require('./model/quiz_model')

const express = require('express')
let exphbs  = require('express-handlebars');

const app = express()
const PORT = process.env.PORT || 3001
app.listen(PORT)

app.use(express.static(__dirname + '/public'));

app.engine('.hbs', exphbs({
    extname : '.hbs',
    helpers : {
        optionfiller : function(value, opt) {
            let data = ""
            for(let i = 0; i < value.length; i++){
                
                data += `<input type='radio' value='${value[i]}'>${value[i]}<br>` /*opt.fn(value[i].options)*/
            }
            
            return data;
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
    let data = quiz.getData(req.params.dept)
    data = JSON.parse(data)
    res.render('home', {
        quiz: true,
        data: data
    })
})
