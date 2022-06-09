$(function() {
    // Inserer du contenu DANS un élément html:

    // La methode prepend():
    $(".conteneur").prepend("<p>Paragraphe ajouté avec prepend()</p>");
    // equivalent à:
    // $("<p>Paragraphe ajouté avec prepend()</p>").prependTo(".conteneur");

    // La methode append():
    $(".conteneur").append("<ul><li>Element n°1</li><li>Element n°2</li></ul>");
    // equivalent à:
    // $("<ul><li>Element n°1</li><li>Element n°2</li></ul>").appendTo(".conteneur");


    // Ajouter du contenu AVANT ou APRES un élément html:

    // La méthode before():
    $("#p1").before("<p>Paragraphe ajouté avec before()</p>");
    // equivalent à:
    // $("<p>Paragraphe ajouté avec before()</p>").insertBefore('#p1');

    // la méthode after():
    $("#p1").after("<span>Span ajouté avec after().</span>");
    // equivalent à:
    // $("<span>Span ajouté avec after().</span>").insertAfter('#p1');



    // Ajouter du contenu autour d'un élément html:

    // La methode wrapAll(): envelopper tous les elements p de la div.conteneur avec une <section> de classe bleu
    $("p").wrapAll("<section></section>");

    // La methode wrap():
    $("p").wrap("<div></div>");

    // La methode wrapInner():
    $("p").wrapInner("<span></span>");


    // déplacement de contenu dans le DOM:
    $("body").prepend($("#p3"));

});
$('.conteneur').prepend("<p>du texte</p>");
$('.conteneur').append("<ul><li>Item1</li><li>Item2</li></ul>");

$("<ul><li>Item3</li><li>Item4</li></ul>").appendTo('.conteneur');
$('#p1').before("<p>ddddddddd</p>");

$('#p3').after('<p>okkkkkkkkk</p>');

$(".conteneur p").wrapAll("<section class='bleu'></section>");
$(".conteneur p").wrap("<div></div>");