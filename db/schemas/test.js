const mongoose = require('mongoose')
const Schema = mongoose.Schema

var TestSchema = new Schema({
    name: { type: String, required: true, default: "James" },
    age: { type: Number, default: 37 }
})



module.exports = mongoose.model('Test', TestSchema)