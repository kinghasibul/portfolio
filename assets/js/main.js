/*=============== MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle');


/* Menu show - hidden */
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    navToggle.classList.toggle('animate-toggle');
});


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');

    navToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu')
};

navLink.forEach((n) => n.addEventListener('click', linkAction));
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');

    this.scrollY >= 20 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav-menu a[href*=' + sectionId + ']');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix'
    },
    animation: {
        duration: 300
    },
});
/* Active work */
const linkWork = document.querySelectorAll('.work-item');

function activeWork() {
    linkWork.forEach((a) => {
        a.classList.remove('active-work');
    });

    this.classList.add('active-work');
};

linkWork.forEach((a) => a.addEventListener('click', activeWork));

