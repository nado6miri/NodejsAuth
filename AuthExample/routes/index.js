﻿'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send('Hello JWT');
    //res.render('index', { title: 'Express' });
});

module.exports = router;
