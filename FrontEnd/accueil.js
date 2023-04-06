//Récupération des données sur API works

const reponse = await fetch("http://localhost:5678/api/works/");
const productsArray = await reponse.json();

// Récupération des informations sur les catégories des travaux 

const filters = await fetch("http://localhost:5678/api/categories/")
.then(filters => filters.json());

console.log(filters);
let filtre = "";

//Fonction pour faire appel aux filtres
function SaveFilter(chat){
    localStorage.setItem("filtre", chat);
}

console.log(productsArray);

//Fonction pour créer les cartes présentant les travaux

function CreateCard (card) {
    const travailElement = document.querySelector(".gallery");
    const photoElement = document.createElement("figure");

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = card.imageUrl;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = card.title;


    travailElement.appendChild(photoElement);
    photoElement.appendChild(imageUrlElement);
    photoElement.appendChild(titleElement);

};

// Condition créée pour aider au filtrage des catégories

if (localStorage.getItem("filtre")){
    let readFiltre = localStorage.getItem("filtre");
    console.log(readFiltre);
    for( let i = 0; i < productsArray.length; i++){
        if(productsArray[i].category.name === readFiltre){
            CreateCard(productsArray[i]);
        };
    };
} else { for(let product of productsArray) {
    CreateCard(product);
}};



//Fonctionnalité du bouton "Tous"

const boutonTous = document.getElementById("btn-tous");
boutonTous.addEventListener("click", function() {
    localStorage.removeItem("filtre");
    location.reload();
});

//Fonctionnalité du bouton "Objets"

const boutonObjets = document.getElementById("btn-objets");
boutonObjets.addEventListener("click", function(){
    const type = filters.map(filter => filter.name);
        for( let i = filters.length -1; i >= 0; i--){
            if(filters[i].name == "Objets"){
                filtre = type.splice(i,1);
                SaveFilter(filtre);
                location.reload();
            };
        };
});

//Fonctionnalité du bouton "Appartements"

const boutonAppart = document.getElementById("btn-appart");
boutonAppart.addEventListener("click", function () {
    const type = filters.map(filter => filter.name);
        for( let i = filters.length -1; i >= 0; i--){
            if(filters[i].name == "Appartements"){
                filtre = type.splice(i,1);
                SaveFilter(filtre);
                location.reload();
            };
        };
});

//Fonctionnalité du bouton "Hôtels & restaurants"

const boutonRestaurants = document.getElementById("btn-restaurants");
boutonRestaurants.addEventListener("click", function () {
    const type = filters.map(filter => filter.name);
        for(let i = filters.length -1; i >= 0; i--){
            if(filters[i].name == "Hotels & restaurants"){
                filtre = type.splice(i,1);
                SaveFilter(filtre);
                location.reload();
            };
        };
});

//Fonctionnalité authentification 

const boutonConnecter = document.getElementById("btn-connecter");
boutonConnecter.addEventListener("click");
