const contactForm = document.querySelector('.contact-form');
// const sendBtn = document.getElementById('sendBtn');

contactForm.addEventListener('submit', async (e) => {
	try {
		e.preventDefault();

		const email = document.getElementById('clientEmail').value;
		const subject = document.getElementById('clientSubject').value;
		const message = document.getElementById('clientMessage').value;

		let successMsg = document.getElementById('successMsg');
		let errorMsg = document.getElementById('errorMsg');

		// const emailRegX = /([a-z0-9]+)@([a-z]+).([a-z]{2,4})$/;

		if (!email || !subject || !message) {
			errorMsg.textContent = 'Input fields cannot be empty';
		} else {
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
			// This clears the pervious error msgs.
			errorMsg.textContent = '';
			successMsg.textContent = res.data.message;
			setTimeout(() => {
				successMsg.textContent = '';
				contactForm.reset();
				// return false; used this to prevent page from refreshing after resetting form
			}, 3000);
		}
	} catch (err) {
		console.log(err);
	}
});
