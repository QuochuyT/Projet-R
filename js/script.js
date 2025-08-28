// On attend que tout le contenu HTML soit chargé avant d'exécuter le script
document.addEventListener("DOMContentLoaded", function () {

    
    /**
     * =====================
     * 1. Animation fade-in au scroll
     * =====================
     */

    // On sélectionne tous les éléments qui doivent apparaître en fondu (fade-in)
    const faders = document.querySelectorAll('.fade-in');

    // Options de l'observateur IntersectionObserver :
    // - threshold: 0.2 → déclenche l’animation quand 20% de l’élément est visible
    // - rootMargin: marge autour de la zone de visualisation (ici, déclenche un peu avant)
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    // Création de l'observateur pour détecter si un élément est visible à l’écran
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si l’élément est visible
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // On ajoute la classe qui déclenche l’animation CSS
                observer.unobserve(entry.target); // On arrête d'observer cet élément (évite répétition)
            }
        });
    }, observerOptions);

    // On applique l'observateur sur chaque élément avec .fade-in
    faders.forEach(el => appearOnScroll.observe(el));


    /**
     * =====================
     * 2. Animation des cartes témoignages
     * =====================
     */

    // Sélectionne toutes les cartes de témoignages
    const testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach((card, index) => {
        // Décale légèrement chaque carte pour créer un effet "staggered"
        card.style.transitionDelay = `${index * 0.2}s`;
        // On observe chaque carte pour déclencher l’animation quand elle est visible
        appearOnScroll.observe(card);
    });

       /**
     * =====================
     * 3. Mise à jour de l'année dans le footer
     * =====================
     */
    // Footer année actuelle
    const yearSpan = document.getElementById("year");
    if(yearSpan) yearSpan.textContent = new Date().getFullYear(); // Année actuelle


    /**
     * =====================
     * 4. Boutons scroll
     * =====================
     */
    // Sélectionne tous les boutons d’envoi (ou autres) qui doivent scroller vers une section précise
    document.querySelectorAll('.btn-submit').forEach(btn => {
        btn.addEventListener('click', (e) => { 
            e.preventDefault(); // Empêche l'action par défaut (comme envoyer un formulaire)
             // Fait défiler la page vers la section .prestations en douceur
            document.querySelector('.prestations').scrollIntoView({behavior: 'smooth'});
        });
    });

    let lastScrollTop = 0;
    const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY;
            
        // Ajouter une ombre dès qu’on scrolle un peu
        if (scrollTop > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Vérifier sens du scroll
        if (scrollTop > lastScrollTop) {
        // Descente → cacher la navbar
            navbar.classList.add("hide");
        } else {
            // Montée → afficher la navbar
            navbar.classList.remove("hide");
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // éviter valeurs négatives
        }); 
    
    /**    window.addEventListener("scroll", function () {
            let scrollTop = window.scrollY;

        if (scrollTop > lastScrollTop) {
        // On descend
            navbar.classList.add("down");
            navbar.classList.remove("up");
        } else {
        // On remonte
            navbar.classList.add("up");
            navbar.classList.remove("down");
        }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // sécurité
}); */
    

});
