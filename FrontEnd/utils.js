//Fonction pour créer les cartes présentant les travaux

export function CreateCard (card) {
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
