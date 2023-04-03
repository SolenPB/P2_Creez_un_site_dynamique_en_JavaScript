const reponse = await fetch("http://localhost:5678/api/works/");
const productsArray = await reponse.json();

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

for(let product of productsArray) {
    CreateCard(product);
}

const reponseFilters = await fetch("http://localhost:5678/api/categories/");
const filters = await reponseFilters.json();

console.log(filters);

for (let filter of filters) {
    console.log(filter.name);
};

const boutonObjets = document.getElementById("btn-objets");
boutonObjets.addEventListener("click", function(){
    for(let filter of filters){
        if(filter.name == "Objets"){
            console.log (filter.name);
        };
    };
});
