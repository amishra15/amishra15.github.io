// Adding smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Making the navigation bar sticky at the top of the page
window.addEventListener('scroll', () => {
    let navbar = document.querySelector('nav');
    let body = document.body;
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky");
        body.classList.add('sticky-nav-padding');
    } else {
        navbar.classList.remove("sticky");
        body.classList.remove('sticky-nav-padding');
    }
});

// Adding animations on scroll
document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('element-visible');
            }
        });
    }, {
        threshold: 0.1 // Adjust this value based on how much of the element should be visible before triggering
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});

// Highlight active menu item on scroll
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    let links = document.querySelectorAll('nav ul li a');
    let sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
            links.forEach(link => {
                link.classList.remove('active');
                if (section.getAttribute('id') === link.getAttribute('href').substring(1)) {
                    link.classList.add('active');
                }
            });
        }
    });
});
