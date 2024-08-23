document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('a[href="#contact"]');
    contactLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const contactPosition = contactSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: contactPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});