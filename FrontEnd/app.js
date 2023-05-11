fetch("http://localhost:5678/api/works/")
.then (res => res.json())
.then(worksArray => {
    for(let works of worksArray){
    CreateSmallCard(works);
    
}}); 


//Création de la modale 
const mainModal = document.getElementById("mainpage");
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
    

    mainModal.appendChild(modal);
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

const closeModal = document.createElement("button");
    closeModal.id = "closemodal";
        closeModal.style.display = "flex";
        closeModal.style.height = "24px";
        closeModal.style.fontSize = "24px";
        closeModal.style.backgroundColor = "white";
        closeModal.style.border = "none";
        closeModal.style.paddingBottom = "5px";
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
                    infoPhoto.style.display = "none";
                    validation.style.display = "none";
            });

            buttonsModal.appendChild(buttonPreModal);


const titleModal = document.createElement("h2");
    titleModal.id = "titlemodal"
    titleModal.textContent = "Galerie photo";
        titleModal.style.height = "30px";
        titleModal.style.fontFamily = "work sans";
        titleModal.style.fontWeight = "400";
        titleModal.style.color = "black";
            modalWrapper.appendChild(titleModal);

const preModalTitle = document.createElement("h2");
    preModalTitle.id = "premodaltitle";
    preModalTitle.textContent = "Ajout photo";
        preModalTitle.style.fontFamily = "work sans";
        preModalTitle.style.fontWeight = "400";
        preModalTitle.style.color = "black";
        preModalTitle.style.marginTop = "10px";
            modalWrapper.appendChild(preModalTitle);

const galleryModal = document.createElement("div");
    galleryModal.id = "gallery-modal";
        galleryModal.style.marginTop = "40px";
        galleryModal.style.paddingLeft = "65px";
        galleryModal.style.width = "530px";
        galleryModal.style.height = "450px" 
        galleryModal.style.display = "flex";
        galleryModal.style.flexDirection = "row";
        galleryModal.style.flexWrap = "wrap";
            modalWrapper.appendChild(galleryModal);



//Fonction de l'importation et de la création de l'emplacement des travaux dans la modale
    function CreateSmallCard(works){
        
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
                movePicture.style.bottom = "10px";
                movePicture.style.left = "35px";
                movePicture.style.padding = "1px";
               

    
        //Suppression des éléments de la modale 

        const iconDelete = document.createElement("i");
            iconDelete.className = "fa-regular fa-trash-can";
            iconDelete.id = works.id;
            iconDelete.setAttribute("type","button");
                iconDelete.style.display = "flex";
                iconDelete.style.position = "relative";
                iconDelete.style.width = "15px";
                iconDelete.style.height = "15px";
                iconDelete.style.backgroundColor = "black";
                iconDelete.style.color = "white";
                iconDelete.style.paddingLeft = "4px";
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
                                alert("Erreur lors de la suppression");
                            };
                        })
                        .catch(err => console.log(err));
                        });
        
                        
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

const changePhoto = document.createElement("input");
    changePhoto.id = "change-photo";
    changePhoto.value = "Ajouter une photo";
    changePhoto.type = "submit";

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

        changePhoto.style.padding = "1em";

const deleteGallery = document.createElement("a");
    deleteGallery.href = "#";
    deleteGallery.id = "delete-gallery";
    deleteGallery.textContent = "Supprimer la galerie";
        deleteGallery.style.display = "flex";
        deleteGallery.style.justifyContent = "center";
        deleteGallery.style.color = "black";
        deleteGallery.style.textDecoration = "none";
            changeModal.appendChild(deleteGallery);













          








//Prévisualisation de la photo et intégration de sa zone d'apparition


const formPhoto = document.createElement("form");
    formPhoto.id = "formphoto";
    formPhoto.method = "post";
    formPhoto.enctype = "multipart/form-data";

const titleFormPhoto = document.createElement("h2");
    titleFormPhoto.id = "titleformphoto";

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
        buttonAddPhoto.style.height = "45px";
const buttonAdd = document.createElement("button");
    buttonAdd.id = "buttonadd";
    buttonAdd.textContent = "+ Ajouter photo";
    buttonAdd.type = "submit";
        buttonAdd.style.display = "flex";
        buttonAdd.style.flexDirection = "column";
        buttonAdd.style.justifyContent = "center";
        buttonAdd.style.alignItems = "center";
        buttonAdd.style.borderRadius = "60px";
        buttonAdd.style.backgroundColor = "#A7A7A7";
        buttonAdd.style.color = "#306685";
        buttonAdd.style.width = "173px";
        buttonAdd.style.height = "36px";
        buttonAdd.style.marginTop = "5px";
        buttonAdd.style.left = "30px";
        buttonAdd.style.position = "relative";
               
