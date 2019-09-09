const quiz = require("./model/quiz_model");
const PORT = process.env.PORT || 3003;
const express = require("express");
let exphbs = require("express-handlebars");

const app = express();
app.listen(PORT);

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    helpers: {
      radio_button: function(id, answers) {
        let ret = "";
        for (let i = 0; i < answers.length; i++) {
          ret += `<input type='radio' name='${id}' value='${answers[i]}'> ${answers[i]} </br>`;
        }
        return ret;
      }
    }
  })
);
app.set("view engine", ".hbs");

// logger
app.use((req, res, next) => {
  console.log("Requesting: " + req.url);
  next();
});

app.get("/", (req, res) => {
  res.render("home", {
    quiz: false
  });
});

app.get("/quiz/:dept", (req, res) => {
  let data = quiz.getQuiz(req.params.dept);
  //data = JSON.parse(data);

  res.render("home", {
    quiz: true,
    department: data.department,
    manager_email: data.manager_email,
    questions: data.questions
  });
});


app.post("/api/:dept", (req, res) => {
    let choices = req.body.answers
    let score = 0
    let total = 0
    let which_wrong = []

    // this is where the answer checking will happen
    quiz.getAnswers(req.params.dept)
        .then(answers => {
            answers.forEach(function(element, i) {
                if(answers[i] == choices[i]){
                    score += 1
                    which_wrong.push(true)
                } else {
                    which_wrong.push(false)
                }
                total += 0
            });
            
            return JSON.stringify({score: score, total: total, which_wrong: which_wrong})
        })
        .catch(err => console.err(err))
});


