var cancel = document.querySelector("#cancel");
var cancel2 = document.querySelector("#cancel2");
var cancel3 = document.querySelector("#cancel3");
var cancel4 = document.querySelector("#cancel4");

var popupEquipe1 = document.querySelector("#popupEquipe1");
var popupEquipe2 = document.querySelector("#popupEquipe2");
var popupEquipe3 = document.querySelector("#popupEquipe3");
var popupEquipe4 = document.querySelector("#popupEquipe4");

var equipe1 = document.querySelector("#equipe1");
var equipe2 = document.querySelector("#equipe2");
var equipe3 = document.querySelector("#equipe3");
var equipe4 = document.querySelector("#equipe4");

cancel.addEventListener('click', function(event){
    event.preventDefault();
    popupEquipe1.style.display='none';
});

cancel2.addEventListener('click', function(event){
    event.preventDefault();
    popupEquipe2.style.display='none';
});

cancel3.addEventListener('click', function(event){
    event.preventDefault();
    popupEquipe3.style.display='none';
});

cancel4.addEventListener('click', function(event){
    event.preventDefault();
    popupEquipe4.style.display='none';
});


equipe1.addEventListener('click',function(event){
    event.preventDefault();
    popupEquipe1.style.display='initial';
})

equipe2.addEventListener('click',function(event){
    event.preventDefault();
    popupEquipe2.style.display='initial';
})

equipe3.addEventListener('click',function(event){
    event.preventDefault();
    popupEquipe3.style.display='initial';
})

equipe4.addEventListener('click',function(event){
    event.preventDefault();
    popupEquipe4.style.display='initial';
})