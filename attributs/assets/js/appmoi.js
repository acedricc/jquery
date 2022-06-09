$(function(){
    // la methode attr
    var $pid = $("p").attr("id")
    console.log($pid)
    $("a").attr("href",'#')

    // dans le span d'id valAttr inserez la
    //PHRASE SUIVANT:
    //l'id du bouton ayant la classe big-font
    // EST /
    $('#valAttr').html(`L'id du bouton ayant la classe 'big-font'est${$('.big-font').attr('id')}`)

$('a').attr('target','blank');
//la methode prop
console.log($("#check2").prop('checked'));
$('#check2').prop('numero-super-secret','07717817');
console.log($("#check2"));

// var mns = $('#check2').prop('numero-super-secret');
// console.log('mns = ',mns);

// $('#check2').removeProp('numero-super-secret');
// console.log($('#check2').prop('numero-super-secret'))
// ('#valAttr').removeAttr('class')

// //La methode val() 
// $('#prenom').keyup(function(e){
//     let $valeurInput = $(this).val();
//     $('#valInput').text($valeurInput)
// })

// $('select').change(function(e){
//     let $valeurSelect = $(this).val()
//     console.log($valeurSelect)
// })
// $('#valSelect').text($valeurSelect.join(' / '))

// var str = 'rtttttttttttvcrtcv777777777@@@john@@@'
$('.afficher').css('background-color','green');
$('.afficher').mouseenter(function(){
    $(this).css('background-color','pink');
})

$('.afficher').mouseleave(function(){
    $(this).css('background-color','red')
})
// $('#valInput').
$('#prenom').keyup(function(){
    $(this).val()
    let textInput =$(this).val() 
    console.log(textInput)
    $('#valInput').text(textInput)
})








})

