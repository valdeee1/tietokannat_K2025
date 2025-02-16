var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/example', function (req, res) {
    res.send('Hello World!');
});

app.get('/example/:nimi', function (req, res) {
    res.send('Hello ' + req.params.nimi);
});

app.get('/example/:etunimi/:sukunimi', function (req, res) {
    res.send('Hello ' + req.params.etunimi + ' ' + req.params.sukunimi);
});

app.post('/',
    function (req, res) {
        res.send(req.body);
    });

app.use(
    function (req, res, next) {
        console.log("Tama on middleware");
        next();
    }
)


module.exports = app;
