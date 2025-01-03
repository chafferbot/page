document.addEventListener('DOMContentLoaded', () => {
    // Логіка для меню "Favorites"
    const favoritesMenuItems = document.querySelectorAll('.nav-item .nav-link');

    if (favoritesMenuItems) {
        const currentPath = window.location.pathname;
        favoritesMenuItems.forEach(link => {
            const item = link.closest('.nav-item');
            item.classList.toggle(
                'active',
                currentPath.endsWith(link.getAttribute('href').substring(1))
            );
        });
    }

    // Логіка для бургер-меню
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuOpenButton = document.querySelector('.mobile-menu-open-btn');
    const mobileMenuCloseButton = document.querySelector('.mobile-menu-close-btn');

    if (mobileMenu && mobileMenuOpenButton) {
        // Відкриття бургер-меню
        mobileMenuOpenButton.addEventListener('click', () => {
            mobileMenu.classList.add('is-open');
        });

        // Закриття бургер-меню
        if (mobileMenuCloseButton) {
            mobileMenuCloseButton.addEventListener('click', () => {
                mobileMenu.classList.remove('is-open');
            });
        }

        // Закриття бургер-меню при натисканні на посилання
        mobileMenu.addEventListener('click', (event) => {
            if (event.target.classList.contains('mobile-nav-link')) {
                mobileMenu.classList.remove('is-open');
            }
        });
    }
});
