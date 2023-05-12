//Fonctionnalité authentification 
    const boutonConnecter = document.getElementById("btn-connecter");
            boutonConnecter.addEventListener("click", function(event) {
                event.preventDefault();
    
    //Création de la charge utile

    const identification = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
    };

    //Création de la charge utile au format JSON
    const chargeUtile = JSON.stringify(identification);

    //Appel de la fonction fetch avec les infos nécessaires puis redirection vers la page d'accueil à modifier

    fetch("http://localhost:5678/api/users/login", {
        method:'POST',
        headers:{'Content-type': 'application/json'},
        body:chargeUtile
    })
    .then(res => {
        if(res.status == 401) {
            alert("Utilisateur non autorisé !")
        } else if(res.status == 404){
            alert("Utilisateur inconnu")
        } else {
            return res.json()
        };
        
    })
    .then(responseAuth => {

        sessionStorage.setItem("token", responseAuth.token);
        sessionStorage.setItem("userId", responseAuth.userId);
        window.location.href ='./index.html';
      
    })

    .catch(err => console.log(err));
});

//Mise en forme des liens 

const projects = document.getElementById("projects");
projects.style.color = "black";
projects.style.textDecoration = "none";

const forgetPass = document.getElementById("forget");
forgetPass.style.color = "black";
forgetPass.style.textDecoration = "none";