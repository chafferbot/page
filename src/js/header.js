document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOpenButton = document.querySelector('.mobile-menu-open-btn');

    if (mobileMenu && mobileMenuOpenButton) {
        console.log('Кнопка знайдена!');
        mobileMenuOpenButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('is-open');
        });
    } else {
        console.error('Елементів немає!');
    }
});
