const request = require("request");
const config = require('./config.json');
const telegramBot = require('node-telegram-bot-api');

let bot = new telegramBot(config.token, {polling: true});

bot.onText(/\/test/, function (msg, match) {
    let fromId = msg.from.id;
    let resp = match[1];
    request.get(config.site).on("response", function(response){
        if(response.statusCode!==200)
            bot.sendMessage(fromId, "Bad not works!!!");
        else
            bot.sendMessage(fromId, 'All is well!!');
    }); 
});