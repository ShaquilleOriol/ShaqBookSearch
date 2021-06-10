const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

// SET-UP EXPRESS APP
const APP = express();
const PORT = process.env.PORT || 3001;

// SET-UP DATA PARSING (MIDDLEWARE)
APP.use(express.urlencoded({ extended: true }));
APP.use(express.json());
// SET-UP STATIC ASSETS
if (process.env.NODE_ENV === 'production') {
    APP.use(express.static('client/build'));
}

// ROUTES
APP.use(routes);

// CONNECT TO DATABASE
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://googlebooks:books@cluster0.gd2at.mongodb.net/googlebooks?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);

// START SERVER LISTENING
APP.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`)
});