const contactForm = document.querySelector('.contact-form');
// const sendBtn = document.getElementById('sendBtn');

contactForm.addEventListener('submit', async (e) => {
	try {
		e.preventDefault();

		const email = document.getElementById('clientEmail').value;
		const subject = document.getElementById('clientSubject').value;
		const message = document.getElementById('clientMessage').value;

		let successMsg = document.getElementById('successMsg');
		const errorMsg = document.getElementById('errorMsg');

		if (!email || !subject || !message) {
			errorMsg.textContent = 'Input fields cannot be empty';
		}
		email.toString();
		subject.toString();
		message.toString();

		console.log(email, subject, message);
		const data = {
			email: email,
			subject: subject,
			message: message,
		};

		const res = await axios.post('/message', data);
		console.log(res.data.message);

		successMsg.textContent = res.data.message;
	} catch (err) {
		console.log(err);
	}
});
