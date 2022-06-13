$(function(){
    
  $('#b1').on('click',function(evenement){
$('#ex1 h1').fadeOut(1000);

  });

  $('#b2').on('click',function(evenement){
    $('#ex1 h1').fadeIn(1000);
    
      });

      $('#b3').on('click',function(evenement){
        $('#ex1 h1').fadeToggle(1000);
        
          });
    
})