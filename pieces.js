// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

for (let i = 0; i < pieces.length; i++) {

    // Création des balises
    const article = pieces[i];

    // Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");

    // Création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");

    // Création des balises
    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";



    // On rattache la balise article à la section Fiches
    sectionFiches.appendChild(pieceElement);

    // On rattache l'image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibiliteElement);
}

    // Gestion des boutons
    const boutonTrier = document.querySelector(".btn-trier");
    boutonTrier.addEventListener("click", function () {
        const piecesOrdonnees = Array.from(pieces);
        piecesOrdonnees.sort(function (a, b) {
            return a.prix - b.prix;
        });
        console.log(piecesOrdonnees);

    });

    const boutonFiltrer = document.querySelector(".btn-filtrer");
    boutonFiltrer.addEventListener("click", function () {
        console.log('tutu')
        const piecesFiltrees = pieces.filter(function (piece) {
            return piece.prix <= 35;
        });
        console.log(piecesFiltrees);
    });

    const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");
    boutonFiltrerDescription.addEventListener("click", function () {
        const piecesDescription = pieces.filter(function (piece) {
            return piece.description;
        })
        console.log(piecesDescription);
    });

    const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
    boutonTrierDecroissant.addEventListener("click", function () {
        const piecesDecroissant = Array.from(pieces);
        piecesDecroissant.sort(function (a, b) {
            return b.prix - a.prix;
        });
        console.log(piecesDecroissant);
    })

// Boucle en decroissant car avec la méthode splice ca chamboule l'ordre du tableau cf schéma 
const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1)
    }
}
console.log(noms)

// Création de la liste
const abordablesElements = document.createElement('ul');
// Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(abordablesElements)




const nomsDisponibles = pieces.map(piece => piece.nom);
const prixDisponibles = pieces.map(piece => piece.prix);

for(let i = pieces.length -1 ; i >= 0; i--){
    console.log(pieces[i].disponibilite)
    if(!pieces[i].disponibilite){
        console.log('coucou')
        nomsDisponibles.splice(i,1);
        prixDisponibles.splice(i,1);
    }
}

const disponiblesElement = document.createElement('ul');

for(let i=0 ; i < nomsDisponibles.length ; i++){
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
    disponiblesElement.appendChild(nomElement);
}

document.querySelector('.disponibles').appendChild(disponiblesElement);




// Autre méthode 
// Filtrer les pièces disponibles
// const piecesDisponibles = pieces.filter(piece => piece.disponibilite === true);

// // Extraire les noms et les prix des pièces disponibles
// const nomsDisponibles = piecesDisponibles.map(piece => piece.nom);
// const prixDisponibles = piecesDisponibles.map(piece => piece.prix);

// console.log(piecesDisponibles)

// // Créer la liste des éléments disponibles
// const disponiblesElement = document.createElement('ul');

// // Ajouter chaque nom et prix disponibles à la liste
// for(let i = 0; i < nomsDisponibles.length; i++) {
//     const nomElement = document.createElement('li');
//     nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
//     disponiblesElement.appendChild(nomElement);
// }

// // Ajouter la liste à l'élément avec la classe '.disponibles'
// document.querySelector('.disponibles').appendChild(disponiblesElement);