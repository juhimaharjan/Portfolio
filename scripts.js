document.addEventListener('DOMContentLoaded', function() {
    const logoContainer = document.querySelector('.logo-container');
    const logo = document.getElementById('logo');
    const navBar = document.querySelector('.nav-bar');
    
    // Check if we're on myfarm.html
    if (window.location.pathname === '/myfarm.html' || window.location.pathname === '/nutrient-deficiencies-in-wheat.html' || window.location.pathname === '/analyzing-acuity.html') {
        // Skip animation
        logoContainer.classList.add('sticky');
        logo.classList.add('shrunk-logo');
        navBar.classList.add('show');
    } else {
        // Animation for pages other than myfarm.html
        document.addEventListener('scroll', function() {
            const doodles = document.querySelectorAll('.doodle');
            const scrollPosition = window.scrollY;

            if (scrollPosition > 100) {
                logo.style.width = '125px'; // Enlarge the logo
                doodles.forEach(doodle => {
                    doodle.classList.add('dispersed'); // Disperse doodles to the sides and fade out
                });
            } else {
                logo.style.width = '175px'; // Default size
                doodles.forEach(doodle => {
                    doodle.classList.remove('dispersed'); // Reset doodles
                });
            }

            if (scrollPosition > 300) {
                logoContainer.classList.add('sticky'); // Stick the logo to the top
                logo.classList.add('shrunk-logo'); // Shrink the logo at the top
                navBar.classList.add('show'); // Show the navigation bar
                doodles.forEach(doodle => {
                    doodle.classList.add('hidden'); // Hide doodles (they should already be faded out)
                });
            } else {
                logoContainer.classList.remove('sticky');
                logo.classList.remove('shrunk-logo');
                navBar.classList.remove('show'); // Hide the navigation bar
                doodles.forEach(doodle => {
                    doodle.classList.remove('hidden'); // Show doodles
                });
            }
        });
    }
});
