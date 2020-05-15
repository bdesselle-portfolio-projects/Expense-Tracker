const express = require('express');
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

const app = express.Router();

app
    .route('/')
    .get(getTransactions)
    .post(addTransaction);

app
    .route('/:id')
    .delete(deleteTransaction);

module.exports = app;