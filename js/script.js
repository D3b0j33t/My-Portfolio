/*========== Disable Right-Click (Context Menu) ==========*/
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    alert('You are not allowed to do so as this page has robust security');
});

/*========== Disable Keyboard Shortcuts ==========*/
document.addEventListener('keydown', function(e) {
    // Disable F12 (Developer Tools)
    if (e.code === "F12") {
        e.preventDefault();
        alert('Developer tools are disabled.');
    }

    // Disable Ctrl+Shift+I / Ctrl+Shift+C (Inspect Elements), Ctrl+U (View Source)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.code === "KeyI" || e.code === "KeyC")) {
        e.preventDefault();
        alert('Inspecting elements is disabled.');
    }

    // Disable Ctrl+S (Save Page), Ctrl+P (Print Page), Ctrl+U (View Source), Ctrl+C (Copy Source)
    if ((e.ctrlKey || e.metaKey) && (e.code === "KeyS" || e.code === "KeyP" || e.code === "KeyU" || e.code === "KeyC")) {
        e.preventDefault();
        alert('Copying, Saving, printing, and viewing source are disabled.');
    }

    // Disable PrintScreen
    if (e.key === "PrintScreen") {
        alert("Screenshot functionality is disabled.");
        preventScreenshot();
        e.preventDefault();
    }
});

/*========== Visual Disruption on PrintScreen ==========*/
function preventScreenshot() {
    // Create an overlay that disrupts the view for screenshots
    let overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0, 0, 0, 0.8)';
    overlay.style.zIndex = '9999';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.color = '#fff';
    overlay.style.fontSize = '24px';
    overlay.innerText = 'Screenshot disabled!';

    document.body.appendChild(overlay);

    // Remove the overlay after 3 seconds
    setTimeout(() => {
        document.body.removeChild(overlay);
    }, 3000);
}

// Call the watermark function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', addWatermark);

/*========== Menu Icon Toggle for Navbar ==========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*========== Scroll Sections Active Link ==========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Debounce function to improve scroll performance
let debounce = (func, delay) => {
    let timeout;
    return function() {
        let context = this, args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
};

window.onscroll = debounce(() => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /*========== Sticky Navbar ==========*/
    let header = document.querySelector('.header');
    header.classList.toggle('sticky', top > 100);

    /*========== Remove Menu Icon Navbar on Click (Scroll) ==========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}, 100); // Debouncing scroll to 100ms delay

/*========== Swiper Configuration ==========*/
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

/*========== Dark and Light Mode Toggle ==========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

/*========== Scroll Reveal Animations ==========*/
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

/*========== WhatsApp Message Functionality ==========*/
function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const message = document.getElementById('message').value;

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobile)) {
        alert("Please provide a valid contact number.");
        return;
    }
    
    const encodedMessage = encodeURIComponent(`\nRespected Sir,\n\t\tI'm ${name}. ${message}\n\nBest Regards,\n${name}\nContact Number: ${mobile}`);
    
    const phoneNumber = '+919835418245';  // Your WhatsApp number here
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp chat
    window.open(whatsappURL, '_blank');

    // Reset form
    document.getElementById('contact-form').reset();
}

/*========== Background Music Autoplay and Click Play ==========*/
document.addEventListener('DOMContentLoaded', function () {
    const music = document.getElementById('background-music');

    // Try to auto-play music
    music.play().catch(() => {
        // If autoplay fails, play on user interaction
        document.body.addEventListener('click', () => {
            music.play();
        });
    });
});
