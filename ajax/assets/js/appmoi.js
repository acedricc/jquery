$(function(){

 $.ajax({

    url:'https://jsonplaceholder.typicode.com/users',
    method:'GET',
    datatype:'json',
    data:{},

    beforeSend: function (xhr, settings) {
        console.group('Envoi Ajax 1 : ');
        console.log('Callback beforeSend() - Objet jqXHR : ', xhr)
        console.log('Callback beforeSend() - Objet settings : ', settings);
        console.groupEnd();
     }
    })
})