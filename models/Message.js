const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
	email: {
		type: String,
		required: true,
	},

	subject: {
		type: String,
		required: true,
	},

	message: {
		type: String,
		required: true,
	},
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;