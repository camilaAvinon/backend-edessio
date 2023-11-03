const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const professorSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    }],
    score: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
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