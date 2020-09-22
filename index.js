const express = require('express')
const path = require('path')
const members = require('./public/members.js')
const moment = require('moment')

const app = express()

// app.get('/', (req, res) => {
//     // res.send("<h1>Hello Ya'll!</h1>")
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// set a static folder

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}

app.use(logger)
app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res) => {
    res.json(members)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
