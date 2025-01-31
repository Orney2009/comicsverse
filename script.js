let currentIndex = 0;
const images = document.querySelectorAll(".carousel-images img");
const totalImages = images.length;

function showSlide(index) {
    // Si on dépasse le nombre total d'images, recommence depuis la première
    if (index >= totalImages) {
        currentIndex = 0;
    } 
    // Si on revient avant la première image, passe à la dernière
    else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }

    // Applique la transformation pour décaler les images
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
