
fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
    
}}); 


//Création de la modale 


const modal = document.createElement("aside");
    modal.id = "modal1";
    modal.className = "modal";
    modal.ariaHidden = "true";
    modal.role = "dialog";
    modal.title = "Galerie photo";
        modal.style.display = "none";
            modal.style.position = "fixed";
            modal.style.alignItems = "center";
            modal.style.justifyContent = "center";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.background = "rgba(0,0,0,0.5)";
            modal.style.boxSizing = "border-box";
    document.body.appendChild(modal);


const modalWrapper = document.createElement("div");
    modalWrapper.id = "modal-wrapper";
        modalWrapper.style.overflow = "auto";
        modalWrapper.style.display = "flex";
        modalWrapper.style.flexDirection = "column";
        modalWrapper.style.alignItems = "center";
        modalWrapper.style.width = "650px";
        modalWrapper.style.height = "730px";
        modalWrapper.style.maxWidth = "calc(100vw-20vw)";
        modalWrapper.style.maxHeight = "calc(100vh-20vh)";
        modalWrapper.style.padding = "20px";
        modalWrapper.style.backgroundColor = "white";
        modalWrapper.style.borderRadius = "15px";
            modal.appendChild(modalWrapper);

const buttonsModal = document.createElement("div");
    buttonsModal.id = "btns-modal";
        buttonsModal.style.width = "600px";
        buttonsModal.style.display = "flex";
        buttonsModal.style.justifyContent = "space-between";
        buttonsModal.style.alignItems = "center";
        buttonsModal.style.marginTop = "15px";
            modalWrapper.appendChild(buttonsModal);

const openModal = document.getElementById('js-modal');
openModal.addEventListener("click", function(event) {
        event.preventDefault();
        const modal = document.getElementById('modal1');
        modal.style.display = "flex";
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
                buttonPreModal.style.visibility = "hidden";
                preModalTitle.style.display = "none";
                validation.style.display = "none";
                addPhoto.style.display = "none";
                infoPhoto.style.display = "none";
}); 

const buttonPreModal = document.createElement("button");
    buttonPreModal.id = "premodal";
        const iconPreModal = document.createElement("i");
            iconPreModal.className = "fa-solid fa-arrow-left";
                buttonPreModal.appendChild(iconPreModal);
                    buttonPreModal.style.border = "none";
                    buttonPreModal.style.backgroundColor = "white";
                    buttonPreModal.style.fontSize = "24px";
                    buttonPreModal.style.padding = "0";
                        modalWrapper.appendChild(buttonPreModal);

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
                    validation.style.display = "none";
            });

            buttonsModal.appendChild(buttonPreModal);

const closeModal = document.createElement("button");
    closeModal.id = "closemodal";
            const iconCloseModal = document.createElement("i");
                iconCloseModal.className = "fa-solid fa-xmark";
                    closeModal.appendChild(iconCloseModal);

    closeModal.addEventListener('click', function (event) {
            event.preventDefault();
            modal.style.display = "none";
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('aria-modal');            
    });
    buttonsModal.appendChild(closeModal);

const titleModal = document.createElement("h2");
    titleModal.id = "titlemodal"
        titleModal.style.height = "30px";
        titleModal.style.fontFamily = "work sans";
        titleModal.style.fontWeight = "400";
        titleModal.style.color = "black";
            modalWrapper.appendChild(titleModal);

const preModalTitle = document.createElement("h2");
    preModalTitle.id = "premodaltitle";
    preModalTitle.value = "Ajout photo";
        preModalTitle.style.fontFamily = "work sans";
        preModalTitle.style.fontWeight = "400";
        preModalTitle.style.color = "black";
        preModalTitle.style.marginTop = "10px";
            modalWrapper.appendChild(preModalTitle);

