var espaceAdmin = document.querySelector("#espaceAdmin");
var espaceJury = document.querySelector("#espaceJury");
var espaceEquipe = document.querySelector("#espaceEquipe");


espaceJury.addEventListener('click', function(){
    location = 'http://127.0.0.1:5500/2eme%20tentative%20ECF/HTML/formulaire/modoJury/accueilJury.html';
});

espaceEquipe.addEventListener('click', function(){
    location='http://127.0.0.1:5500/2eme%20tentative%20ECF/HTML/formulaire/modoEquipe/espaceEquipe.html';
});

espaceAdmin.addEventListener('click', function(){
    location='http://127.0.0.1:5500/2eme%20tentative%20ECF/HTML/formulaire/modoAdmin/admin.html';
});