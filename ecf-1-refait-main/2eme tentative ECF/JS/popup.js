var popup = document.querySelector("#popup");
var validerCondition = document.querySelector("#validerCondition");
var banis = document.querySelector("#banis");
var main = document.querySelector("#content");

validerCondition.addEventListener('click', function(event){
    event.preventDefault();
    popup.style.display='none';
    main.style.opacity='1';
});

banis.addEventListener('click', function(event){
    event.preventDefault();
    window.location = "https://www.google.fr";
    alert("vous avez été bannis");
});