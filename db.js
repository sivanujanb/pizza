const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://sivanujan:2022@Aksharan@cluster0.7yjlvof.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(mongoURL , {useUnifiedTopology:true , useNewUrlParser:true})

var db = mongoose.connection

db.on('connected' , ()=>{
    console.log('Mongo DB Connection Successfull');
})

db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports =mongoose
