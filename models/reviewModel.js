const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const reviewSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'Student'
    },
    professorId: {
        type: Schema.Types.ObjectId,
        ref: 'Professor'
    },
    review: {
        type: 'String'
    },
    score: {
        type: Number,
        require: true
    }
});

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;