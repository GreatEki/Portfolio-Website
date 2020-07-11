const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.get('/', (req, res) => {
	res.sendFile('index');
});

router.post('/message', async (req, res) => {
	try {
		const { email, subject, message } = req.body;

		const clientMsg = new Message({
			email: email,
			subject: subject,
			message: message,
		});

		await Message.create(clientMsg);

		res.status(201).json({
			success: true,
			message: 'Message Sent Successfully',
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			message: 'Server Error',
			err: err.message,
		});
	}
});

module.exports = router;
