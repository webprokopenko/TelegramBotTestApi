const config = require('./../config.json');
const url = config.db.url;
const db = require('monk')(url);
const collection = db.get('test');

function getLastParse(callback){
        db.then(()=>{
            collection.count({},function(error, count){
                callback(count);
            });
        });
};
function parseControl(countDoc, callback){
        db.then(()=>{
            collection.count({},function(error,count){
                if(countDoc<=count)
                    callback(false);
                else
                    callback(true);
            });
        });
};
module.exports = {
    parseControl:parseControl,
    getLastParse:getLastParse,
}
