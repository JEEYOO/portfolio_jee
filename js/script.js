// Select all navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    // Add a click event listener to each link
    anchor.addEventListener('click', function (e) {
        // Prevent the default jump behavior
        e.preventDefault();

        // Get the target section's ID from the href attribute (e.g., "#about")
        const targetId = this.getAttribute('href');

        // Find the target section element
        const targetSection = document.querySelector(targetId);

        // Check if the target section exists
        if (targetSection) {
            // Smoothly scroll to the target section
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});