const openModal = function(e) {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.removeAttribute('aria-hidden')
    target.setAttribute('aria-modal', 'true')
};

document.getElementsByClassName('js-modal');/*.forEach(a => {
    a.addEventListener('click', openModal)
});*/

//Mise en forme de la modale

const modal = document.getElementsByClassName("modal");
console.log(modal);

//Mise en forme de modal-wrapper

const styleModal = document.getElementsByClassName("modal-wrapper");
console.log(styleModal);