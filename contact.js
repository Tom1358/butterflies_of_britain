function sendMail(contactForm) {
    emailjs.send('gmail', 'template_1e3ugzs', {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "information_request": contactForm.information.value,
    })
    .then(
        function(response) {
            console.log('Success!', response);
        }, 
        function(error) {
            console.log('Failed', error);
        }
    );
    return false;
}

console.log('working')