const request = require("request");
const config = require('./../config.json');
const util = require('util')

function testCreateAccount(callback) {
    var address;

    request.post({
        headers: {'content-type' : 'application/x-www-form-urlencoded'},
        url:     config.UrlCreateAccount,
        body:    "ps=somepass"
    }, function(error, response, body){

    if(!error && response.statusCode == 200){
        parsed = JSON.parse(body);
        testCreateAccount.address = parsed.keyFile.address
        callback(null, true);
    }
  });
}; 

function testGetBalance(address,callback){
    request.get(config.UrlGetBalance + '/' + address).on("response", function(response){
        if(response.statusCode==200)
            callback(null,true);
    }); 
}

module.exports = {
    testCreateAccount:testCreateAccount,
    testGetBalance:testGetBalance
}