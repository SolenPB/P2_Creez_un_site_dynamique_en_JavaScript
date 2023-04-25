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
            const notAuth = document.createElement("p");
            notAuth.textContent = "Not authorized";
            const passWord = document.getElementById("login");
            passWord.appendChild(notAuth);
        } else if(res.status == 404){
            const notFound = document.createElement("p");
            notFound.textContent = "User not found";
            const userName = document.getElementById("login");
            userName.appendChild(notFound);
        } else {
            return res.json()
        };
        
    })
    .then(responseAuth => {

        sessionStorage.setItem("token", responseAuth.token);
        sessionStorage.setItem("userId", responseAuth.userId);
        console.log(responseAuth);
        window.location.href='./index.html';
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