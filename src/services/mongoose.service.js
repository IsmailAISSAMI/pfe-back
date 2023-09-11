const mongoose = require('mongoose');
const { database } = require('../configs');

/**
 * Establishes a connection to the MongoDB database.
 */
exports.dbConnect = () => {
    const { url: uri } = database;

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connected to the database.");
    })
    .catch(err => {
        console.error("Couldn't connect to the database:", err);
        process.exit(1);
    });
}
