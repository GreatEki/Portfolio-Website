const mongoose = require('mongoose');

const DBConnnect = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
		});

		console.log(`Database Connected: ${conn.connection.host}`);
	} catch (err) {
		console.log(`Database connection Error: ${err.message}`);
	}
};

module.exports = DBConnnect;
