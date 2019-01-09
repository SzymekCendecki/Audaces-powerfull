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
         arr.push($(this).text());

          if(arr.length > 3){
           arr.splice(3, 1);
           $("#alerts").html("<p class='newRocker redText center margin2000p'>Możesz wybrać tylko trzy rzeczy !!!</p>");
           setTimeout(function(){ $("#alerts").empty(); }, 3000);
         }
         $("#resultItems").empty().append(arr);
    });

    $("#reset").on("click", ()=>{
        arr.splice(0, 3);
       $("#resultItems").empty().append(arr);
    });

    //resetowanie wyników wyborów
        $("#reset").on("click", ()=>{ $("#result2").empty(); });

    //akceptacja wyborów
      $("#agrreChoose").on("click", ()=>{
        $("#mainPartDescription").empty();
      });
  });


$("#afterPrepareFirstBattle").on("click", ()=>{
  let textVar = [];
  if(heroCreator.hero[1] === "kobieta"){
    textVar.splice(0, 1, "trafiłaś");
    textVar.splice(1, 1, "wysłałaś");
    textVar.splice(2, 1, "przeżyłaś");
    textVar.splice(3, 1, "Rozejrzałaś");
  }else{
    textVar.splice(0, 1, "trafiłeś");
    textVar.splice(1, 1, "wysłałeś");
    textVar.splice(2, 1, "przeżyłeś");
    textVar.splice(3, 1, "Rozejrzałeś");
  }
      $("#mainPartDescription").empty().before(`<p id='afterFirstBattle' class='newRocker textIndent15px'>Jednym z ciosów, ${textVar[0]} swojego przeciwnika i ${textVar[1]} go do piachu. Szczęśliwie ${textVar[2]} walkę. ${textVar[3]} się. Walka równie szybko się skończyła jak zaczęła. Karawana odczeała w gotowości jescze kilka minut. Po nich pochowaliście ciała poległych obrońców i atakujących w jednej, zbiorowej mogile, niedaleko drogi. Po krótkich modlitwach odjechaliście. Twoje cechy podniosły się.</p>`);

          $("#firstTextFirstFight").remove();
          $("#prepare, #afterPrepareFirstBattle").hide();
          $("#toVillage").show();

    heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
    heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
    heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
    heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
    heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));
  });
}

});//koniec DOMContentLoaded
