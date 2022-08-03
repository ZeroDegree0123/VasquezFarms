const Schema = require('mongoose').Schema;

const soapSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true 
    },
    ingredients:{
        type: Array,
        required: true
    },
    price:{
        type: Number,
        default: 4,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    reviews:{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }
}, {
    timestamps: true
});

module.exports = soapSchema;