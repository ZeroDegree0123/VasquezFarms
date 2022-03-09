const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    catName: {
        type: String,
        required:true,
    },
    sortOrder: Number
});

module.exports = mongoose.model('Category', categorySchema);