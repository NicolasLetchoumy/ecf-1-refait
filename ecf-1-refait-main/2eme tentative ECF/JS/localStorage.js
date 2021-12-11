var submit = document.querySelector("#submit");

submit.addEventListener('click', function(){
    localStorage.setItem("nomEquipe", document.querySelector("#nomEquipe").value );
    localStorage.setItem("nomJoueur1", document.querySelector("#nomJoueur1").value );
    localStorage.setItem("nomJoueur2", document.querySelector("#nomJoueur2").value );
    localStorage.setItem("nomJoueur3", document.querySelector("#nomJoueur3").value );
    localStorage.setItem("nomJoueur4", document.querySelector("#nomJoueur4").value );
    localStorage.setItem("nomCoach", document.querySelector("#nomCoach").value );s
    localStorage.setItem("logoEquipe", document.querySelector("#logoEquipe").value );


});