// Garantir que o menubar expansível
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('change');
        nav.classList.toggle('show');
    });
});