var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var borrowerRouter = require('./routes/borrower');
var userRouter = require('./routes/user');
var bookRouter = require('./routes/book');
var borrowerRouter = require('./routes/borrower');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/book', bookRouter);
app.use('/borrower',borrowerRouter);
app.use('/user',userRouter);
app.use('/borrowers', borrowerRouter);

module.exports = app;
