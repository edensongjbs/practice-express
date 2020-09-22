const express = require('express')
const path = require('path')
const members = require('./public/members.js')

const app = express()

// app.get('/', (req, res) => {
//     // res.send("<h1>Hello Ya'll!</h1>")
//     res.sendFile(path.join(__dirname, 'public', 'index.html'))
// })

// set a static folder

app.use(express.static(path.join(__dirname, 'public')))

app.get('/api/members', (req, res) => {
    res.json(members)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on ${PORT}`))
