const modal = document.getElementById('modal1');

const linkModal = document.getElementById('js-modal');
linkModal.addEventListener("click", function(event) {
    console.log("Ça marche !");
    event.preventDefault();
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
});    

const closeModal = document.getElementById("js-closemodal");
closeModal.addEventListener("click", function(event){
    console.log("Va faire tout noir !");
    event.preventDefault();
        modal.style.display = "none";
        modal.setAttribute('aria-hidden', 'true');
        modal.removeAttribute('aria-modal');
});

