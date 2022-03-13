// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Soap = require('./models/item');
const Category = require('./models/category');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, soap, category, order;
let users, soaps, categories, orders;