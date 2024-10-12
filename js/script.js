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
    
    const encodedMessage = encodeURIComponent(`\nRespected Sir,\n\t\tI'm ${name}. ${message}\n\nBest Regards,\n${name}\nContact Number: ${mobile}`);
    
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
        e.preventDefault();
        alert("Screenshot functionality is disabled.");
        preventScreenshot();
    }

    // Disable Windows + PrintScreen (for Windows)
    if (e.code === "PrintScreen" && (e.ctrlKey || e.metaKey || e.key === "MetaLeft" || e.key === "MetaRight")) {
        e.preventDefault();
        alert("Screenshots are disabled on this site.");
    }

    // Disable macOS screenshot shortcuts (Cmd + Shift + 4 or Cmd + Shift + 3)
    if (e.metaKey && e.shiftKey && (e.code === "Digit3" || e.code === "Digit4")) {
        e.preventDefault();
        alert("Screenshots are disabled on this site.");
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
