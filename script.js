let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showSlide(index) {
    if (index >= totalImages) {
        currentIndex = 0;  // Retour à la première image si on dépasse la dernière
    } else if (index < 0) {
        currentIndex = totalImages - 1;  // Retour à la dernière image si on est avant la première
    } else {
        currentIndex = index;
    }
    document.querySelector(".carousel-images").style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Délai ajusté de 8 secondes pour un défilement automatique
setInterval(() => {
    nextSlide();
}, 8000);  // Le carrousel défile toutes les 8 secondes
