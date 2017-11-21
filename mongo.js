const config = require('./config.json');
const url = config.db.url;
const db = require('monk')(url);
const collection = db.get('ether_transactions');

db.then(()=>{
    console.log('Connected correctly to server');
    collection.count({},function(error, count){
	console.log(count);
    });
    //console.log(collection.count({}));
});
