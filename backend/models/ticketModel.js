const mongoose = require('mongoose')

const ticketSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    product:{
        type: String,
        required: [true, 'Please select a product'],
        enum: ['Xbox Series X', 'PlayStation 5', 'Nitendo Switch', 'DELL Computer']
    },
    description:{
        type: String,
        required: [true, 'Please enter a description of issue'],
        
    },
    statue:{
        type: String,
        required: true,
        enum: ['new', 'open', 'closed'],
        default: 'new'
    }
}, {timestamps: true})

module.exports = mongoose.model('Ticket', ticketSchema)