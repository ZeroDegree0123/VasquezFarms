const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(process.env.DATABASE_URL)

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});

db.on('error', function (err) {
  console.log(`MongoDb error: ${err}`);
});