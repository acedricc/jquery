// // //  chemin relatif : reponses/script-01.js
// // // 
// // $(function(){
// //  let $div1 =  $("#ce").children().eq(0);
// //  $div1.css("color","red");
// //   let $divclone = $div1.clone();
// //   $("#ce").append($divclone);
// //   let $child3 = $("#ce").children().eq(3);
// //   $("#ce").prepend($child3);
// //   let $nvDiv = $("#ce").append("<div>il y a 6 div</div>")
  

// //   console.log($divclone);

// })
$(function () {

    $("#ce").children().eq(0).css("color", "red");
  
  
  
    $("#ce").children().eq(0).clone().appendTo("#ce");
  
  

    $("#ce").children().eq(3).prependTo("#ce");
  
  
  
    $("<div> Il y a six(6) div en tout </div>").appendTo("#ce");
  
  
  
    for (let i = 0; i < $("#ce").children().length; i++) {
  
      $("#ce")
  
        .find("div")
  
        .eq(i)
  
        .prepend(` n˚${i + 1} `);
  
    }
  
  });

