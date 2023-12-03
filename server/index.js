const express = require('express'),
    app = express(),
    mongoose = require('mongoose')
    var cors = require('cors')
mongoose.set('debug',true)
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('dotenv').config()
const jwt = require("jsonwebtoken");
const validator = require("validator");
const jwt_secret = process.env.JWT_SECRET;


async function connecting(){
try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to the DB')
} catch ( error ) {
    console.log('ERROR: Seems like your DB is not running, please start it up !!!');
}
}

app.use('/products', require('./routes/productsRoutes'));
app.use('/users', require('./routes/usersRoutes'));


connecting().then(()=>{
    app.listen(4040, () => console.log(`listening on port 4040`))
})

