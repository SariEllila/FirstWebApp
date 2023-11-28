const express = require('express'),
    app = express(),
    mongoose = require('mongoose')

mongoose.set('debug',true)

app.use(express.urlencoded({extended:true}))
app.use(express.json())

// connecting to mongo and checking if DB is running
async function connecting(){
try {
    await mongoose.connect('mongodb+srv://sariellila:Syyssade89@myfirstproject.giyanvu.mongodb.net/?retryWrites=true&w=majority')
    console.log('Connected to the DB')
} catch ( error ) {
    console.log('ERROR: Seems like your DB is not running, please start it up !!!');
}
}
// end of connecting to mongo and checking if DB is running

// routes
app.use('/category', require('./routes/categoriesRoutes'));
app.use('/products', require('./routes/productsRoutes'));


// Run "connecting" function and then set the server to listen on port 4000
connecting().then(()=>{
    app.listen(4040, () => console.log(`listening on port 4040`))
})
