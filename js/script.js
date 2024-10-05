/*========== menu icon navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*========== scroll sections active link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });


/*========== sticky navbar ==========*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);


/*========== remove menu icon navbar when click navbar link (scroll) ==========*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};


/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});


/*========== dark light mode ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};


/*========== scroll reveal ==========*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });


/*========== whatsapp message ==========*/
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please give a valid Contact Number");
        return;
    }
    
    const encodedMessage = encodeURIComponent(`I'm ${name}\nContact Number: ${mobile}\n\nSir\n\t${message}`);
    
    const phoneNumber = '+919835418245';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
    document.getElementById('contact-form').reset();
}


document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');
             
    music.play().catch(() => {
        document.body.addEventListener('click', () => {
            music.play();
        });
    });
});

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('You cannot do that as this site has robust security features');
});

// Disable keyboard shortcuts (Ctrl+P, Ctrl+S, Ctrl+Shift+I, etc.)
document.addEventListener('keydown', function(e) {
    // Disable F12 (Developer Tools)
    if (e.key === "F12") {
        e.preventDefault();
    }

    // Disable Ctrl+Shift+I / Ctrl+Shift+C (Inspect Elements)
    if ((e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "C")) || 
        (e.ctrlKey && e.key === "U")) { // Disable Ctrl+U (View Source)
        e.preventDefault();
    }

    // Disable Ctrl+S (Save Page) and Ctrl+P (Print Page)
    if (e.ctrlKey && (e.key === "S" || e.key === "P")) {
        e.preventDefault();
    }
});

// Disable screenshot (This is not foolproof)
document.addEventListener('keydown', function(e) {
    // Disable PrintScreen button
    if (e.key === "PrintScreen") {
        alert("You can't take Screenshots in this site");
        e.preventDefault();
    }
});
