$(function() {
    // La methode attr():
    // - utilisée en tant que getter:

    //Retourne la valeur du premier p trouvé
    let pid = $("p").attr("id");
    console.log(pid);
    $('#valAttr').html('La valeur de l\'attribut id trouvé:' + pid);


    // utilisé en tant que setter:
    
    //Ajoute un attribut target à notre lien
    $("a").attr("target","_blank");



    // La methode prop():
    // utilisée en tant que getter:

    console.log($('#check1').prop('checked'));


    // utilisée en tant que setter:

    $('#check2').prop('numero-secret', 125)
    console.log('numero secret:', $('#check2').prop('numero-secret'));


    // La methode removeAttr():
    $('#valAttr').removeAttr('class');

    // la methode removeProp():
    $('#check2').removeProp('numero-secret');
    console.log('numero secret:', $('#check2').prop('numero-secret'));


    // La methode val():
    /*Dès qu'un utilisateur relâche une touche, la valeur de #prenom est 
    récupérée et affichée dans #valInput*/
    $('#prenom').keyup(function(){
        let valeurInput = $(this).val();
        $('#valInput').text(valeurInput);
    });
    
    /*Dès que la valeur change, c'est-à-dire dès qu'une sélection est faite,
    affiche les valeurs sélectionnées dans #val select*/
    $('select').change(function(){
        let valeurSelect = $('select').val();

        //join() permet de récupérer les valeurs d'un tableau sous forme de chaine
        $('#valSelect').text(valeurSelect.join(', '));
    });


    // la méthode hasClass():
    let hasBigFont = $("#b2").hasClass('big-font');
    console.log('hasBigFont : ', hasBigFont);


    // La méthode addClass():

    //Lors du clic sur le bouton #b1...
    $("#b1").click(function(){
        //Si #p3 ne possède pas de class="bleu", on en ajoute une
        if(!$("#p3").hasClass("bleu")){
            $("#p3").addClass("bleu");
        }
        $(".bleu").css("color", "blue");
        $(".bleu").css("border", "1px solid blue");
    });


    // la methode removeClass():
    $("#b2").removeClass('big-font');


    // La methode toggleClass():
    //Lors du clic sur le bouton #b2...
    $("#b2").click(function(){
        // ajoute cacher et afficher au div s'il n'en possede pas ou
        // on les supprime si il les possède:
        $("div").toggleClass("cacher afficher");
        //On applique hide() aux éléments qui possèdent une class="cacher"
        $(".cacher").hide();
        //On applique show() aux éléments qui possèdent une class="afficher"
        $(".afficher").show();
    });


});