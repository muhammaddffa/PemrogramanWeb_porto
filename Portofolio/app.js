document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if (window.scrollY > 550) {
            document.querySelector('.navbar').classList.add('solid');
            document.querySelector('.back-to-top').classList.add('visible');
        } else {
            document.querySelector('.navbar').classList.remove('solid');
            document.querySelector('.back-to-top').classList.remove('visible');
        }
    });

    // Add smooth scrolling to all links
    document.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using JavaScript's scrollIntoView() method to add smooth page scroll
                // The behavior: 'smooth' option provides smooth scrolling
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            }
        });
    });
});
