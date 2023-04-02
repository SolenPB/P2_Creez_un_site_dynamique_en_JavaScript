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

const boutonObjets = document.querySelector(".objets");
boutonObjets.addEventListener("click", function() {
    const photosFiltrees = photos.filter(function (photos) {
        return photos.objets
    });
});