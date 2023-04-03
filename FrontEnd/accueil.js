const reponse = await fetch("http://localhost:5678/api/works/");
const photos = await reponse.json();

console.log(photos);

for(let i = 0; i < photos.length; i++) {
    const figure = photos[i];
    const travailElement = document.querySelector(".gallery");
    const photoElement = document.createElement("figure");

    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = figure.imageUrl;

    const titleElement = document.createElement("figcaption");
    titleElement.innerText = figure.title;


    travailElement.appendChild(photoElement)
    photoElement.appendChild(imageUrlElement);
    photoElement.appendChild(titleElement);

};

const reponseCategorie = await fetch("http://localhost:5678/api/categories/");
const categorie = await reponseCategorie.json();

console.log(categorie);

for (let objet of categorie) {
    console.log(objet.name);
};

const boutonObjets = document.querySelector("#btn-objets");
boutonObjets.addEventListener("click", function(){
    for(let objet of categorie){
        if(objet.name == "Objets"){
            return console.log (objet.name);
        };
    };
});
