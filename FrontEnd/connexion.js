//Fonctionnalité authentification 
    const boutonConnecter = document.getElementById("btn-connecter");
    boutonConnecter.addEventListener("click", function(event) {
    event.preventDefault();
    //Création de la charge utile

    const identification = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };
    console.log(identification);
    //Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(identification);

    //Appel de la fonction fetch avec les infos nécessaires

    fetch("http://localhost:5678/api/users/login", {
        method:'POST',
        headers:{'Content-type': 'application/json'},
        body:chargeUtile
    });

    });