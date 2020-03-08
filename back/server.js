const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const db_config = require('./config/db-config.json');
const PORT = 4001;

app.use(cors());
app.use(bodyParser.json());

//nodemon server
mongoose.connect(db_config.addr,{useNewUrlParser: true});
const connection = mongoose.connection;

let Restriction = require('./collections/restrictions.model');

app.get('/map',(req,res)=>{
    console.log("/map in")
    Restriction.find(function(err,restrictions){
        if(err){
            console.log(err);
        }else{
            res.send(restrictions)
        }
    });
});

app.get('/warning', (req, res)=>{
    console.log("/warning in")
    
})

connection.once('open', function(){
    console.log("MongoDB database connection established successfully");
})

app.listen(PORT, function(){
    console.log("Server is running on PORT: " + PORT);
});
