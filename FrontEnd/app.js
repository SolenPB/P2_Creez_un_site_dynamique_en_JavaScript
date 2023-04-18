fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
}}); 

const modal = document.getElementById('modal1');

const openModal = document.getElementById('js-modal');
openModal.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = document.getElementById('modal1');
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
        buttonPreModal.style.visibility = "hidden";
        preModalTitle.style.display = "none";
        validation.style.display = "none";
        addPhoto.style.display = "none";
        addForm.style.display = "none";

});    

const closeModal = document.getElementById("closemodal"); 
    closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
});

//Importation et création de l'emplacement des travaux dans la modale

function CreateSmallCard(smallCard){
    const galleryModal = document.getElementById("gallery-modal");
    const photoModal = document.createElement("figure");
    photoModal.style.width = "85px";
    photoModal.style.height = "140px"
    photoModal.style.marginRight = "8px";

    const pictureModal = document.createElement("div");
    pictureModal.setAttribute("id", "picture");
    pictureModal.style.height = "120px";

    const deletePicture = document.createElement("i");
    deletePicture.setAttribute("class", "fa-regular fa-trash-can");
    deletePicture.style.display = "flex";
    deletePicture.style.backgroundColor = "black";
    deletePicture.style.color = "white";
    deletePicture.style.width = "17px";
    deletePicture.style.height = "17px";
    deletePicture.style.justifyContent = "center";
    deletePicture.style.position = "relative";
    deletePicture.style.top = "10px";
    deletePicture.style.left = "60px";
    deletePicture.style.paddingTop = "2px";
    deletePicture.style.paddingRight = "2px";

    const movePicture = document.createElement("i");
    movePicture.setAttribute("class", "fa-solid fa-up-down-left-right");
    movePicture.style.display = "none";
    movePicture.style.justifyContent = "center";
    movePicture.style.alignItems = "center";
    movePicture.style.backgroundColor = "black";
    movePicture.style.color = "white";
    movePicture.style.position = "relative";
    movePicture.style.width = "17px";
    movePicture.style.height = "17px";
    movePicture.style.bottom = "8px";
    movePicture.style.left = "35px";

    const imageUrlModal = document.createElement("img");
    imageUrlModal.src = smallCard.imageUrl;
    imageUrlModal.style.width = "85px";
    imageUrlModal.style.height = "120px";
    imageUrlModal.style.position = "absolute";
    imageUrlModal.addEventListener("mouseover", function (event){
        movePicture.style.display = "flex";
    });
    imageUrlModal.addEventListener("mouseout", function(event){
        movePicture.style.display = "none";
    });

    const titleImgModal = document.createElement("figcaption");
    titleImgModal.textContent = "Editer";
    titleImgModal.style.position = "relative";

    galleryModal.appendChild(photoModal);
    photoModal.appendChild(pictureModal);
    pictureModal.appendChild(imageUrlModal);
    photoModal.appendChild(titleImgModal);
    pictureModal.appendChild(deletePicture);
    pictureModal.appendChild(movePicture);

};    

//Style des éléments du modal-wrapper

const titleModal = document.getElementById("titlemodal");
titleModal.style.height = "30px";
titleModal.style.fontFamily = "work sans";
titleModal.style.fontWeight = "400";
titleModal.style.color = "black";

const buttonsModal = document.getElementById("btns-modal");
buttonsModal.style.width = "600px";
buttonsModal.style.display = "flex";
buttonsModal.style.justifyContent = "space-between";
buttonsModal.style.alignItems = "center";
buttonsModal.style.marginTop = "15px";

const buttonCloseModal = document.getElementById("closemodal");
buttonCloseModal.style.display = "flex";
buttonCloseModal.style.height = "24px";
buttonCloseModal.style.fontSize = "24px";
buttonCloseModal.style.backgroundColor = "white";
buttonCloseModal.style.border = "none";
buttonCloseModal.style.paddingBottom = "5px";

const buttonPreModal = document.getElementById("premodal");
buttonPreModal.style.border = "none";
buttonPreModal.style.backgroundColor = "white";
buttonPreModal.style.fontSize = "24px";
buttonPreModal.style.padding = "0";
buttonPreModal.addEventListener("click", function(event){
    const galleryModal = document.getElementById("gallery-modal");
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper.style.height = "730px";
    titleModal.style.display = "flex";
    galleryModal.style.display = "flex";
    changePhoto.style.display = "flex";
    deleteGallery.style.display = "flex";
    buttonPreModal.style.visibility = "hidden";
    preModalTitle.style.display = "none";
    addPhoto.style.display = "none";
    addForm.style.display = "none";
    validation.style.display = "none";
});

const styleModalGallery = document.getElementById("gallery-modal");
styleModalGallery.style.marginTop = "40px";
styleModalGallery.style.paddingLeft = "65px";
styleModalGallery.style.width = "530px";
styleModalGallery.style.height = "450px" 
styleModalGallery.style.display = "flex";
styleModalGallery.style.flexDirection = "row";
styleModalGallery.style.flexWrap = "wrap";

const changeModal = document.getElementById("change-modal");
changeModal.style.display = "flex";
changeModal.style.flexDirection = "column";
changeModal.style.justifyContent = "center";
changeModal.style.width = "420px";
changeModal.style.borderTop = "solid", "black";
changeModal.style.marginBottom = "30px";

