window.onload = function() {

    

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        form_submit.value = 'Sending...';

        let serviceID = 'default_service';
        let templateID = 'milestone_two';

        emailjs.sendForm(serviceID, templateID, document.querySelector('#contact-form'))
            .then(() => {
                form_submit.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                form_submit.value = 'Send Email';
                alert(JSON.stringify(err));
            }); return false;
});

}
