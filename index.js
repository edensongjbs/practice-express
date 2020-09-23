const express = require('express')
const path = require('path')
const members = require('./public/members.js')
const moment = require('moment')
const expressHandle = require ('express-handlebars')
const mongoose = require('mongoose')
const Test = require('./db/schemas/test')


const app = express()

const myDb = 'mongodb://localhost/mongoose-test'

mongoose.connect(myDb, {useNewUrlParser:true, useUnifiedTopology: true})


// app.get('/', (req, res) => {
//     // res.send("<h1>Hello Ya'll!</h1>")
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// set a static folder

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`)
    next()
}

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express)

app.use(logger)

// app.engine('handlebars', expressHandle({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res) => {
    res.json(members)
})

app.get('/api/members/:id', (req, res) => {
    const member =  members.list[req.params.id]
    if (member) {
        res.json()
    }
    else { res.status(400).json({message: `Not Found`})} 
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))

Test.create({}, (err) => console.log('Created '+ err))
console.log('done with debugger')