'use strict';
var express = require('express');
var router = express.Router();
var controller = require('../auth.controller');

/* GET login */
router.get('/', function (req, res) {
    res.send('routes/api/auth/login routes');
});

router.post('/', controller.login)



module.exports = router;
