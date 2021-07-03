window.onload = function() {
    
    //function for sending email
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // prevent immediately submitting to have 'sending' show in 'submit' button - source https://medium.com/weekly-webtips/emailjs-send-emails-directly-from-your-client-side-javascript-code-d85a6b23ff82

        form_submit.value = 'Sending...';

        let serviceID = 'default_service';
        let templateID = 'milestone_two';

        emailjs.sendForm(serviceID, templateID, document.querySelector('#contact-form')) // uses above values to fill in necessary variables
            .then(() => {
                form_submit.value = 'Send Email';
                alert('Sent!');
            }, (err) => {
                form_submit.value = 'Send Email';
                alert(JSON.stringify(err)); // returns error to debug if necessary
            }); return false; // prevents all information in form disappearing when sent - so user has reference to what they have sent
});

}
