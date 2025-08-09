// Affiche automatiquement l'année en cours dans le footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();
});