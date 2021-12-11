var nomEquipe = document.querySelector("#nomEquipe");
var nomJoueur1 = document.querySelector("#nomJoueur1");
var nomJoueur2 = document.querySelector("#nomJoueur2");
var nomJoueur3 = document.querySelector("#nomJoueur3");
var nomJoueur4 = document.querySelector("#nomJoueur4");
var nomCoach = document.querySelector("#nomCoach");
var presentation = document.querySelector("#presentation");


nomEquipe.innerHTML += localStorage.getItem("nomEquipe");
nomJoueur1.innerHTML +=localStorage.getItem("nomJoueur1");
nomJoueur2.innerHTML +=localStorage.getItem("nomJoueur2");
nomJoueur3.innerHTML +=localStorage.getItem("nomJoueur3");
nomJoueur4.innerHTML +=localStorage.getItem("nomJoueur4");
nomCoach.innerHTML +=localStorage.getItem("nomCoach");
