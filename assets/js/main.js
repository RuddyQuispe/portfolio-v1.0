/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    });
}
/*Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove('show__menu');
};
navLink.forEach(n => n.addEventListener('click', linkAction));


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header");
}

window.addEventListener('scroll', blurHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_vm1icds', 'template_4nkn026', '#contact-form', 'j_13BtZ6SguKGlacx')
        .then(() => {
            contactMessage.textContent = 'email sent successfully';
            setTimeout(() => { contactMessage.textContent = '' }, 5000);
            contactForm.reset();
        }, () => {
            contactMessage.textContent = 'email not sent (service error)';
            setTimeout(() => { contactMessage.textContent = '' }, 5000);
        })
}

contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionClass = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionClass.classList.add("active-link")
        } else {
            sectionClass.classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // animation repeat
});

sr.reveal('.home__data, .experience, .skills, .contact_container');
sr.reveal('.home__img', {delay: 600});
sr.reveal('.home__scroll', {delay: 800});

sr.reveal('.work__card, .services__card', {interval: 100});

sr.reveal('.about__content', {origin: 'right'});
sr.reveal('.about__img', {origin: 'left'});