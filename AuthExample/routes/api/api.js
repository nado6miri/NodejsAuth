'use strict';
var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth/auth.js'))


/* GET api listing. */
router.get('/', function (req, res) {
    res.send('routes/api routes');
});

module.exports = router;
