var oui = document.querySelector("#oui");
var non = document.querySelector("#non");

oui.addEventListener('click', function(){
    // accepte dans la base de données
    window.location = "http://127.0.0.1:5500/HTML/formulaire/modoAdmin/admin.html";
})

non.addEventListener('click', function(){
    // refuse dans la base de données
    window.location = "http://127.0.0.1:5500/HTML/formulaire/modoAdmin/admin.html";
})