const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

const usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// disable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*'); // Origin, X-Requested-With, Content-Type, Accept, Authorization
    res.header('Access-Control-Allow-Methods', '*'); // GET, POST, PUT, DELETE, OPTIONS
    next();
});
//api
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({message: err.message});
});

module.exports = app;
