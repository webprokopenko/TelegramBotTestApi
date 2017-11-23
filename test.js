let parse = require('./services/parseControl.js');

parse.getLastParse((count)=>{
    console.log(count);
});

parse.parseControl(13,(tripple)=>{
    console.log(tripple);
});


