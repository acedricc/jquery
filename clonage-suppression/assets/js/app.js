$(function() {
    // Cloner des élément html

    // La methode clone():
    //On effectue une copie profonde de notre conteneur
    let c2 = $(".conteneur").clone();

    console.log(c2);

    //On place cette copie dans le document (en fin de l'élément body)
    $("body").append(c2);




    // Suprimer des éléments html:

    // La méthode remove():

    //Supprime le paragraphe avec l'id="p1"
    $("p").remove("#p1"); //equivalent à:  $("#p1").remove()


    // La methode detach():

    //Supprime h1 et conserve ses données
    let titre = $("h1").detach();

    //Réinsère h1 au début du body
    titre.prependTo("body");


    // La methode empty():

    $("h1").eq(1).empty();

    
    // La methode unwrap():

    //Supprime le parent des paragraphes si c'est un élément section
    $("p").unwrap("section");




    // Remplacer des elements HTML:

    // La methode replaceAll():
    // remplace les deux titres H1 par:
    $("<p>Un paragraphe à la place du titre</p>").replaceAll("h1");


    // La methode replaceWith():
    //Remplace #p2 par...
    $("#p2").replaceWith("<span>Un élément span</span>");


});