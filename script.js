document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const targetPage = document.getElementById(targetId);

            // Remove the 'active' class from all pages
            pages.forEach(page => page.classList.remove('active'));

            // Add the 'active' class to the target page
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Smooth scroll to the target section
            targetPage.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

     // Contact Section - Form submission
     const contactForm = document.querySelector('.contact-form'); 
     if (contactForm) {
         contactForm.addEventListener('submit', function(event) {
             event.preventDefault();
             // Get form data
             const formData = new FormData(contactForm);
             const data = {
                 from_name: formData.get('name'),
                 email_id: formData.get('email'),
                 massege: formData.get('massege'),
                 number: formData.get('number')
             };
             // Send email using EmailJS
             emailjs.send('service_hegn9hm','template_hr53fk9',data)
                 .then(function(response) {
                     alert('Message sent successfully!');
                     contactForm.reset();
                 }, function(error) {
                     if (error.status === 400) {
                         alert('Bad Request. Please E-Mail Directly to  ss8284996@gmail.com');
                     } else if (error.status === 401) {
                        alert('Unauthorized. Please E-Mail Directly to  ss8284996@gmail.com.com');
                    } else if (error.status === 403) {
                        alert('Forbidden.Please E-Mail Directly to  ss8284996@gmail.com');
                    } else if (error.status === 404) {
                        alert('Service not found.Please E-Mail Directly to  ss8284996@gmail.com');
                    } else {
                        alert('Failed to send the message. Please try again.');
                    }
                });
        });
    } else {
        console.error('Contact form not found');
    }


 