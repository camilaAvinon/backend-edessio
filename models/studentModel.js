const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const studentSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    birth: {
        type: Date,
        require: true
    },
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;