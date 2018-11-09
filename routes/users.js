var express = require('express');
var router = express.Router();

var userApi = require('./user/index');

/* GET users listing. */
router.post('/', userApi.addUser);

module.exports = router;