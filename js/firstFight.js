let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {

 let firstFightTexts = {
   "firstText":"<p id='firstTextFirstFight' class='newRocker textIndent15px'>Jedziecie sobie spokojnie. Czas mija na oglądaniu pejzaży z jadącego wozu. Niestety ta sielanka skończyła się wieczorem drugiego dnia. Zaczęło się od zawalonej, przez drzewa drogi. Gdy uczestnicy, z pierwszych wozów karawany uprzątali drzewa, nastąpił atak. Wszyscy muszą walczyć!. Ciebie atakuje bandyta z wielkim mieczem. Po lewej stronie znajduje się przycisk 'przygotuj się', aby wybrać ekwipunek.</p>",

   "title":"<p id='titleFirstFight' class='newRocker greenText'>Wbierz ekwipunek oraz umiejętności.</p>",

   "weapon":"<p id='weaponFirstFight' class='newRocker blackText'>broń</p>",

   "armor":"<p id='armorFirstFight' class='newRocker blackText'>zbroje</p>",

   "shield":"<p id='shieldFirstFight' class='newRocker blackText'>tarcze</p>",

   "skills":"<p id='skillsFirstFight' class='newRocker blackText'>umiejętności</p>",

 }

 module.exports.firstFightTexts = firstFightTexts;

module.exports.firstFightEvents = function(equip, hero){
  $("#prepare").on("click", ()=>{
    console.log(heroCreator.equip);
    $("#mainPartDescription").append(firstFightTexts.title, firstFightTexts.weapon, firstFightTexts.armor, firstFightTexts.shield, firstFightTexts.skills);

//wyświetlenie dostępnej broni
    let weapon = heroCreator.equip.filter(function(el) {
			return el === 'sztylet' || el == "drew. pałka" || el == "krótki miecz" || el == "szabla" || el == "włócznia" || el == "proca" || el == "łuk" || el == "kusza" || el == "kostur";
		});

    for(let i=0; i<weapon.length; i++){
      $("#weaponFirstFight").append("<span class='greenText'>" + weapon[i] + " </span>");
    }



    //wyświetlenie dostępnych zbroi
        let armor = heroCreator.equip.filter(function(el) {
    			return el === 'przeszywanica' || el == "zbroja skórzana" || el == "zbroja ćwiekowana";
    		});

        for(let i=0; i<armor.length; i++){
          $("#armorFirstFight").append("<span class='greenText'>" + armor[i] + " </span>");
        }

        //wyświetlenie dostępnych zbroi
            let shield = heroCreator.equip.filter(function(el) {
              return el === 'puklerz' || el == "mała tarcza drew." || el == "mała tarcza metal.";
            });

            for(let i=0; i<shield.length; i++){
              $("#shieldFirstFight").append("<span class='greenText'>" + shield[i] + " </span>");
            }

            $("p span").click(function () {
                   console.log($(this).text());
              });
  });
}

});//koniec DOMContentLoaded
