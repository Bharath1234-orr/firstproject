const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login in the lecture1</h1>')
})

app.get('/twitter', (req, res) => {
    res.send('<h2> siddanthdotcom</h2>')
})

app.get('/youtube', (req, res) => {
    res.send('<h3>code with Harry </h3>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
