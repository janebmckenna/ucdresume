function sendMail(contactForm){
    emailjs.send('gmail', 'CV-request', {
        'from_fname': contactForm.firstname.value,
        'from_lname': contactForm.lastname.value,
        'from_email': contactForm.emailaddress.value,
        'project_request': contactForm.projectsummary.value
    })
    .then(
        function(response){
            console.log('success - email sent', response);
        },
        function(error){
            console.log('failed - email not sent', error);
        }
    )
    return false;
}