// import the express framework
var express = require('express');
var app = express();

var port = process.env.PORT || 8080 || process.env.YOUR_PORT;
var host = process.env.YOUR_HOST || '0.0.0.0';
var server = app.listen(port, host, () => {
    console.log('STARTING SERVER AT ' + port);
});
var fs = require('fs');
console.log("SERVER RUNNING");

// allow static files under the public directory to be hosted
app.use(express.static('public'));

