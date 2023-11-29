const mongoose = require("mongoose");

const  userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true },	
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, date: Date, required: true },
    billingAddress: { type: String, required: true },
    billingZip: { type: Number, required: true },
    billingCountry: { type: String, required: true },
    cardNumber: {type: Number, required: true},
    cardExpiry: {type: Number, date: Date, required: true},
    cardSecCode: {type: Number, required: true},
})

module.exports = mongoose.model("user", userSchema);