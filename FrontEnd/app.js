const linkModal = document.getElementById('js-modal');
linkModal.addEventListener("click", function(event) {
    console.log("Ça marche !");
    event.preventDefault();
    const modal = document.getElementById('modal1');
        modal.style.display = null;
        modal.removeAttribute('aria-hidden');
        modal.setAttribute('aria-modal', 'true');
});


