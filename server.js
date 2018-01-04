/*
//import the http module
var http = require('http');
// handle sendingn requests and returning responses
function handleRequests(req,  res){
//return string
res.end('Jummey Ki Raat Hai , Toh Kya Hua!');
}
//create server
var server = http.createServer(handleRequests);
//start server and listen to port x 
server.listen(8080, function(){
	console.log('Listening on port 8080');
});
*/

//// Express Code /////
var express =require('express');
var port = 8000;
var app = express();
var router = require('./app/routes');

app.use('/',router);

//setting static file location
app.use(express.static(__dirname+'/public'));
app.listen(port,function(){
	console.log('app started');
});
