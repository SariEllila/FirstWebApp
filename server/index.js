const express = require('express'),
    app = express(),
    mongoose = require('mongoose')
    var cors = require('cors')
mongoose.set('debug',true)
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
require('dotenv').config()

async function connecting(){
try {
    await mongoose.connect(`mongodb+srv://sariellila:bargit-mAmmaf-5furmy@cluster0.4lw2fog.mongodb.net/?retryWrites=true&w=majority`)
    console.log('Connected to the DB')
} catch ( error ) {
    console.log('ERROR: Seems like your DB is not running, please start it up !!!');
}
}


app.use('/products', require('./routes/productsRoutes'));
app.use('/payment', require('./routes/paymentsRoutes.js'));


connecting().then(()=>{
    app.listen(4040, () => console.log(`listening on port 4040`))
})

