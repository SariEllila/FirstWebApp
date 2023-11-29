const express = require('express'),
    app = express(),
    mongoose = require('mongoose')

mongoose.set('debug',true)

app.use(express.urlencoded({extended:true}))
app.use(express.json())


async function connecting(){
try {
    await mongoose.connect('mongodb+srv://sariellila:bargit-mAmmaf-5furmy@cluster0.4lw2fog.mongodb.net/?retryWrites=true&w=majority')
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

