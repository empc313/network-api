const express = require('express');
const db = require('./config/connection')
const mongoose = require('mongoose');
const routes = require('./routes')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extendted: true}));
app.use(express.json());
app.use(routes)


db.once('open', () => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
})
