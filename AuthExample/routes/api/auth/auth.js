'use strict';
var express = require('express');
var router = express.Router();

const User = require('../../../models/user')

router.use('/register', require('./register/register.js'))
router.use('/login', require('./login/login.js'))


/* GET api listing. */
router.get('/', function (req, res) {
    res.send('routes/api/auth routes');
});


module.exports = router;
