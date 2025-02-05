const API_KEY = "831dae0061968bd12b2cc9f33612e1b91f837929"; // Remplace par ta clé API
const API_URL = "https://comicvine.gamespot.com/api/issues/?api_key=" + API_KEY + "&format=json&sort=cover_date:desc";

async function fetchComics(category) {
    try {
        let response = await fetch(API_URL);
        let data = await response.json();
        let comics = data.results;

        // Filtrer les comics en fonction de la catégorie sélectionnée
        let filteredComics = comics.filter(comic => {
            return comic.publisher && comic.publisher.name.toLowerCase().includes(category.toLowerCase());
        });

        displayComics(filteredComics);
    } catch (error) {
        console.error("Erreur lors du chargement des comics :", error);
    }
}

function displayComics(comics) {
    let comicsGrid = document.getElementById("comics-grid");
    comicsGrid.innerHTML = "";

    comics.forEach(comic => {
        let comicCard = `
            <div class="comic-card">
                <img src="${comic.image.original_url}" alt="${comic.name}">
                <h3>${comic.name}</h3>
                <p>Sortie : ${comic.cover_date}</p>
                <a href="${generateAffiliateLink(comic.name)}" target="_blank" class="buy-btn">Acheter sur Amazon</a>
            </div>
        `;
        comicsGrid.innerHTML += comicCard;
    });
}

// Générer le lien Amazon
function generateAffiliateLink(title) {
    let baseUrl = "https://www.amazon.com/s?k=";
    let affiliateTag = "&tag=comicsverse9-20"; // Remplace par ton ID Amazon
    let formattedTitle = encodeURIComponent(title);
    return baseUrl + formattedTitle + affiliateTag;
}

// Charger la catégorie Marvel par défaut au démarrage
fetchComics("Marvel");
