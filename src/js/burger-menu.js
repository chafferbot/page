// Отримання елементів DOM
const mobileMenu = document.querySelector('.mobile-menu'); // Мобільне меню
const burgerButton = document.querySelector('.mobile-menu-open-btn'); // Бургер-кнопка
const closeButton = document.querySelector('.mobile-menu-close-btn'); // Кнопка закриття

// Відкрити мобільне меню
burgerButton.addEventListener('click', () => {
    mobileMenu.classList.add('is-open'); // Додаємо клас відкритого меню
});

// Закрити мобільне меню
closeButton.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open'); // Забираємо клас відкритого меню
});

// Закриття меню при кліку поза ним
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !burgerButton.contains(event.target)) {
        mobileMenu.classList.remove('is-open');
    }
});
