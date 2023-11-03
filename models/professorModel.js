const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
const professorSchema = new Schema ({ //Faltan los estudios
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
    modalityId: {
        type: Schema.Types.ObjectId,
        ref: 'Modality'
    }
});
const Professor = mongoose.model('Professor',professorSchema);
module.exports = Professor;