const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: String,
    soapId: String,
    message: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 3,
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
    timestamps: true
})

module.exports = mongoose.model('Review', reviewSchema)