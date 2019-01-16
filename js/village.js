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

      "lookAroundChurch":"<p id='lookAroundChurch' class='newRocker textIndent15px'>Jest to niewielki kościółek. Kilka prostych ław. Na końcu stoi niewielki ołtarz poświęcony jakiemuś lokalnemu Bogu.</p>",

      "lookAroundBlackSmith":"<p id='lookAroundChurch' class='newRocker textIndent15px'>Jest to niewielka kuźnia, ale jak na wioskę dobrze wyposażona.</p>",

      "enterBlackSmith":"<p id='enterBlackSmith' class='newRocker textIndent15px'>Wchodzisz do kuźni. Przy kowadle stoi krasnolud i zawzięcie naparza w kawał jakiegoś żelastwa.</p>",

      "enterTavern":"<p id='enterTavern' class='newRocker textIndent15px'>W karczmie jest dość przyjemnie. W powietrzu utrzymuje się zapach pieczonego mięsa. Kilku wieśniaków siedzi i popija z gąsiora. W kącie pomieszczenia siedzi niewielka trupa aktorska. Na ścianie obok kontuaru właściciela karczma jest tablica z ogłoszeniami. Co robisz?</p>",

      "lookAroundTavern":"<p id='lookAroundTavern' class='newRocker textIndent15px'>Typowa karczma, w której można zjeść, wypić czy wynająć pokój.</p>"
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
        $("#lookAroundBlackSmith, #outBlacksmith, #buyBlackSmith, #sellBlacksmith").show();
        $("#monk, #blacksmith, #tavern, #mainSquareVillage, #lookAroundVillage").hide();
        $("#mainPartDescription").before(villageTexts.enterBlackSmith);
        $("#mainPartDescription").empty();
      });

      //zdarzenia dla kupowania
  let buyItem = ["młot", "topór", "pług", "podkowa", "gwoździe", "brona", "siekiera"];
  let priceBuyItem = [5, 5, 10, 1, 0.5, 20, 3];

      $("#buyBlackSmith").on("click", ()=>{ functions.buying(buyItem, priceBuyItem); });
      $("#sellBlacksmith").on("click", ()=>{ functions.selling(); })

//wyjście od kowala
      $("#outBlacksmith").on("click", ()=>{
        $("#lookAroundBlackSmith, #outBlacksmith, #buyBlackSmith, #sellBlacksmith, #enterBlackSmith").hide();
        $("#monk, #blacksmith, #tavern, #lookAroundVillage").show();
        $("#mainPartDescription").empty();

        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#mainSquareVillage").show();
        }else{
            $("#mainPartDescription").empty().append(villageTexts.mainSquareVillage2);
        }
      });

      $("#lookAroundBlackSmith").on("click", () => {
        $("#mainPartDescription").empty().append(villageTexts.lookAroundBlackSmith);
      });

      //zdarzenie dla karczmy
      $("#tavern").on("click", ()=>{
        $("#lookAroundTavern, #outTavern, #blackboard").show();
        $("#monk, #blacksmith, #tavern, #mainSquareVillage, #lookAroundVillage, #outBlacksmith").hide();
        $("#mainPartDescription").before(villageTexts.enterTavern).empty();
      });

      $("#outTavern").on("click", ()=>{
        $("#lookAroundTavern, #outTavern, #blackboard").hide();
        $("#monk, #blacksmith, #tavern, #lookAroundVillage").show();
        $("#mainPartDescription").empty();
        $("#enterTavern").remove();

        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#mainSquareVillage").show();
        }else{
            $("#mainPartDescription").empty().append(villageTexts.mainSquareVillage2);
        }
      });

      let text = ["", "", ""];
      $("#blackboard").on("click", ()=>{
        if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
       text.splice(0, 1, "");
       text.splice(1, 1, "");
       text.splice(2, 1, "");
       text.splice(3, 1, "Brak ogłoszeń.");
     }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1){
       text.splice(0, 1, "");
       text.splice(1, 1, "<button id='task2' class='greenBtn newRocker'>wilk</button>");
       text.splice(2, 1, "<button id='task3' class='greenBtn newRocker'>trol</button>");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else if(heroCreator.tasks.indexOf(" ubij wilka") !== -1){
       text.splice(0, 1, "<button id='task1' class='greenBtn newRocker'>pasikonik</button>");
       text.splice(1, 1, "");
       text.splice(2, 1, "<button id='task3' class='greenBtn newRocker'>trol</button>");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else if(heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
       text.splice(0, 1, "<button id='task1' class='greenBtn newRocker'>pasikonik</button>");
       text.splice(1, 1, "<button id='task2' class='greenBtn newRocker'>wilk</button>");
       text.splice(2, 1, "");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" ubij wilka") !== -1){
       text.splice(0, 1, "");
       text.splice(1, 1, "");
       text.splice(2, 1, "<button id='task3' class='greenBtn newRocker'>trol</button>");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else if(heroCreator.tasks.indexOf(" ubij pasikonika") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
       text.splice(0, 1, "");
       text.splice(1, 1, "<button id='task2' class='greenBtn newRocker'>wilk</button>");
       text.splice(2, 1, "");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else if(heroCreator.tasks.indexOf(" ubij wilka") !== -1 && heroCreator.tasks.indexOf(" rozwiąż konflikt z trolem") !== -1){
       text.splice(0, 1, "<button id='task1' class='greenBtn newRocker'>pasikonik</button>");
       text.splice(1, 1, "");
       text.splice(2, 1, "");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }else{
       text.splice(0, 1, "<button id='task1' class='greenBtn newRocker'>pasikonik</button>");
       text.splice(1, 1, "<button id='task2' class='greenBtn newRocker'>wilk</button>");
       text.splice(2, 1, "<button id='task3' class='greenBtn newRocker'>trol</button>");
       text.splice(3, 1, "Wiszą na niej ogłoszenia.");
     }

     $("#mainPartDescription").html(`<p class='newRocker textIndent15px'>Podchodzisz do tablicy. ${text[3]} <p id='taskBtn' class='flexForBtns marginTop4'>${text[0]} ${text[1]} ${text[2]}</p></p>`);

     //zdarzenia dla podjęcia się pracy
         $("#task1").on("click", ()=>{
           $("#task1").remove();
           heroCreator.tasks.push(" ubij pasikonika");
           $("#goTask1").show();
         });

         $("#task2").on("click", ()=>{
           $("#task2").remove();
           heroCreator.tasks.push(" ubij wilka");
           $("#goTask2").show();
         });
         $("#task3").on("click", ()=>{
           $("#task3").remove();
           heroCreator.tasks.push(" rozwiąż konflikt z trolem");
           $("#goTask3").show();
         });

      });

      $("#lookAroundTavern").on("click", () => {
        $("#mainPartDescription").empty().append(villageTexts.lookAroundTavern);
      });
  }//koniec module.exports.village


}); //koniec DOMContentLoaded
