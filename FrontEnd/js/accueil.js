import {CreateCard, Filtered} from './utils.js';

//Récupération des données sur API works

const reponse = await fetch("http://localhost:5678/api/works/");
const productsArray = await reponse.json();


// Récupération des informations sur les catégories des travaux 

const filters = await fetch("http://localhost:5678/api/categories/")
.then(filters => filters.json());

//Fonction pour sauvegarder les filtres
function SaveFilter(cat){
    localStorage.setItem("filtre", cat);
};

let filtre = "";

//Mise en forme des liens 

const linksIn = document.getElementById("login");
        linksIn.style.color = "black";
        linksIn.style.textDecoration = "none";


const linksOut = document.getElementById("logout");
    linksOut.addEventListener('click', function(e){
        sessionStorage.removeItem("token");
    })
        linksOut.style.color = "black";
        linksOut.style.textDecoration = "none";

// Condition créée pour aider au filtrage des catégories

if (localStorage.getItem("filtre")){
    let readFiltre = localStorage.getItem("filtre");
    for( let i = 0; i < productsArray.length; i++){
        if(productsArray[i].category.name === readFiltre){
            CreateCard(productsArray[i]);
        };
    };
} else { for(let product of productsArray) {
    CreateCard(product);
}};
//Mise en forme des boutons de filtre

const styleBoutons = document.getElementsByClassName("btn-style");
 for(let i = 0; i < styleBoutons.length; i++){
    styleBoutons[i].style.color = "#1D6154";
    styleBoutons[i].style.backgroundColor = "white";
    styleBoutons[i].style.margin = "2em", "auto";
    styleBoutons[i].style.padding = "1em";
    styleBoutons[i].style.width = "180px";
    styleBoutons[i].style.justifyContent = "center";
    styleBoutons[i].style.border = "solid", "#1D6154", "5px";
    
    /*styleBoutons[i].addEventListener("mouseover", function(){
        styleBoutons[i].style.backgroundColor = "#1D6154";
        styleBoutons[i].style.color = "white";
    });*/

 };


//Fonctionnalité et mise en forme du bouton "Tous"

const boutonTous = document.getElementById("btn-tous");
            
    boutonTous.addEventListener("click", function(e) {
        e.preventDefault(),
            boutonTous.style.backgroundColor = "#1D6154";
            boutonTous.style.color = "white";

            boutonObjets.style.backgroundColor = "white";
            boutonObjets.style.color = "#1D6154";

            boutonAppart.style.backgroundColor = "white";
            boutonAppart.style.color = "#1D6154";

            boutonRestaurants.style.backgroundColor = "white";
            boutonRestaurants.style.color = "#1D6154";

        localStorage.removeItem("filtre");
        Filtered("", productsArray);
});
    boutonTous.addEventListener("mouseover", function(){
        boutonTous.style.backgroundColor = "#1D6154";
        boutonTous.style.color = "white";
    })

    boutonTous.addEventListener("mouseover", function(){
        boutonTous.style.backgroundColor = "#1D6154";
        boutonTous.style.color = "white";
        boutonObjets.style.backgroundColor = "white";
        boutonObjets.style.color = "#1D6154";
        boutonAppart.style.backgroundColor = "white";
        boutonAppart.style.color = "#1D6154";
        boutonRestaurants.style.backgroundColor = "white";
        boutonRestaurants.style.color = "#1D6154";
    })
//Fonctionnalité du bouton "Objets"


const boutonObjets = document.getElementById("btn-objets");

    boutonObjets.addEventListener("click", function(e){
        e.preventDefault();
   
            boutonObjets.style.backgroundColor = "#1D6154";
            boutonObjets.style.color = "white";
        
            boutonTous.style.backgroundColor = "white";
            boutonTous.style.color = "#1D6154";
            boutonTous.style.border = "solid", "#1D6154", "5px";

            boutonAppart.style.backgroundColor= "white";
            boutonAppart.style.color = "#1D6154";
        
            boutonRestaurants.style.backgroundColor = "white";
            boutonRestaurants.style.color = "#1D6154";

    Filtered("Objets", productsArray);
});

    boutonObjets.addEventListener("mouseover", function(){
        boutonObjets.style.backgroundColor = "#1D6154";
        boutonObjets.style.color = "white";
        boutonTous.style.backgroundColor = "white";
        boutonTous.style.color = "#1D6154";
        boutonAppart.style.backgroundColor = "white";
        boutonAppart.style.color = "#1D6154";
        boutonRestaurants.style.backgroundColor = "white";
        boutonRestaurants.style.color = "#1D6154";
})
    
//Fonctionnalité du bouton "Appartements"

