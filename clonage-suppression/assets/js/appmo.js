$(function(){
 var $conteneurClone = $(".conteneur").clone();
 console.log($conteneurClone);

 $("body").append($conteneurClone);

$($conteneurClone).remove()
// $('.conteneur').eq(1).remove();

// la methode detache()
// suprime et conserve
var cancelled = $('h1').detach()
console.log(cancelled)
//je re attache le h1
$('.conteneur').prepend(cancelled)
})

//la methode empty
//vide le contenu html d'un element
$('h1').empty()
//replace All()
$("<p></p>").replaceAll("p");
$("p").eq(2).replaceWith("<p id +")
