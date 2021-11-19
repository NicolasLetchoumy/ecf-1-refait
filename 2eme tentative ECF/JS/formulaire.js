var mdp = document.querySelector("#mdp");
var identifiant = document.querySelector("#identifiant");
var valider = document.querySelector("#valider");

valider.addEventListener('click', function(){
    var validated =  true;
    if(mdp.value.length <= 9){
        validated = false;
        alert("erreur sur le mot de passe n'est pas assez long");
    }
    if(!/\d/.test(mdp.value)){
        validated = false;
    }
    if(!/[a-z]/.test(mdp.value)){
        validated = false;
        alert("erreur sur le mot de passe manque de lettre");
    }
    if(!/[A-Z]/.test(mdp.value)){
        validated = false;
        alert("erreur sur le mot de passe manque de lettre majuscule");
    }
    if(/[^0-9a-zA-Z]/.test(mdp.value)){
        validated = false;
    }
    if(identifiant.lenght <= 12){
        validated = false;
        alert("erreur sur l'identifiant n'est pas assez long'");
    }
    if(!/[A-Z]/.test(identifiant.value))
    {
        validated = false;
        alert("erreur sur l'identifiant manque de majuscule");
    }
})
