const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please declare a name for your transaction!']
    },
    amount: {
        type: Number,
        required: [true, 'Please declare an amount for your transaction!']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema);