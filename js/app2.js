// la methode parent()
$("li").parent("#parents").css("border","1px solid black");

// methode parents() AVEC UN S

$("ul").parents("div").css("background","lightblue");

//methode parentsUntil()
$("#enfants").parentsUntil(".conteneur").css("border","2px double goldenrod ");

//methode closest()
$("#parents").closest("div").css("border", "1px solid red");

$(".li1").closest(".bleu").css("font-size","50px");

//METHODE CHILDREN retourne tous les enfants
$(".conteneur").children("h1").css('color','blue');

$("#methodes").children("p").first().css('color',"violet");
//le selecteur jQuery retourne un objet jQuery
//qui est un objet semblable au tableau
console.log($("#liste").parent());
//convertisson cet objet en tableau
console.log([...$("#liste").parent()]);

//ajoutons en boucle la classe''bleu a tous les élement du tableau

[...$("#liste").parent()].forEach((el)=>{
    el.classList.add("bleu");
})

// reset de la couleur de fond de la 
//div.conteneur2 en utilisant la methode parent()
$("#liste").parent().css("background-color","")

$("ul").parent(".conteneur2").css("background-color","")
// la methode siblings() pour cibler les frere et soeur
$("#liste li:first-child").siblings(":odd").css("color","blue");

//la methode next() selectionner le frere suivant
$("#liste li:first-child").next().css("color","red");

//la methode next ALL tous ceux d'apres()
$("#liste li:nth-child(3)").nextAll(":odd").css("text-decoration","underline");

//la methode nextUntil()selectioner des element frere jusqua l'element souhaiter

//La methode nextUntil
$("#liste li:nth-child(3)").nextUntil("#liste li:nth-child(6)").css({ "font-weight": "bold", "font-size": "40px" });


