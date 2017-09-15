var express = require('express');
var router = express.Router();
var config = require('./config');

router.get('/test',function(req,res){
    res.send('Test Services Success!!');
});

module.exports = router;