const changePhoto = document.getElementById("change-photo");
changePhoto.addEventListener("click", function(event){
    const galleryModal = document.getElementById("gallery-modal");
    const modalWrapper = document.getElementById("modal-wrapper");
    modalWrapper.style.height = "670px";
    titleModal.style.display = "none";
    galleryModal.style.display = "none";
    changePhoto.style.display = "none";
    deleteGallery.style.display = "none";
    buttonPreModal.style.visibility = "visible";
    preModalTitle.style.display = "flex";
    addPhoto.style.display = "flex";
    addForm.style.display = "flex";
    validation.style.display = "flex";
});
changePhoto.style.fontFamily ="syne";
changePhoto.style.fontWeight = "700";
changePhoto.style.color = "white";
changePhoto.style.backgroundColor = "#1D6154";
changePhoto.style.justifyContent = "center";
changePhoto.style.margin = "2em", "auto";
changePhoto.style.marginLeft = "120px";
changePhoto.style.padding = "1em";
changePhoto.style.width = "180px";
changePhoto.style.borderRadius = "60px";

const deleteGallery = document.getElementById("delete-gallery");
deleteGallery.style.display = "flex";
deleteGallery.style.justifyContent = "center";
deleteGallery.style.color = "black";
deleteGallery.style.textDecoration = "none";

//Intégration de la modale d'ajout de photo

const preModalTitle = document.getElementById("premodaltitle");
preModalTitle.style.fontFamily = "work sans";
preModalTitle.style.fontWeight = "400";
preModalTitle.style.color = "black";
preModalTitle.style.marginTop = "10px";

const buttonValidation = document.getElementById("btn-validation");
buttonValidation.style.fontFamily ="syne";
buttonValidation.style.fontWeight = "700";
buttonValidation.style.color = "white";
buttonValidation.style.border = "none";
buttonValidation.style.backgroundColor = "#A7A7A7";
buttonValidation.style.justifyContent = "center";
buttonValidation.style.padding = "1em";
buttonValidation.style.width = "180px";
buttonValidation.style.borderRadius = "60px";

const formPhoto = document.getElementById("formphoto");
const addPhoto = document.createElement("div");
addPhoto.setAttribute("id","newphoto");
addPhoto.style.width = "420px";
addPhoto.style.height = "180px";
addPhoto.style.alignItems = "center";
addPhoto.style.flexDirection = "column";
addPhoto.style.backgroundColor = "#E8F1F7";
addPhoto.style.borderRadius = "5px";
addPhoto.style.marginTop = "36px";

const iconPhoto = document.createElement("i");
iconPhoto.setAttribute("class", "fa-sharp fa-regular fa-image");
iconPhoto.style.width = "58px";
iconPhoto.style.height = "46px";
iconPhoto.style.fontSize = "58px";
iconPhoto.style.justifyContent = "center";
iconPhoto.style.color = "#B9C5CC";
iconPhoto.style.marginTop = "30px";

const buttonAddPhoto = document.createElement("button");
buttonAddPhoto.setAttribute("id", "add-photo");
buttonAddPhoto.textContent = "+ Ajouter photo";
buttonAddPhoto.style.fontFamily ="syne";
buttonAddPhoto.style.fontWeight = "700";
buttonAddPhoto.style.color = "#306685";
buttonAddPhoto.style.border = "none";
buttonAddPhoto.style.backgroundColor = "#A7A7A7";
buttonAddPhoto.style.justifyContent = "center";
buttonAddPhoto.style.padding = "1em";
buttonAddPhoto.style.width = "180px";
buttonAddPhoto.style.borderRadius = "60px";
buttonAddPhoto.style.marginTop = "28px";

const formatImage = document.createElement("p");
formatImage.textContent = "jpg, png : 4mo max";

const infoPhoto = document.createElement("div");
infoPhoto.setAttribute("id", "infophoto");
infoPhoto.style.flexDirection = "column";
infoPhoto.style.marginTop = "40px";
infoPhoto.style.marginBottom = "47px";

const addForm = document.createElement("form");
addForm.setAttribute("action", "#");
addForm.setAttribute("method", "post");
addForm.setAttribute("id", "");
addForm.style.flexDirection = "column";

const titleInput = document.createElement("label");
titleInput.setAttribute("for","titre-photo");
titleInput.textContent = "Titre";
titleInput.style.marginBottom = "10px";
const titlePhoto = document.createElement("input");
titlePhoto.setAttribute ("type", "text");
titlePhoto.setAttribute("name","title");
titlePhoto.setAttribute("id", "titlephoto");
titlePhoto.style.height = "50px";
titlePhoto.style.marginBottom = "20px";
titlePhoto.style.border = "none";
titlePhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";

/*CHANGER INPUT CATPHOTO EN SELECT - VOIR MDN SELECT A LIST*/

const catTitle = document.createElement("label");
catTitle.setAttribute("for", "categorie");
catTitle.textContent = "Catégorie";
catTitle.style.marginBottom = "10px";
const catPhoto = document.createElement("input");
catPhoto.setAttribute("type", "text");
catPhoto.setAttribute("name", "cat");
catPhoto.setAttribute("id", "catphoto");
catPhoto.style.height = "50px";
catPhoto.style.border = "none";
catPhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";

formPhoto.appendChild(addPhoto);
addPhoto.appendChild(iconPhoto);
addPhoto.appendChild(buttonAddPhoto);
addPhoto.appendChild(formatImage);
formPhoto.appendChild(infoPhoto);
infoPhoto.appendChild(addForm);
addForm.appendChild(titleInput);
addForm.appendChild(titlePhoto);
addForm.appendChild(catTitle);
addForm.appendChild(catPhoto);

