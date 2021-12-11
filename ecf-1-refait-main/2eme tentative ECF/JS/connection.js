var valider = document.querySelector("#submit2")
var mdp = document.querySelector("#newMdp")
var confirmation = document.querySelector("#confirmeMdp")


//vérification login 
valider.addEventListener("click",function (event) {
    event.preventDefault();
    var validated =  true;
    if(mdp.value.length <= 9){
        validated = false;
        console.log("yes")
    }
    if(!/\d/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(!/[a-z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(!/[A-Z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(/[^0-9a-zA-Z]/.test(mdp.value)){
        validated = false;
        console.log("yes")
    }
    if(mdp.value == confirmation.value && validated == true){
        alert("mot de passe correct");
    }
    else{
        alert("erreur sur le mot de passe");
    }
    if(identifiant.lenght < 12){
        validated = false;
    }else{
        alert("erreur sur l'identifiant n'est pas assez long'");
    }
    if(!/[A-Z]/.test(identifiant.value))
    {
        validated = false;
        alert("erreur sur l'identifiant manque de majuscule");
    }
    if(validated == true){
        alert("tout est bon vous allez pouvoir vous connecté");
    }
})
