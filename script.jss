/* =====================================================
   SUSHIL KAMI PORTFOLIO
   ===================================================== */


/* ================= NAVBAR ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* ================= MOBILE MENU ================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const icon = menuButton.querySelector("i");

    if (navLinks.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu when link clicked */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navItems.forEach(item => {

        item.classList.remove("active");

        if (item.getAttribute("href") === `#${currentSection}`) {
            item.classList.add("active");
        }

    });

});


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .project-card, .timeline-item, .contact-form"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", event => {

    event.preventDefault();

    formMessage.textContent =
        "Thanks! Your message form is ready to be connected to an email service.";

    contactForm.reset();

});


/* ================= CURRENT YEAR ================= */

document.getElementById("year").textContent =
    new Date().getFullYear();


/* ================= HERO PARALLAX ================= */

const heroVisual = document.querySelector(".hero-visual");

if (heroVisual && window.innerWidth > 900) {

    document.addEventListener("mousemove", event => {

        const x = (window.innerWidth / 2 - event.clientX) / 80;
        const y = (window.innerHeight / 2 - event.clientY) / 80;

        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    });

}
