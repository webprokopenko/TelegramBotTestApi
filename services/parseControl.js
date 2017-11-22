const config = require('./../config.json');
const url = config.db.url;
const db = require('monk')(url);
const collection = db.get('ether_transactions');

function getLastParse(){
        db.then(()=>{
            collection.count({},function(error, count){
            return count;
            });
        });
};
function parseControl(countDoc){
        db.then(()=>{
            collection.count({},function(error,count){
                if(countDoc<=count)
                    return false;
                else
                    return true;
            });
        });
};
module.exports = {
    parseControl:parseControl,
    getLastParse:getLastParse,
}
