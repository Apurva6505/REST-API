const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')

const alienSchema = new mongoose.Schema({
    name:{
        type : String,
        reuired : true
    },
    tech:{
        type : String,
        required : true
    },
    sub:{
        type : Boolean,
        required : true,
        default : false
    }
})

module.exports = mongoose.model('Alien',alienSchema)