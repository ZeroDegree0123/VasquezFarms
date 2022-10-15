const Schema = require('mongoose').Schema;

const reviewSchema = new Schema({
    message: String,
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
    stock:{
        type: Number,
        default: 0,
        required: true
    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = soapSchema;