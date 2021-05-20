require('./helper/mongodb')
const express = require('express');
const app = express();
const port = 3000 ;
var cors = require('cors');
var logger  = require('morgan');


app.use(cors())
app.use(logger('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

peopleManagement = require("./routes/people");

app.use('/api',peopleManagement)


app.listen(port,()=>{console.log(`port listening on ${port}`)})