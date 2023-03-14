const mongoose = require('mongoose');
const { Schema, model } = mongoose;


const UserSchema = Schema({
   
    name:{
        type: String,
        required: true,
    },
    contact: {
        type: Number,
        required: true,

    }
})

const User = model('User', UserSchema)
module.exports = User;