//Fonction de l'importation et de la création de l'emplacement des travaux dans la modale
    function CreateSmallCard(works){
        const galleryModal = document.createElement("div");
            galleryModal.id = "gallery-modal";
                galleryModal.style.marginTop = "40px";
                galleryModal.style.paddingLeft = "65px";
                galleryModal.style.width = "530px";
                galleryModal.style.height = "450px" 
                galleryModal.style.display = "flex";
                galleryModal.style.flexDirection = "row";
                galleryModal.style.flexWrap = "wrap";
                    const photoModal = document.createElement("figure");
                        photoModal.id = "photomodal";
                                photoModal.style.width = "85px";
                                photoModal.style.height = "140px"
                                photoModal.style.marginRight = "8px";

            const pictureModal = document.createElement("div");
                    pictureModal.id = "picture";
                                pictureModal.style.height = "120px";

            const imageUrlModal = document.createElement("img");
                    imageUrlModal.id = "image";
                        imageUrlModal.src = works.imageUrl;
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

        const movePicture = document.createElement("i");
                    movePicture.className = "fa-solid fa-up-down-left-right";
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

    
        //Suppression des éléments de la modale 

        const iconDelete = document.createElement("i");
            iconDelete.className = "fa-regular fa-trash-can";
            iconDelete.id = works.id;
        
                        iconDelete.style.display = "flex";
                        iconDelete.style.position = "relative";
                        iconDelete.style.width = "15px";
                        iconDelete.style.height = "15px";
                        iconDelete.style.backgroundColor = "black";
                        iconDelete.style.color = "white";
                        iconDelete.style.paddingLeft = "3px";
                        iconDelete.style.paddingTop = "3px";
                        iconDelete.style.border = "none";
                        iconDelete.style.width = "17px";
                        iconDelete.style.height = "17px";
                        iconDelete.style.top = "9px";
                        iconDelete.style.left = "62px";


            iconDelete.addEventListener("click", function(e){
                    e.preventDefault();
                    const worksId = e.target.id;
                    
                        fetch(`http://localhost:5678/api/works/${worksId}`, {
                            method: 'DELETE',
                            headers:{'accept': '*/*',
                                    'authorization': `Bearer ${sessionStorage.token}`},
                        })
                        .then(res => {
                            if(res.status == 204){
                                console.log("Projet supprimé !");
                    
                            } else if(res.status == 500){
                                console.log("Erreur lors de l'envoi");
                            };
                        })
                        .catch(err => console.log(err));
                        });
        
            

            
                modalWrapper.appendChild(galleryModal);
                galleryModal.appendChild(photoModal);
                photoModal.appendChild(pictureModal);
                pictureModal.appendChild(imageUrlModal);
                photoModal.appendChild(titleImgModal);
                pictureModal.appendChild(iconDelete);
                pictureModal.appendChild(movePicture);


        };


const changeModal = document.createElement("div");
    changeModal.id = "change-modal";
        changeModal.style.display = "flex";
        changeModal.style.flexDirection = "column";
        changeModal.style.justifyContent = "center";
        changeModal.style.width = "420px";
        changeModal.style.borderTop = "solid", "black";
        changeModal.style.marginBottom = "30px";
            modalWrapper.appendChild(changeModal);

const changePhoto = document.createElement("button");
    changePhoto.id = "change-photo";
    changePhoto.textContent = "Ajouter une photo";

        changeModal.appendChild(changePhoto);
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

        changePhoto.style.marginLeft = "120px";
        changePhoto.style.padding = "1em";


const deleteGallery = document.createElement("a");
    deleteGallery.href = "#";
    deleteGallery.id = "delete-gallery";
    deleteGallery.textContent = "Supprimer la galerie";
        deleteGallery.style.display = "flex";
        deleteGallery.style.justifyContent = "center";
        deleteGallery.style.color = "black";
        deleteGallery.style.textDecoration = "none";




















//Prévisualisation de la photo et intégration de sa zone d'apparition
const formPhoto = document.createElement("form");
    formPhoto.id = "formphoto";
    formPhoto.method = "post";
    formPhoto.enctype = "multipart/form-data";

const addPhoto = document.createElement("div");
    addPhoto.id = "newphoto";
        addPhoto.style.width = "420px";
        addPhoto.style.height = "180px";
        addPhoto.style.justifyContent = "center";
        addPhoto.style.alignItems = "center";
        addPhoto.style.flexDirection = "column";
        addPhoto.style.backgroundColor = "#E8F1F7";
        addPhoto.style.borderRadius = "5px";
        addPhoto.style.marginTop = "36px";

const iconPhoto = document.createElement("i");
        iconPhoto.id = "icon";
        iconPhoto.className = "fa-sharp fa-regular fa-image";
                iconPhoto.style.fontSize = "58px";
                iconPhoto.style.justifyContent = "center";
                iconPhoto.style.color = "#B9C5CC";
                iconPhoto.style.marginTop = "10px";


//Bouton d'ajout de photo
const buttonAddPhoto = document.createElement("div");
    buttonAddPhoto.id = "buttonaddphoto";
const labelButtonAdd = document.createElement("label");
    labelButtonAdd.id = "labelbuttonadd";
    labelButtonAdd.textContent = "+ Ajouter photo"
        labelButtonAdd.style.display = "flex";
        labelButtonAdd.style.flexDirection = "column";
        labelButtonAdd.style.alignItems = "center";
        labelButtonAdd.style.borderRadius = "60px";
        labelButtonAdd.style.backgroundColor = "#A7A7A7";
        labelButtonAdd.style.height = "36px";
        labelButtonAdd.style.marginTop = "15px";
        labelButtonAdd.style.position = "relative";
        labelButtonAdd.style.top = "12px";
        labelButtonAdd.style.color = "#306685";        
const inputAddPhoto = document.createElement("input");
    inputAddPhoto.id = "inputaddphoto";
    inputAddPhoto.type = "text";
    inputAddPhoto.name = "picture";
    inputAddPhoto.onchange = "previewPicture()";
    /*inputAddPhoto.setAttribute("name", "max_file_size");
    inputAddPhoto.setAttribute("value", "4096");*/
                inputAddPhoto.style.height = "36px";
                inputAddPhoto.style.opacity = "0";

