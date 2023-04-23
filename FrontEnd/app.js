fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
}}); 


//Création de la modale 

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
                infoPhoto.style.display = "none";

});    

const closeModal = document.getElementById("closemodal"); 
    closeModal.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = "none";
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
});


//Fonction de l'importation et de la création de l'emplacement des travaux dans la modale

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



//Style et fonctionnalité des éléments du modal-wrapper


//Style du titre de la modale
const titleModal = document.getElementById("titlemodal");

                titleModal.style.height = "30px";
                titleModal.style.fontFamily = "work sans";
                titleModal.style.fontWeight = "400";
                titleModal.style.color = "black";

//Style des boutons supérieurs de la modale
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

const styleModalGallery = document.getElementById("gallery-modal");
                styleModalGallery.style.marginTop = "40px";
                styleModalGallery.style.paddingLeft = "65px";
                styleModalGallery.style.width = "530px";
                styleModalGallery.style.height = "450px" 
                styleModalGallery.style.display = "flex";
                styleModalGallery.style.flexDirection = "row";
                styleModalGallery.style.flexWrap = "wrap";

//Mise en forme de la galerie modale, du bouton ouvrant la seconde modale et du futur bouton de suppression

const changeModal = document.getElementById("change-modal");
                changeModal.style.display = "flex";
                changeModal.style.flexDirection = "column";
                changeModal.style.justifyContent = "center";
                changeModal.style.width = "420px";
                changeModal.style.borderTop = "solid", "black";
                changeModal.style.marginBottom = "30px";

const deleteGallery = document.getElementById("delete-gallery");
                deleteGallery.style.display = "flex";
                deleteGallery.style.justifyContent = "center";
                deleteGallery.style.color = "black";
                deleteGallery.style.textDecoration = "none";

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
                    changeModal.style.display = "flex";
                    buttonPreModal.style.visibility = "hidden";
                    preModalTitle.style.display = "none";
                    addPhoto.style.display = "none";
                    infoPhoto.style.display = "none";
                    validation.style.display = "none";
            });

const changePhoto = document.getElementById("change-photo");
    changePhoto.addEventListener("click", function(event){
        const galleryModal = document.getElementById("gallery-modal");
        const modalWrapper = document.getElementById("modal-wrapper");
                modalWrapper.style.height = "670px";
                titleModal.style.display = "none";
                galleryModal.style.display = "none";
                changeModal.style.display = "none";
                buttonPreModal.style.visibility = "visible";
                preModalTitle.style.display = "flex";
                addPhoto.style.display = "flex";
                infoPhoto.style.display = "flex";
                validation.style.display = "flex";
        });
    //Mise en forme du bouton pour ajouter des photos et passer à la modale suivante

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














//Intégration de la modale d'ajout de photo

const preModalTitle = document.getElementById("premodaltitle");
                        preModalTitle.style.fontFamily = "work sans";
                        preModalTitle.style.fontWeight = "400";
                        preModalTitle.style.color = "black";
                        preModalTitle.style.marginTop = "10px";



//Formulaire d'ajout de nouvelles photos 

const formPhoto = document.getElementById("formphoto");
const addPhoto = document.createElement("div");
        addPhoto.setAttribute("id","newphoto");
                        addPhoto.style.width = "420px";
                        addPhoto.style.height = "180px";
                        addPhoto.style.justifyContent = "center";
                        addPhoto.style.alignItems = "center";
                        addPhoto.style.flexDirection = "column";
                        addPhoto.style.backgroundColor = "#E8F1F7";
                        addPhoto.style.borderRadius = "5px";
                        addPhoto.style.marginTop = "36px";

//Prévisualisation de la photo et intégration de sa zone d'apparition

let photo = document.createElement("img");
photo.setAttribute("id", "newPicture");
photo.setAttribute("name", "image");
let previewPicture = function (e){
    const [picture] = e.files;

     if(picture) {
        photo.src = URL.createObjectURL(picture)
        photo.style.display = "flex";
        iconPhoto.style.display = "none";
        actionButton.style.display = "none";
        formatImage.style.display = "none";
     };

};
                        photo.style.maxHeight = "180px";
                        photo.style.objectFit = "contain";
                        photo.style.border = "none";
                        photo.style.display = "none";

const iconPhoto = document.createElement("i");
        iconPhoto.setAttribute("class", "fa-sharp fa-regular fa-image");
                        iconPhoto.style.fontSize = "58px";
                        iconPhoto.style.justifyContent = "center";
                        iconPhoto.style.color = "#B9C5CC";
                        iconPhoto.style.marginTop = "10px";

//Bouton d'ajout de photo

const actionButton = document.createElement("div");
        actionButton.setAttribute("id", "buttonAdd");
                        actionButton.style.display = "flex";
                        actionButton.style.flexDirection = "column";
                        actionButton.style.alignItems = "center";
                        actionButton.style.borderRadius = "60px";
                        actionButton.style.backgroundColor = "#A7A7A7";
                        actionButton.style.height = "36px";
                        actionButton.style.marginTop = "15px";


const buttonAddPhoto = document.createElement("label");
                        buttonAddPhoto.textContent = "+ Ajouter photo";
                        buttonAddPhoto.style.position = "relative";
                        buttonAddPhoto.style.top = "12px";
                        buttonAddPhoto.style.color = "#306685";
const inputAddPhoto = document.createElement("input");
        inputAddPhoto.setAttribute("type", "file");
        inputAddPhoto.setAttribute("id", "input-addphoto");
        inputAddPhoto.setAttribute("name", "picture");
        inputAddPhoto.setAttribute("onchange", "previewPicture(this)");
                        inputAddPhoto.style.height = "36px";
                        inputAddPhoto.style.opacity = "0";

