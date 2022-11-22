const express = require('express');
const cors = require('cors');
const db = require('./src/config/db');
const dotenv = require('dotenv');
const route = require('./src/routes')

const app = express();

db.connect();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const port = process.env.PORT || 5000;


// Route init
route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});

module.exports = app;