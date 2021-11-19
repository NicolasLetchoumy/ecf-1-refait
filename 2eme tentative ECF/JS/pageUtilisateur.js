var participant = document.querySelector("#equipe");
var jury = document.querySelector("#jury");

participant.addEventListener('click', function(){
    window.location = "http://127.0.0.1:5500/HTML/formulaire/formulaireEquipe.html";
})

jury.addEventListener('click', function(){
    window.location = "http://127.0.0.1:5500/HTML/formulaire/formulaireJury.html";
})