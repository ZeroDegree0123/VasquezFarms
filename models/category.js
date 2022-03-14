const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {
        type: String,
        required:true,
    },
    sortOrder: {
        type: Number,
        required: true,
 }
});

module.exports = mongoose.model('Category', categorySchema);