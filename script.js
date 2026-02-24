// Script to handle interactive elements

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in-up class to sections for animation
    document.querySelectorAll('.section, .hero').forEach(section => {
        section.classList.add('fade-in-up');
        observer.observe(section);
    });

    console.log("Narren's Portfolio Loaded successfully!");
});

// Add these styles dynamically for the JS animations if not present in CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    .fade-in-up {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in-up.visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(styleSheet);
