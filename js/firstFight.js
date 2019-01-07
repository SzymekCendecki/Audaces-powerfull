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
   "shield":"<p id='shieldFirstFight' class='newRocker blackText'>tarcze</p>",
   "resultItems":"<p id='resultItems' class='newRocker height15px'></p>",
   "reset":"<p id='reset' class='newRocker redText'>usuń rzeczy</p>"
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

  $("#mainPartDescription").append(firstFightTexts.title, firstFightTexts.weapon, firstFightTexts.armor, firstFightTexts.shield, firstFightTexts.skills, firstFightTexts.resultItems, firstFightTexts.reset);

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

let arr = [];

        $("p span").click(function () {
         console.log($(this).text());
         arr.push($(this).text());

         if(arr.length > 0){
             $("#afterFirstBattle").prop("disabled", false).removeClass("redBtn").addClass("greenBtn");
         }

          if(arr.length > 3){
           arr.splice(3, 1);
           $("#alerts").html("<p class='newRocker redText center margin2000p'>Możesz wybrać tylko trzy rzeczy !!!</p>");
           setTimeout(function(){ $("#alerts").empty(); }, 3000);
         }

         $("#resultItems").empty().append(arr);
        console.log(arr);
    });

    $("#reset").on("click", ()=>{
        arr.splice(0, 3);
       $("#resultItems").empty().append(arr);
      $("#afterFirstBattle").prop("disabled", true).removeClass("greenBtn").addClass("redBtn");
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
