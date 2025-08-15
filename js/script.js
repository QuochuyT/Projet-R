document.addEventListener("DOMContentLoaded", function() {

    // Animation fade-in
    const faders = document.querySelectorAll('.fade-in');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    faders.forEach(el => appearOnScroll.observe(el));

    // Animation cards témoignages
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.2}s`;
        appearOnScroll.observe(card);
    });

    // Footer année actuelle
    const yearSpan = document.getElementById("year");
    if(yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Boutons scroll
    document.querySelectorAll('.btn-submit').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.prestations').scrollIntoView({behavior: 'smooth'});
        });
    });

});
