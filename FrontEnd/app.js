
const works = fetch("http://localhost:5678/api/works/")
.then (works => works.json());

const modal = document.getElementById('modal1');

const openModal = document.getElementById('js-modal');
openModal.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = document.getElementById('modal1');
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
});    

const closeModal = document.getElementById("closemodal"); 
    closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
});

function CreateCard(smallCard){
    const workElement = document.getElementById("modal1");
    const photoElement = document.createElement("figure");
    const imageUrlElement = document.createElement("img");
    imageUrlElement.src = card.imageUrl;

    workElement.appendChild(photoElement);
    photoElement.appendChild(imageUrlElement);
};

//Style des éléments du modal-wrapper
const titleModal = document.getElementById("titlemodal");
console.log(titleModal);
titleModal.style.fontFamily = "work sans";
titleModal.style.color = "red";

const buttonCloseModal = document.getElementById("closemodal");
console.log(buttonCloseModal);
buttonCloseModal.style.border = "red";
