'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// Auth : mongoose & config
var mongoose = require('mongoose');
const config = require('./config')

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Auth : set the secret key variable for jwt
app.set('jwt-secret', config.secret)

app.use('/', routes);
app.use('/users', users);
app.use('/api', require('./routes/api/api.js'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});


//===============================
//    CONNECT TO MONGODB SERVER
//===============================
mongoose.connect(config.mongodbUri)
const db = mongoose.connection
db.on('error', console.error)
db.once('open', () => {
    console.log('connected to mongodb server')
})

// Token 기반 시스템 및 JWT(JSON WEB TOKEN) 인증 https://velopert.com/2448
// Passport기반 인증 http://www.passportjs.org/
// npm install jsonwebtoken
// npm install mongoose
// npm install jsonwebtoken

// mongod
// use admin
// db.createUser({user : 'admin', pwd : 'admin', roles: ['root']})
// mongod --auth
// mongo admin -u admin -p admin
// db.createUser({ user: 'sdet', pwd: 'sdet', roles: [] })