let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

document.addEventListener('scroll', () => {
    const header = document.querySelector('header');

    if(window.scrollY > 0) {
        header.classList.add('scrolled');
    }else {
        header.classList.remove('scrolled');
    }
})