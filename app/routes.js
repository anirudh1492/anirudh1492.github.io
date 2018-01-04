//Express Require
var express = require('express');
var path = require('path');
//Creating route object
var router = express.Router();

//Exporting the router
module.exports = router;  

//Home page
router.get('/',function(requests,responses){
	responses.sendFile(path.join(__dirname,'../index.html'));
});

//Learn More Page
router.get('/about',function(requests,responses){
responses.sendFile(path.join(__dirname,'../about.html'));
});
//Contact Page
router.get('/Contact');
router.post('/Contact'); 
