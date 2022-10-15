const mongoose = require('mongoose');


require('./category')

const soapSchema = require('./soapSchema');


module.exports = mongoose.model('Soap', soapSchema);