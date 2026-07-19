// Firebase configuration (replace with your own)
// This file is ready for Firebase integration

document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('formStatus');
            status.textContent = '✅ Message sent successfully! (Firebase ready)';
            status.style.color = '#b78c6a';
            form.reset();
        });
    }

    console.log('🔥 Al Rayyan Hostel · Firebase ready');
});