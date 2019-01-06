let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
 let firstFightTexts = {
   "firstText":"<p id='firstTextFirstFight' class='newRocker textIndent15px'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje bandyta z wielkim mieczem. Po lewej stronie znajduje się przycisk 'przygotuj się', aby wybrać ekwipunek.</p>",
   "title":"<p id='titleFirstFight' class='newRocker greenText'>Posiadasz poniższy ekwipunek.</p>",
   "weapon":"<p id='weaponFirstFight' class='newRocker blackText'>broń</p>",
   "armor":"<p id='armorFirstFight' class='newRocker blackText'>zbroje</p>",
   "shield":"<p id='shieldFirstFight' class='newRocker blackText'>tarcze</p>"
  }

 module.exports.firstFightTexts = firstFightTexts;

 //funkcja optymalizująca pętle dla broni, zbroi i tarczy
function battleLoop(where, array){
  for(let i=0; i<array.length; i++){
    where.append("<span class='greenText'>" + array[i] + " </span>");
  }
}

module.exports.firstFightEvents = function(equip, hero){
  $("#prepare").on("click", ()=>{

  $("#mainPartDescription").append(firstFightTexts.title, firstFightTexts.weapon, firstFightTexts.armor, firstFightTexts.shield, firstFightTexts.skills);

//wyświetlenie dostępnej broni
    let weapon = heroCreator.equip.filter(function(el) {
			return el === 'sztylet' || el == "drew. pałka" || el == "krótki miecz" || el == "szabla" || el == "włócznia" || el == "proca" || el == "łuk" || el == "kusza" || el == "kostur";
		});

    battleLoop($("#weaponFirstFight"), weapon);

    //wyświetlenie dostępnych zbroi
        let armor = heroCreator.equip.filter(function(el) {
    			return el === 'przeszywanica' || el == "zbroja skórzana" || el == "zbroja ćwiekowana";
    		});

      battleLoop($("#armorFirstFight"), armor);

    //wyświetlenie dostępnych zbroi
        let shield = heroCreator.equip.filter(function(el) {
          return el === 'puklerz' || el == "mała tarcza drew." || el == "mała tarcza metal.";
        });

        battleLoop($("#shieldFirstFight"), shield);

let r = ["nie wybrano", "nie wybrano", "nie wybrano"];
        $("p span").click(function () {
         console.log($(this).text());


          if($(this).text() == "sztylet"){
             r.splice(0,1, $(this).text());
          }else if ($(this).text() == "przeszywanica" || $(this).text() == "zbroja skórzana" || $(this).text() == "zbroja ćwiekowana"){
            r.splice(1,1, $(this).text());
          }else if ($(this).text() == "puklerz" || $(this).text() == "mała tarcza drew." || $(this).text() == "mała tarcza metal."){
            r.splice(2,1, $(this).text());
          }


         console.log(r);
    });




    //resetowanie wyników wyborów
        $("#reset").on("click", ()=>{ $("#result2").empty(); });

    //akceptacja wyborów
      $("#agrreChoose").on("click", ()=>{
        $("#mainPartDescription").empty();
      });
  });
}

});//koniec DOMContentLoaded
