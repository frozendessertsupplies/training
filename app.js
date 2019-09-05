const quiz = require("./model/quiz_model");
const PORT = process.env.PORT || 3003;
const express = require("express");
let exphbs = require("express-handlebars");

const app = express();
app.listen(PORT);

app.use(express.static(__dirname + "/public"));

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
  data = JSON.parse(data);

  res.render("home", {
    quiz: true,
    department: data.department,
    manager_email: data.manager_email,
    questions: data.questions
  });
});

/**
 * this isn't finished
 * TODO: make sure the redirect will show a list of questions and the wrong answers?
 */
app.get("/api/:dept", (req, res) => {
  let data = quiz.getAnswers(req.params.dept);
  data = JSON.parse(data);
  res.send(data)
});
