var https = require('https');
var fs = require('fs');
var express = require('express');

var app = express();
var options = {
	key: fs.readFileSync('./server.key'),
	cert: fs.readFileSync('./server.crt')
}


app.use(function(req, res){
	res.send('Helllooooo!')
})

var server = https.createServer(options, app).listen(9001, function(){
	console.log('Now listening safely on port 9001')
})