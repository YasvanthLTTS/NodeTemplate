var express = require('express');
var router = express.Router();
var configDetails = require('./config'); 
var port = process.env.PORT || configDetails.Port.port; // set our port
console.log(port);
console.log('Magic happens on port ' + port);
console.log('Hello World!');
var app = express();

var testService = require('./testService');
app.use('/',testService);
app.use('/test',testService);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
console.log('Hello World!');