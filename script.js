const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}
menuIcon.onscroll = () => {
    navLinks.classList.toggle('active');
}
window.onscroll= () => {
    navLinks.classList.remove('active');
}
