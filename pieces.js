// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

// Fonction qui génère toute la page web
function genererPieces(pieces) {
    for (let i = 0; i < pieces.length; i++) {

        // Création d'une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");

        // Création de l'élément image
        const imageElement = document.createElement("img");
        // On accède à l'indice i de la liste pieces pour configurer la source de l'image
        imageElement.src = pieces[i].image;
        // On rattache l'image à pieceElement (la balise article)
        pieceElement.appendChild(imageElement)

        // Création de l'élément titre 
        const nomElement = document.createElement("h2");
        // On accède à l'indice i de la liste pieces pour le titre
        nomElement.innerText = pieces[i].nom;
        // On rattache h2 à pieceElement 
        pieceElement.appendChild(nomElement);

        // Création de l'élément prix
        const prixElement = document.createElement("prix")
        prixElement.innerText = pieces[i].prix;
        // On rattache prixElement à pieceElement
        pieceElement.appendChild(prixElement);

        const categorieElement = document.createElement("categorie")
        categorieElement.innexText = pieces[i].categorie;
        pieceElement.appendChild(categorieElement);

        // const prixElement = document.createElement("p");
        // prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

        // const categorieElement = document.createElement("p");
        // categorieElement.innerText = article.categorie ?? "(Aucune catégorie)";

        // const descriptionElement = document.createElement("p");
        // descriptionElement.innerText = article.description ?? "(Pas de description pour le moment)";

        // const disponibiliteElement = document.createElement("p");
        // disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";
    }
}
genererPieces(pieces);


// Ajout du listener pour trier les pièces par ordre de prix croissant
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    // Effacement de l'écran et regénération de la page
    document.querySelector(".fiches").innerHTML = '';
    genererPieces(piecesOrdonnees);
});

// Ajout du listener pour filtrer les pièces non abordables
const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

// const boutonFiltrerDescription = document.querySelector(".btn-filtrer-description");
// boutonFiltrerDescription.addEventListener("click", function () {
//     const piecesDescription = pieces.filter(function (piece) {
//         return piece.description;
//     })
//     console.log(piecesDescription);
// });

// const boutonTrierDecroissant = document.querySelector(".btn-trier-decroissant");
// boutonTrierDecroissant.addEventListener("click", function () {
//     const piecesDecroissant = Array.from(pieces);
//     piecesDecroissant.sort(function (a, b) {
//         return b.prix - a.prix;
//     });
//     console.log(piecesDecroissant);
// })

// Boucle en decroissant car avec la méthode splice ca chamboule l'ordre du tableau cf schéma 
// const noms = pieces.map(piece => piece.nom);
// for (let i = pieces.length - 1; i >= 0; i--) {
//     if (pieces[i].prix > 35) {
//         noms.splice(i, 1)
//     }
// }
// console.log(noms)

// // Création de la liste
// const abordablesElements = document.createElement('ul');
// // Ajout de chaque nom à la liste
// for (let i = 0; i < noms.length; i++) {
//     const nomElement = document.createElement('li');
//     nomElement.innerText = noms[i];
//     abordablesElements.appendChild(nomElement)
// }
// // Ajout de l'en-tête puis de la liste au bloc résultats filtres
// document.querySelector('.abordables')
//     .appendChild(abordablesElements)




// const nomsDisponibles = pieces.map(piece => piece.nom);
// const prixDisponibles = pieces.map(piece => piece.prix);

// for (let i = pieces.length - 1; i >= 0; i--) {
//     console.log(pieces[i].disponibilite)
//     if (!pieces[i].disponibilite) {
//         nomsDisponibles.splice(i, 1);
//         prixDisponibles.splice(i, 1);
//     }
// }

// const disponiblesElement = document.createElement('ul');

// for (let i = 0; i < nomsDisponibles.length; i++) {
//     const nomElement = document.createElement('li');
//     nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`;
//     disponiblesElement.appendChild(nomElement);
// }

// document.querySelector('.disponibles').appendChild(disponiblesElement);

