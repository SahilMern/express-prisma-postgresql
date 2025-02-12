const express = require('express');
const app = express();
const port = 3000;
const dotenv = require('dotenv').config();

app.use(express.json());

// Require routes
const routes = require('./routes/index');
app.use(routes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
