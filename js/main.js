document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('menu-open');
        this.setAttribute('aria-expanded', 
            this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
        );
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mainNav.contains(event.target);
        
        if (!isClickInside && mainNav.classList.contains('menu-open')) {
            mainNav.classList.remove('menu-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close menu when window is resized to desktop size
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && mainNav.classList.contains('menu-open')) {
            mainNav.classList.remove('menu-open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
