let functions = require("./functions.js");
let firstMenu = require("./firstMenu.js");
let heroCreator = require("./heroCreator.js");
let gameInfo = require("./gameInfo.js");
let introGame = require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {

  module.exports.village = function() {

    let villageTexts = {
      "arriveVillage": "<p id='arriveVillage' class='newRocker textIndent15px'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę. Co robisz?</p>",

      "lookAroundEnterVillage": "<p id='lookAroundEnterVillage' class='newRocker textIndent15px'>Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola.</p>",

      "mainSquareVillage": "<p id='mainSquareVillage' class='newRocker textIndent15px'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Pewnie tam jest mnich, któremu musisz oddać paczkę. Co robisz?</p>",

      "mainSquareVillage2": "<p id='mainSquareVillage2' class='newRocker textIndent15px'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Co robisz?</p>",

      "lookAroundVillage": "<p id='lookAroundVillage' class='newRocker textIndent15px'>Wioska jakich wiele w regionie. Bydło i ptactwo jest wszędzie. W oddali słychać odgłosy kuźni. Uwagę przykuwa karczma, jedyny kamienny budynek we wiosce.</p>",

      "lookAroundChurch":"<p id='lookAroundChurch' class='newRocker textIndent15px'>Jest to niewielki kościółek. Kilka prostych ław. Na końcu stoi niewielki ołtarz poświęcony jakiemuś lokalnemu Bogu.</p>"
    }

    $("#toVillage").on("click", () => {
      $("#toVillage, #afterFirstBattle").hide();
      $("#enterVillage, #lookAroundEnterVillage").show();
      $("#mainPartDescription").before(villageTexts.arriveVillage);
    });

    $("#lookAroundEnterVillage").on("click", () => {
      $("#mainPartDescription").empty().append(villageTexts.lookAroundEnterVillage);
    });

    $("#enterVillage").on("click", () => {
      $("#enterVillage, #lookAroundEnterVillage").hide();
      $("#monk, #blacksmith, #tavern, #lookAroundVillage").show();
      $("#arriveVillage").remove();
      $("#mainPartDescription").before(villageTexts.mainSquareVillage);
    });

    $("#lookAroundVillage").on("click", () => {
      $("#mainPartDescription").empty().append(villageTexts.lookAroundVillage);
    });

    //zdarzenia dla mnicha
    $("#monk").on("click", () => {
      let c = ["", ""];

      if (heroCreator.hero[1] == "kobieta") {
        c.splice(0, 1, "Weszłaś");
        c.splice(1, 1, "Podeszłaś");
      } else {
        c.splice(0, 1, "Wszedłeś");
        c.splice(1, 1, "Podszedłeś");
      }

      $("#lookAroundChurch, #outChurch").show();
      $("#monk, #blacksmith, #tavern, #mainSquareVillage").hide();
      $("#mainPartDescription").empty();

      if(heroCreator.equip.indexOf("paczka") !== -1){
        $("#givePackage").show();

        $("#mainPartDescription").before(`<p id='monkFirst' class='newRocker textIndent15px'>${c[0]} do kościoła. Panuje w nim lekki zaduch i niewielki półmrok. ${c[1]} do stojącego przy ołtarzu mnicha. Mnich odwrócił się i powiedział: Witaj! Spodziewałem się Ciebie. Ponoć masz dla mnie przesyłkę? Co robisz?</p>`);

        //zdarzenie oddawania paczki mnichowi
        $("#givePackage").on("click", () => {
          $("#givePackage").remove();

          if (heroCreator.tasks.indexOf("Zanieś paczkę mnichowi.") !== -1) {
            heroCreator.tasks.splice(heroCreator.tasks.indexOf("Zanieś paczkę mnichowi."), 1);
          }

          if (heroCreator.equip.indexOf("paczka") !== -1) {
            heroCreator.equip.splice(heroCreator.equip.indexOf("paczka"), 1);
          }
        });
      }else{
          $("#mainPartDescription").before(`<p id='monkFirst' class='newRocker textIndent15px'>${c[0]} do kościoła. Panuje w nim lekki zaduch i niewielki półmrok. ${c[1]} do stojącego przy ołtarzu mnicha. Co robisz?</p>`);
      }

      //zdarzenie dla rozglądania się w kościele
      $("#lookAroundChurch").on("click", ()=>{
        $("#mainPartDescription").empty().append(villageTexts.lookAroundChurch);
      });

//wyjście z kościoła
      $("#outChurch").on("click", ()=>{
        $("#outChurch, #lookAroundChurch, #givePackage, #monkFirst, #monkAgain").hide();
        $("#monk, #blacksmith, #tavern").show();
        $("#mainPartDescription").empty();

        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#mainSquareVillage").show();
        }else{
            $("#mainPartDescription").empty().append(villageTexts.mainSquareVillage2);
        }

      });
    }); // koniec zdarzeń dla mnicha

//zdarzenia dla kowala
      $("#blacksmith").on("click", ()=>{
        $("#lookAroundBlackSmith, #outBlacksmitch").show();
        $("#monk, #blacksmith, #tavern, #mainSquareVillage, #lookAroundVillage").hide();
        $("#mainPartDescription").empty();
      });

      $("#outBlacksmitch").on("click", ()=>{
        $("#lookAroundBlackSmith, #outBlacksmitch").hide();
        $("#monk, #blacksmith, #tavern, #mainSquareVillage, #lookAroundVillage").show();
        $("#mainPartDescription").empty();
      });
  }


}); //koniec DOMContentLoaded
