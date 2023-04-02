const reponse = await fetch("http://localhost:5678/api/works/");
const photos = await reponse.json();

console.log(photos);

for(let i = 0; i < photos.length; i++) {
    const figure = photos[i];
    const sectionPortfolio = document.querySelector("#portfolio");
    const travailElement = document.querySelector(".gallery");
    const photoElement = document.createElement("figure");

    const imageElement = document.createElement("img");
    imageElement.src = figure.image;

    const nomElement = document.createElement("figcaption");
    nomElement.innerText = figure.nom;


    sectionPortfolio.appendChild(photoElement)
    photoElement.appendChild(imageElement);
    photoElement.appendChild(nomElement);

};