const formatImage = document.createElement("p");
    formatImage.id = "formatimage";
    formatImage.textContent = "jpg, png : 4mo max"
                formatImage.style.marginTop = "5px";

//Entrée des informations pour la nouvelle image

const infoPhoto = document.createElement("div");
        infoPhoto.id = "infophoto";
                infoPhoto.style.flexDirection = "column";
                infoPhoto.style.height = "250px";
                infoPhoto.style.justifyContent = "center";
//Entrée du titre de la nouvelle image

const infoTitle = document.createElement("div");
    infoTitle.id = "infotitle";
                infoTitle.style.display = "flex";
                infoTitle.style.flexDirection = "column";
const titlePhoto = document.createElement("label");
    titlePhoto.id = "titlephoto";
    titlePhoto.textContent = "Titre";
                titlePhoto.style.height = "50px";
                titlePhoto.style.marginBottom = "20px";
                titlePhoto.style.border = "none";
                titlePhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
const titleInput = document.createElement("input");
    titleInput.id = "titleinput";
    titleInput.type = "text";
    titleInput.onchange = "styleValidation()";
                titleInput.style.marginBottom = "10px";


//Entrée de la catégorie de la nouvelle image

const infoCat = document.createElement("div");
    infoCat.id = "infocat";
        infoCat.style.display = "flex";
        infoCat.style.flexDirection = "column";
const catTitle = document.createElement("label");
    catTitle.id = "categorie";
    catTitle.textContent = "Catégorie";
        catTitle.style.marginBottom = "10px";

const catPhoto = document.createElement("select");
    catPhoto.id = "catphoto";
    catPhoto.name = "categorie";
    catPhoto.onchange = "styleValidation()";
        catPhoto.style.height = "50px";
        catPhoto.style.border = "none";
        catPhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
        catPhoto.style.backgroundColor = "white";




        let photo = document.createElement("figure");
            photo.id = "newpicture";
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

    
const btnValidation = document.createElement("input");
        btnValidation.setAttribute("id", "btn-validation");
        btnValidation.setAttribute("type", "submit");   
        btnValidation.setAttribute("value", "Valider"); 
        btnValidation.setAttribute("onchange", "styleValidation()");


btnValidation.addEventListener("click", function(e){
        e.preventDefault();
        
        let formData = new FormData();
    
                formData.append('image', document.getElementById('input-addphoto').files[0]);
                formData.append('title', document.getElementById('titlephoto').value);
                
        
                if(document.getElementById('catphoto').value === "Objets"){
                    formData.append('category', 1)
                } else if(document.getElementById('catphoto').value === "Appartements"){
                    formData.append('category', 2)
                } else if(document.getElementById('catphoto').value === "Hôtels & restaurants"){
                    formData.append('category', 3)
                } else {
                    alert("Elément sans catégorie")
                };
                

                fetch("http://localhost:5678/api/works/", {
                        method: 'POST',
                        headers:{'accept': '*/*',
                                'authorization': `Bearer ${sessionStorage.getItem('token')}`},
                        auth: sessionStorage.getItem('userId'),
                        body: formData,
                   
                })
                .then(res => {
                    if(!res.status.ok){
                        console.log ("Erreur lors de l'envoi du formulaire");  
                    } else {
                        return res.json();
                    };
                })
                
                .catch(err => console.log(err));
    });

                        btnValidation.style.padding = "1em";
                        btnValidation.style.marginTop = "20px";

                        
const styleValidation = function (){
    if(photo.src !=="" && titlePhoto.value !== "" && catPhoto.value !== "") {
        btnValidation.style.backgroundColor = "#1D6154";
    } else {
        btnValidation.style.backgroundColor = "#A7A7A7";
    };
};              

const validation = document.createElement("div");
    validation.id = "validation";
                validation.style.display = "flex";
                validation.style.justifyContent = "center";
                validation.style.borderTop = "solid", "black", "1px";

















                

const buttonCloseModal = document.getElementById("closemodal");
                buttonCloseModal.style.display = "flex";
                buttonCloseModal.style.height = "24px";
                buttonCloseModal.style.fontSize = "24px";
                buttonCloseModal.style.backgroundColor = "white";
                buttonCloseModal.style.border = "none";
                buttonCloseModal.style.paddingBottom = "5px";





//Rattachement des éléments de la modale avec les parents 

formPhoto.appendChild(addPhoto);
formPhoto.appendChild(infoPhoto);
formPhoto.appendChild(validation);
addPhoto.appendChild(photo);
addPhoto.appendChild(iconPhoto);
addPhoto.appendChild(buttonAddPhoto);
buttonAddPhoto.appendChild(labelButtonAdd);
buttonAddPhoto.appendChild(inputAddPhoto);
addPhoto.appendChild(formatImage);
infoPhoto.appendChild(infoTitle);
infoPhoto.appendChild(infoCat);
infoTitle.appendChild(titlePhoto);
infoTitle.appendChild(titleInput);
infoCat.appendChild(catTitle);
infoCat.appendChild(catPhoto);
validation.appendChild(btnValidation);

