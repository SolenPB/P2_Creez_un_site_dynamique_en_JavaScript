const reponse = await fetch("http://localhost:5678/api/works/");
const productsArray = await reponse.json();

function SaveFilter(chat){
    localStorage.setItem("filtre", chat);
}






console.log(productsArray);

function CreateCard (chat) {
    const travailElement = document.querySelector(".gallery");
    const photoElement = document.createElement("figure");

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = chat.imageUrl;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = chat.title;


    travailElement.appendChild(photoElement);
    photoElement.appendChild(imageUrlElement);
    photoElement.appendChild(titleElement);

};

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


const filters = await fetch("http://localhost:5678/api/categories/")
.then(filters => filters.json());

console.log(filters);
let filtre = "";

const boutonTous = document.getElementById("btn-tous");
boutonTous.addEventListener("click", function() {
    localStorage.removeItem("filtre");
    location.reload();
});

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
