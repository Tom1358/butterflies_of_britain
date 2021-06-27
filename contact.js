function sendMail(contactForm) {
    emailjs.send('gmail', 'template_1e3ugzs', {
        "from_name": contact.name.value,
        "from_email": contact.emailaddress.value,
        "information_request": contact.information.value,
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