const boutonAppart = document.getElementById("btn-appart");

    boutonAppart.addEventListener("click", function (e) {
        e.preventDefault();

            boutonAppart.style.backgroundColor = "#1D6154";
            boutonAppart.style.color = "white";

            boutonObjets.style.backgroundColor = "white";
            boutonObjets.style.color = "#1D6154";
        
            boutonTous.style.backgroundColor = "white";
            boutonTous.style.color = "#1D6154";

            boutonRestaurants.style.backgroundColor = "white";
            boutonRestaurants.style.color = "#1D6154";
       

    Filtered("Appartements", productsArray);
});

    boutonAppart.addEventListener("mouseover", function(){
        boutonAppart.style.backgroundColor = "#1D6154";
        boutonAppart.style.color = "white";
        boutonTous.style.backgroundColor = "white";
        boutonTous.style.color = "#1D6154";
        boutonObjets.style.backgroundColor = "white";
        boutonObjets.style.color = "#1D6154";
        boutonRestaurants.style.backgroundColor = "white";
        boutonRestaurants.style.color = "#1D6154";
})
const boutonRestaurants = document.getElementById("btn-restaurants");

    boutonRestaurants.addEventListener("click", function (e) {
        e.preventDefault();

            boutonTous.style.backgroundColor = "white";
            boutonTous.style.color = "#1D6154";

            boutonObjets.style.backgroundColor = "white";
            boutonObjets.style.color = "#1D6154";

            boutonAppart.style.backgroundColor = "white";
            boutonAppart.style.color = "#1D6154";
        
            boutonRestaurants.style.backgroundColor = "#1D6154";
            boutonRestaurants.style.color = "white";

    Filtered("Hotels & restaurants", productsArray);
});

    boutonRestaurants.addEventListener("mouseover", function(){
        boutonRestaurants.style.backgroundColor = "#1D6154";
        boutonRestaurants.style.color = "white";
        boutonTous.style.backgroundColor = "white";
        boutonTous.style.color = "#1D6154";
        boutonObjets.style.backgroundColor = "white";
        boutonObjets.style.color = "#1D6154";
        boutonAppart.style.backgroundColor = "white";
        boutonAppart.style.color = "#1D6154";
})



//Intégration du bouton de publication des changements

const boutonChangement = document.getElementById("change");
                boutonChangement.style.fontFamily = "work sans";
                boutonChangement.style.width = "216px";
                boutonChangement.style.backgroundColor = "white";
                boutonChangement.style.color = "black";
                boutonChangement.style.margin = "2em";
                boutonChangement.style.padding = "1em";

//Intégration de la modification du titre de la page d'accueil

const modTitle = document.querySelector("#modTitle");
                modTitle.style.display = "flex";

const titleDesign = document.querySelector(".titledesign");
                titleDesign.style.marginLeft ="5px";

//Intégration de la modification de l'image de la page d'accueil

const modImage = document.querySelector("#modImage");
                modImage.style.height = "40px";
                modImage.style.display = "flex";
                modImage.style.alignItems ="center";
                modImage.style.marginLeft= "55px";

const titleImage = document.querySelector(".icontitleimage");
                titleImage.style.margin = "5px";

//Intégration de la modification du titre de la page d'accueil

const modifGallery = document.querySelector("#titleGallery");
                modifGallery.style.display = "flex";
                modifGallery.style.justifyContent = "center";

const modGallery = document.querySelector("#modGallery");
                modGallery.style.display = "flex";
                modGallery.style.width = "150px";
                modGallery.style.margin = "10px", "0", "0","15px";

const modifTitle = document.querySelector(".icontitleproject");
                modifTitle.style.marginLeft = "5px";



//Intégration de l'encadré édition présent après login

const edition = document.getElementById("edition");
            edition.style.height = "60px";
            edition.style.backgroundColor = "black";
            edition.style.color = "white";
            edition.style.fontFamily = "work sans";
            edition.style.display = "flex";

const editionMod = document.getElementById("mode");
            editionMod.style.width = "100%";
            editionMod.style.display = "flex";
            editionMod.style.justifyContent = "center";
            editionMod.style.alignItems = "center";

const editionIcon = document.querySelector(".editSquare");
            editionIcon.style.paddingRight = "10px";
            editionIcon.style.fontSize = "16px";

const editionText = document.querySelector(".icontitle");
            editionText.style.fontSize = "16px";
            editionText.style.margin = "none";

//Condition d'apparition des outils de modification

let userLoggedIn = sessionStorage.getItem("token");
    if(userLoggedIn == null){
        edition.style.display = "none";
        linksOut.style.display = "none";
        modTitle.style.display ="none";
        modImage.style.display = "none";
        modGallery.style.display ="none";
    } else {
        let btnfilters = document.getElementById("ens-btn");
        btnfilters.style.display = "none";
        linksIn.style.display = "none";
    };