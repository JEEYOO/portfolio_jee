document.addEventListener('DOMContentLoaded', function() {
    const mainExperienceLink = document.querySelector('.main-experience-link');
    const experienceSubMenu = document.querySelector('.experience-sub-menu');

    if (mainExperienceLink && experienceSubMenu) {
        mainExperienceLink.addEventListener('click', function(event) {
            // Prevent default link behavior (prevents page jump)
            event.preventDefault(); 
            // Toggle sub-menu visibility
            experienceSubMenu.classList.toggle('show');
        });
    }

    // --- Add mobile menu toggle functionality ---
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebarNav = document.querySelector('.sidebar-nav');

    if (menuToggle && sidebarNav) {
        menuToggle.addEventListener('click', function() {
            sidebarNav.classList.toggle('active'); // Toggle 'active' class
        });

        // Close menu when a navigation link is clicked (optional)
        // Exclude sub-menu links from closing the main menu
        const navLinks = document.querySelectorAll('.sidebar-nav ul li a:not(.main-experience-link)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                sidebarNav.classList.remove('active');
            });
        });
    }
});