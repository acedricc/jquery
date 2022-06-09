// if(window.jQuery){
//     document.write('jquery est correctement chargé')
// }

jQuery(document).ready(function(){
console.log('Le DOM est chargé...1')
});

// Abrégé pour 'jQuery'

$(document).ready(function(){
    console.log('LE DOM est chargé..2');
});


//Version la plus utilisés
$(function() {
    console.log('LE DOM est chargé..3');
})

// D4AUTRES LIBRAIRIES PEUVENT UTILISER LE $
//Pour eviter un conflit au cas ou une autre librairie
// utilise le $, on peut utiliser les syntaxes suivantes
// (function($) {

//     // on peut utiliser dollars pour jQuery
// })(jQuery)

// on peut egalement utiliser:
jQuery(document).ready(function($){
 // on peut utiliser dollars pour jQuery
});

//on peut eglement transferer l'alias $ de jQuery
// dans une autre variable:

var _$ = jQuery.noConflict(true);
console.log(_$);

// syntaxe de base jQuery 

// $("selecteur CSS").methode1().methode2()
/*
Sélecteur particulier a jQuery.Facilitent la manipulation des
    :formulaire
 :text
 :password
 :checkbox
: radio
 :submit
:button
reset
input ..cible tous les input,textarea et button
:checked ... cible tous les elements checkbox ou radio button cochés
:selected ... cible les element selectionnés dnas un element selected
:disabled ...cible tous les element qui ont un attribut disabled
*/

// methode has()
$("p").has("span").css("color","red");
//methode filter()
$("span").filter(".souligne").css("color","green")
// methode not()
$("span").not(".souligne").css("color","orange")
// methode first(),last()
$("p").last().css("color","pink")
//eq()
// $("p").eq(1).css("color","blue")
$('#p2').html("<span style='color:red'>il faut ...</span>")
// $('#p2').text("<span style='color:red'>il faut ...</span>")



