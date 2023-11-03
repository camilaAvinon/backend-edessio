const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: { // ??
        type: String,
        required: true
    },
    isPro: {
        type: Boolean,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'Role'
    },
    birth: {
        type: Date,
        require: true
    }
});
const User = mongoose.model( 'User', userSchema );
module.exports = User;