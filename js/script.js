document.addEventListener('DOMContentLoaded', function() {
    // Select all navigation links (main and sub-menu)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            
            // Check if it's the main "Experience" link (dropbtn)
            // On desktop (window width > 768px), it toggles the sub-menu.
            // On mobile, the sub-menu is always visible when nav is shown, so no special toggle.
            if (this.classList.contains('main-experience-link') && window.innerWidth > 768) {
                e.preventDefault(); // Prevent default scroll for main Experience link on desktop
                const subMenu = this.nextElementSibling; // Get the ul.experience-sub-menu
                if (subMenu) {
                    subMenu.classList.toggle('show'); // Toggle 'show' class to display/hide sub-menu

                    // Close other sub-menus if any (optional, not strictly needed with one sub-menu)
                    document.querySelectorAll('.experience-sub-menu.show').forEach(otherSubMenu => {
                        if (otherSubMenu !== subMenu) {
                            otherSubMenu.classList.remove('show');
                        }
                    });
                }
            } 
            // For actual section links (About Me, Contact, and sub-menu Experience items)
            else {
                // For sub-menu items and other main links, perform smooth scroll
                e.preventDefault(); 
                
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }

                // If the clicked link is NOT a sub-menu item (e.g., About Me, Contact), 
                // close the experience sub-menu on desktop if it's open.
                // Sub-menu items should NOT close the menu.
                if (!this.closest('.experience-sub-menu')) {
                    const experienceSubMenu = document.querySelector('.experience-sub-menu');
                    if (experienceSubMenu && experienceSubMenu.classList.contains('show') && window.innerWidth > 768) {
                        experienceSubMenu.classList.remove('show');
                    }
                }
            }
        });
    });

    // Close the experience sub-menu if the user clicks outside of it on desktop
    window.addEventListener('click', function(event) {
        const sidebarNav = document.querySelector('.sidebar-nav');
        const experienceSubMenu = document.querySelector('.experience-sub-menu');
        const mainExperienceLink = document.querySelector('.main-experience-link');

        // Check if the click is outside the sidebar navigation and its children, 
        // and the sub-menu is open, and it's on desktop.
        if (window.innerWidth > 768 && experienceSubMenu && experienceSubMenu.classList.contains('show')) {
            // If the click target is not the main experience link, nor within the sub-menu itself
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