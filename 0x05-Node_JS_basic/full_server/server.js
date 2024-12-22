const router = require('./routes/index.js')
const express = require('express')
const app = express()
const port = 3000;

app.use('/', router)

app.listen(port, () => {
	console.log("Server is running")
});

module.exports = app;
