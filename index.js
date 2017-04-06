var fs = require('fs');
var express = require('express');
var app = express();

app.use(function(req, res, next){
	console.log(req.method, req.url);
	next();
});

app.use(express.static(__dirname+'/json'));

app.use(express.static(__dirname+'/front'));

app.listen(3000, function(err){
	if(err)
		throw err;
	console.log('listen on 3000');
});
