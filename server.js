const express = require('express')
const app = express()
const router = require('./routes/router')
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(router)





app.listen(3000,()=>{
    console.log("server listening at 3000");
})