
const express = require('express')
var Router = express.Router()

Router.get('/quiz/:dept', (req, res) => {
    let data = JSON.parse( quiz.getData(req.params.dept) )
    console.log(data)
    res.render('home', {
        quiz: true,
        data: data
    })
})
