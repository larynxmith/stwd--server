let mongoose = require('mongoose')


let question = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        minlength: 1
    },
    correctAnswer: {
        type: String,
        requried: true
    },
    incorrectAnswer1: {
        type: String,
        required: true 
    },
    incorrectAnswer2: {
        type: String,
        required: true
    },
    incorrectAnswer3: {
        type: String,
        required: true
    },
    userId: String,
    attempted: {
        type: Boolean,
        default: false
    },
    correctAnswer: {
        type: Boolean,
        default: false
    }

})

module.exports = mongoose.model('question', question)