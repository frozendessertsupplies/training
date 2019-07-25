const express = require('express')

const app = express()

const PORT = process.env.PORT || 3001
app.listen(PORT, res => console.log('APP STARTED'))

app.use((req, res, next) => {
    console.log("Requesting: " + req.url)
    next()
})

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/cs', (req, res) => {
    res.send('Hello')
})