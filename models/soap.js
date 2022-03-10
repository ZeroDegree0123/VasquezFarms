const mongoose = require('mongoose');
const Schema = mongoose.Schema;

require('./category')

const soapSchema = new Schema({
    soapName:{
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
    }
}, {
    timestamps: true
});



module.exports = mongoose.model('Soap', soapSchema);