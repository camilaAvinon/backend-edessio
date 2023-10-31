const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const professorSchema = new Schema ({
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    score: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    modalityId: {
        type: Schema.Types.ObjectId,
        ref: 'Modality'
    }
});
const Professor = mongoose.model( 'Professor', professorSchema );
module.exports = Professor;