document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links (main and sub-menu)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Main "Experience" link (toggle sub-menu only on desktop)
            if (this.classList.contains('main-experience-link') && window.innerWidth > 768) {
                e.preventDefault(); // Prevent default scroll
                const subMenu = this.nextElementSibling; // Get ul.experience-sub-menu
                if (subMenu) {
                    subMenu.classList.toggle('show'); // Toggle 'show' class to display/hide sub-menu

                    // Close other open sub-menus (optional)
                    document.querySelectorAll('.experience-sub-menu.show').forEach(otherSubMenu => {
                        if (otherSubMenu !== subMenu) {
                            otherSubMenu.classList.remove('show');
                        }
                    });
                }
            } 
            // Actual section links (About Me, Contact, Experience sub-menu items)
            else {
                // Perform smooth scroll for sub-menu items and other main links
                e.preventDefault(); 
                
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // If the clicked link is not a sub-menu item (e.g., About Me, Contact),
                // close the experience sub-menu if it's open on desktop
                if (!this.closest('.experience-sub-menu')) {
                    const experienceSubMenu = document.querySelector('.experience-sub-menu');
                    if (experienceSubMenu && experienceSubMenu.classList.contains('show') && window.innerWidth > 768) {
                        experienceSubMenu.classList.remove('show');
                    }
                }
            }
        });
    });

    // Close experience sub-menu when clicking outside on desktop
    window.addEventListener('click', function(event) {
        const sidebarNav = document.querySelector('.sidebar-nav');
        const experienceSubMenu = document.querySelector('.experience-sub-menu');
        const mainExperienceLink = document.querySelector('.main-experience-link');

        // If the click target is not the main experience link or inside the sub-menu,
        // and the sub-menu is open, and it's desktop
        if (window.innerWidth > 768 && experienceSubMenu && experienceSubMenu.classList.contains('show')) {
            if (!mainExperienceLink.contains(event.target) && !experienceSubMenu.contains(event.target)) {
                experienceSubMenu.classList.remove('show');
            }
        }
    });

    // Close sub-menu on window resize (especially for mobile/desktop transition)
    window.addEventListener('resize', function() {
        const experienceSubMenu = document.querySelector('.experience-sub-menu');
        if (experienceSubMenu) {
            experienceSubMenu.classList.remove('show');
        }
    });
});

// Project Carousel JavaScript logic removed as it's now CSS-driven.