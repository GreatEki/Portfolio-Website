const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.sendFile('index');
});

router.post('/message', (req, res) => {
	console.log('Data received from client', req.body);
	res.json({ message: 'Message was sent successfully' });
});

module.exports = router;
