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
function toggleNav(btn) {
    const navFlex = btn.closest('.nav-flex');
    const links = navFlex.querySelector('.nav-links');
    btn.classList.toggle('open');
    links.classList.toggle('open');
}

// Close the mobile menu automatically when a nav link is tapped
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const links = link.closest('.nav-links');
        const toggle = link.closest('.nav-flex')?.querySelector('.nav-toggle');
        links.classList.remove('open');
        toggle?.classList.remove('open');
    });
});

// ========== Form Handling ==========
// Contact form will be handled in contact.html

console.log('🏨 Al Rayyan Girls Hostel Website Loaded!');
console.log('📍 Westridge Campus, Rawalpindi');
console.log('📞 +92 312 5303149');