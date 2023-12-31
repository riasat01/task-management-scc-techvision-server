const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
    "title": {
        type: String,
        required: true
    },
    "description": {
        type: String,
        required: true
    },
    "created": {
        type: Date,
        required: true
    },
    "deadline": {
        type: Date,
        required: true
    },
    "priority": {
        type: String,
        enum: ['Low', 'Moderate', 'High'],
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "status": {
        type: String,
        required: true,
        enum: ['To-Do', 'Ongoing', 'Completed']
    }
})

const Task = new model('task', taskSchema);
module.exports = { Task };