const formatImage = document.createElement("p");
        formatImage.textContent = "jpg, png : 4mo max";
                        formatImage.style.marginTop = "5px";



//Entrée des informations pour la nouvelle image

const infoPhoto = document.createElement("div");
        infoPhoto.setAttribute("id", "infophoto");
                        infoPhoto.style.flexDirection = "column";
                        infoPhoto.style.height = "250px";
                        infoPhoto.style.justifyContent = "center";
//Entrée du titre de la nouvelle image

const infoTitle = document.createElement("div");
        infoTitle.setAttribute("id", "infotitle");
        infoTitle.style.display = "flex";
        infoTitle.style.flexDirection = "column";
const titleInput = document.createElement("label");
        titleInput.setAttribute("for","titre-photo");
        titleInput.textContent = "Titre";
                        titleInput.style.marginBottom = "10px";
const titlePhoto = document.createElement("input");
        titlePhoto.setAttribute ("type", "text");
        titlePhoto.setAttribute("name","title");
        titlePhoto.setAttribute("id", "titlephoto");
        titlePhoto.setAttribute("onchange", "styleValidation()");
                        titlePhoto.style.height = "50px";
                        titlePhoto.style.marginBottom = "20px";
                        titlePhoto.style.border = "none";
                        titlePhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";

//Entrée de la catégorie de la nouvelle image

const infoCat = document.createElement("div");
        infoCat.setAttribute("id", "infocat");
        infoCat.style.display = "flex";
        infoCat.style.flexDirection = "column";
const catTitle = document.createElement("label");
        catTitle.setAttribute("for", "categorie");
        catTitle.textContent = "Catégorie";
                        catTitle.style.marginBottom = "10px";

const catPhoto = document.createElement("select");
        catPhoto.setAttribute("name", "categorie");
        catPhoto.setAttribute("id", "catphoto");
        catPhoto.setAttribute("name", "category");
        catPhoto.setAttribute("onchange", "styleValidation()");
                        catPhoto.style.height = "50px";
                        catPhoto.style.border = "none";
                        catPhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
                        catPhoto.style.backgroundColor = "white";

const listCat = document.createElement("option");
        listCat.setAttribute("value", "");
const catOjbect = document.createElement("option");
        catOjbect.setAttribute("value", "Objets");
        catOjbect.textContent = "Objets";
const catAppart = document.createElement("option");
        catAppart.setAttribute("value", "Appartements");
        catAppart.textContent = "Appartements";
const catRestaurant = document.createElement("option");
        catRestaurant.setAttribute("value", "Hôtels & restaurants");
        catRestaurant.textContent = "Hôtels & restaurants";

const btnValidation = document.createElement("input");
        btnValidation.setAttribute("id", "btn-validation");
        btnValidation.setAttribute("type", "submit");   
        btnValidation.setAttribute("value", "Valider"); 
        btnValidation.setAttribute("onchange", "styleValidation");
                        btnValidation.style.fontFamily ="syne";
                        btnValidation.style.fontWeight = "700";
                        btnValidation.style.color = "white";
                        btnValidation.style.border = "none";
                        btnValidation.style.backgroundColor = "#A7A7A7";
                        btnValidation.style.padding = "1em";
                        btnValidation.style.marginTop = "20px";
                        btnValidation.style.width = "180px";
                        btnValidation.style.borderRadius = "60px";
                        btnValidation.style.textAlign = "center";


const changeButtonValide = document.getElementById("btn-validation");
const styleValidation = function (){
    if(photo.src !=="" && titlePhoto.value !== "" && catPhoto.value !== "") {
        btnValidation.style.backgroundColor = "#1D6154";
    } else {
        btnValidation.style.backgroundColor = "#A7A7A7";
    };
};

        const sendNewWork = document.getElementById("formphoto");
        sendNewWork.addEventListener('submit', function (e){
                e.preventDefault();

                const newWork = {
                        image: document.getElementById("newPicture").src,
                        title: document.getElementById("titlephoto").value,
                        category: document.getElementById("catphoto").value,
                };
                console.log(newWork);

                const chargeUtile = JSON.stringify(newWork);

                fetch("http://localhost:5678/api/works/", {
                        method: 'POST',
                        headers: {'Content-type': 'multipart/form-data',
                                'Authorization': localStorage.getItem("token")},
                        body:chargeUtile,
                })
                .then(res => res.json());
        }); 

const validation = document.getElementById("validation");
                validation.style.display = "flex";
                validation.style.justifyContent = "center";
                validation.style.borderTop = "solid", "black", "1px";

//Rattachement des éléments de la modale avec les parents 

formPhoto.appendChild(addPhoto);
formPhoto.appendChild(infoPhoto);
formPhoto.appendChild(validation);
addPhoto.appendChild(photo);
addPhoto.appendChild(iconPhoto);
addPhoto.appendChild(actionButton);
actionButton.appendChild(buttonAddPhoto);
actionButton.appendChild(inputAddPhoto);
addPhoto.appendChild(formatImage);
infoPhoto.appendChild(infoTitle);
infoPhoto.appendChild(infoCat);
infoTitle.appendChild(titleInput);
infoTitle.appendChild(titlePhoto);
infoCat.appendChild(catTitle);
infoCat.appendChild(catPhoto);
catPhoto.appendChild(listCat);
catPhoto.appendChild(catOjbect);
catPhoto.appendChild(catAppart);
catPhoto.appendChild(catRestaurant);
validation.appendChild(btnValidation);

//Style des différents éléments de la première modale puis la seconde




