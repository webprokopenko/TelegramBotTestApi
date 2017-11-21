const config = require('./config.json');
const url = config.db.url;
const db = require('monk')(url);
db.then(()=>{
    console.log('Connected correctly to server');
});
