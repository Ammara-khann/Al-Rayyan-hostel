// ========== Smooth Scrolling ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// ========== Mobile Menu Toggle ==========
// (Add if needed)

// ========== Form Handling ==========
// Contact form will be handled in contact.html

console.log('🏨 Al Rayyan Girls Hostel Website Loaded!');
console.log('📍 Westridge Campus, Rawalpindi');
console.log('📞 +92 300 1234567');