const request = require("request");
const config = require('./config.json');
const telegramBot = require('node-telegram-bot-api');
const requestControl = require('./services/requestControl.js');


let bot = new telegramBot(config.token, {polling: true});
let users = [];

bot.onText(/\/test/, function (msg, match) {
    let fromId = msg.from.id;
    let resp = match[1];
    request.get(config.site).on("response", function(response){
        if(response.statusCode!==200)
            bot.sendMessage(fromId, "General link don't work!!!");
        else
            bot.sendMessage(fromId, 'General link work');
    }); 
});

bot.onText(/\/timetest/, function (msg, match) {
    let fromId = msg.from.id;
    let resp = match[1];
    setInterval(()=>{
        request.get(config.site).on("response", function(response){
            if(response.statusCode!==200)
                bot.sendMessage(fromId, "General link don't work!!!");
            }); 
        requestControl.testCreateAccount((error,bool)=>{
            if(error)
                bot.sendMessage(fromId, "Create accounts don't work!!!");
        });
    },config.timeRepeatTest);
});




