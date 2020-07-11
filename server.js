const http = require('http');
const app = require('./app');

const dotenv = require('dotenv');
const path = require('path');

// create server
const server = http.createServer(app);

// Configure path to global variable folder
dotenv.config({ path: path.resolve(__dirname, './config/config.env') });

const PORT = process.env.PORT || 5050;

server.listen(PORT, () =>
	console.log(
		`Server running in ${process.env.MODE} environment on port: ${PORT}`
	)
);
