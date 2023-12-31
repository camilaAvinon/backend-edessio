const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
    date: {
        type: Date,
        required: true
    },
    studentId:[{
        type: Schema.Types.ObjectId,
        ref: 'Students'
    }],
    professorId: {
        type: Schema.Types.ObjectId,
        ref: 'Professor'
    },
    modalityId: {
        type: Schema.Types.ObjectId,
        ref: 'Modality'
    },
    subjectId:{
        type: Schema.Types.ObjectId,
        ref: 'Subject'
    },
});

const Class = mongoose.model( 'Class' , classSchema );
module.exports = Class;