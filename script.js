// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}

// Mobile services dropdown
const mobileServicesButton = document.getElementById('mobile-services-button');
const mobileServicesMenu = document.getElementById('mobile-services-menu');

if (mobileServicesButton && mobileServicesMenu) {
    mobileServicesButton.addEventListener('click', () => {
        mobileServicesMenu.classList.toggle('hidden');
    });
}

// FAQ Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const toggle = item.querySelector('.faq-toggle');
        const answer = item.querySelector('.faq-answer');
        const plusIcon = item.querySelector('.icon-plus');
        const xIcon = item.querySelector('.icon-x');

        if (toggle) {
            toggle.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').classList.add('hidden');
                        otherItem.querySelector('.icon-plus').classList.remove('hidden');
                        otherItem.querySelector('.icon-x').classList.add('hidden');
                    }
                });

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    answer.classList.add('hidden');
                    plusIcon.classList.remove('hidden');
                    xIcon.classList.add('hidden');
                } else {
                    item.classList.add('active');
                    answer.classList.remove('hidden');
                    plusIcon.classList.add('hidden');
                    xIcon.classList.remove('hidden');
                }
            });
        }
    });
});
