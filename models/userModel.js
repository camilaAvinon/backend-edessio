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
    location: { // Ver si location tiene que ser otra tabla a la que se hace referenica con el id, asi se agregan nuevas si no estan precargadas
        type: String,
        required: true
    },
    isPro: {
        type: Boolean,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,  // 1 (true), 0(false)
        ref: 'Role'
    } 
});
const User = mongoose.model( 'User', userSchema );
module.exports = User;