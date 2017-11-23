const request = require("request");
const config = require('./config.json');
const util = require('util')

request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     config.UrlCreateAccount,
    body:    "ps=somepass"
  }, function(error, response, body){

    console.log(JSON.parse(body));
    
  });