const inputAddPhoto = document.createElement("input");
    inputAddPhoto.id = "inputaddphoto";
    inputAddPhoto.type = "file";
    inputAddPhoto.name = "picture";
    inputAddPhoto.accept = ".jpg, .png";
        inputAddPhoto.setAttribute("onchange", "previewPicture(this)");        
            inputAddPhoto.style.height = "36px";
            inputAddPhoto.style.opacity = "0";
            inputAddPhoto.style.margin = "0";
            inputAddPhoto.style.position = "relative";
            inputAddPhoto.style.bottom = "35px";


            let photo = document.createElement("img");
                photo.id = "newpicture";
                photo.src = "";

                            photo.style.maxHeight = "180px";
                            photo.style.objectFit = "contain";
                            photo.style.border = "none";
                            photo.style.display = "none";

            let previewPicture = function(e){
                
                const picture = e.files[0];

                        if(picture) { 
                            photo.src = URL.createObjectURL(picture)
                            photo.style.display = "flex";
                            iconPhoto.style.display = "none";
                            buttonAddPhoto.style.display = "none";
                            formatImage.style.display = "none";
                        };
            
            };

            addPhoto.appendChild(photo);
            buttonAddPhoto.appendChild(buttonAdd);
            buttonAddPhoto.appendChild(inputAddPhoto);
            
const formatImage = document.createElement("p");
    formatImage.id = "formatimage";
    formatImage.textContent = "jpg, png : 4mo max"
        formatImage.style.position = "relative";
        formatImage.style.top = "5px";



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
        titlePhoto.style.marginBottom = "10px";
                
const titleInput = document.createElement("input");
    titleInput.id = "titleinput";
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.setAttribute("onchange", "styleValidation()");
        

            titleInput.style.height = "50px";
            titleInput.style.marginBottom = "20px";
            titleInput.style.border = "none";
            titleInput.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
            titleInput.style.marginBottom = "10px";

                infoPhoto.appendChild(infoTitle);
                infoTitle.appendChild(titlePhoto);
                infoTitle.appendChild(titleInput);



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
    catPhoto.setAttribute("onchange", "styleValidation()")
        
        catPhoto.style.height = "50px";
        catPhoto.style.border = "none";
        catPhoto.style.boxShadow = "0 4px 14px rgba(0,0,0,0.09)";
        catPhoto.style.backgroundColor = "white";
            const catOption = document.createElement("option");
                catOption.textContent = "";
            const catOptionObject = document.createElement("option");
                catOptionObject.id = "1";
                catOptionObject.value = "Objets";
                catOptionObject.textContent = "Objets";
            const catOptionAppart = document.createElement("option");
                catOptionAppart.id = "2";
                catOptionAppart.value = "Appartements";
                catOptionAppart.textContent = "Appartements";
            const catOptionHotel = document.createElement("option");
                catOptionHotel.id = "3";
                catOptionHotel.value = "Hôtels & restaurants";
                catOptionHotel.textContent = "Hôtels & restaurants";

                    catPhoto.appendChild(catOption);
                    catPhoto.appendChild(catOptionObject);
                    catPhoto.appendChild(catOptionAppart);
                    catPhoto.appendChild(catOptionHotel);

                    
                    infoPhoto.appendChild(infoCat);                    
                    infoCat.appendChild(catTitle);
                    infoCat.appendChild(catPhoto);



const btnValidation = document.createElement("input");
        btnValidation.id = "btn-validation";
        btnValidation.type = "submit";   
        btnValidation.value = "Valider"; 
            btnValidation.setAttribute("onchange", "styleValidation()");


btnValidation.addEventListener("click", function(e){
        e.preventDefault();
            modal.style.display = "none";
            modal.setAttribute('aria-hidden', 'true');
            modal.removeAttribute('aria-modal');   
        
        let formData = new FormData();
    
                formData.append('image', document.getElementById('inputaddphoto').files[0]);
                
                if(document.getElementById('titleinput').value === ""){
                    alert("Element sans titre !");
                } else {
                    formData.append('title', document.getElementById('titleinput').value);
                };
                
        
                if(document.getElementById('catphoto').value === "Objets"){
                    formData.append('category', 1)
                } else if(document.getElementById('catphoto').value === "Appartements"){
                    formData.append('category', 2)
                } else if(document.getElementById('catphoto').value === "Hôtels & restaurants"){
                    formData.append('category', 3)
                } else {
                    alert("Elément sans catégorie !")
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
                .then (formPhoto.remove())
                .catch(err => console.log(err));
    });

                        btnValidation.style.padding = "1em";
                        btnValidation.style.marginTop = "20px";

                        

const styleValidation = function() {
    if(photo.src !== "" && titleInput.value !== "" && catPhoto.value !== ""){
        btnValidation.style.backgroundColor = "#1D6154";
        
    } else {
        btnValidation.style.backgroundColor = "#A7A7A7";
        
    };
                           
};
                        
styleValidation();

const validation = document.createElement("div");
    validation.id = "validation";
                validation.style.display = "flex";
                validation.style.justifyContent = "center";
                validation.style.borderTop = "solid", "black", "1px";
                    validation.appendChild(btnValidation);




//Rattachement des éléments de la modale avec les parents 
modalWrapper.appendChild(formPhoto);
formPhoto.appendChild(addPhoto);
formPhoto.appendChild(infoPhoto);
formPhoto.appendChild(validation);

addPhoto.appendChild(iconPhoto);
addPhoto.appendChild(buttonAddPhoto);
addPhoto.appendChild(formatImage);



