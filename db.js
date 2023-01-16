const mongoose = require("mongoose");

var mongoURL = 'mongodb:ac-1epgjox-shard-00-01.xadkdi0.mongodb.net:27017'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose
