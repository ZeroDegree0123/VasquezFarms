const mongoose = require('mongoose');


require('./category')

require('./review')

const soapSchema = require('./soapSchema');


module.exports = mongoose.model('Soap', soapSchema);