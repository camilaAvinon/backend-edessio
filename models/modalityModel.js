const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const modalitySchema = new Schema ({
    name: {
        type: String,
        required: true
    },
});
const Modality = mongoose.model( 'Modality', modalitySchema );
module.exports = Modality;