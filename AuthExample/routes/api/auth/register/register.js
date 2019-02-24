'use strict';
var express = require('express');
var router = express.Router();
var controller = require('../auth.controller');

/* GET register */
router.get('/', function (req, res) {
    res.send('routes/api/auth/register routes');
});



router.post('/', controller.register)



module.exports = router;
