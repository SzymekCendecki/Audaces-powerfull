let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let workingFile=require("./workingFile.js");

document.addEventListener("DOMContentLoaded", () => {

 module.exports.troll = function(){

     $("#goTask3").on("click", ()=>{
       let text = [];
       $("#afterGrasshopper, #afterWolf").hide();

        //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
        if(heroCreator.hero[1] == "kobieta"){
          text.splice(0, 1, "wykorzystałaś");
          text.splice(1, 1, "trafiłaś");
          text.splice(6, 1, "Zakończyłaś");
        }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
          text.splice(0, 1, "Wykorzystałeś");
          text.splice(1, 1, "trafiłeś");
          text.splice(6, 1, "Zakończyłeś");
        }

        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#alerts").html("<p class='newRocker redText center margin2000p'>Oddaj paczkę !!!</p>");
          setTimeout(function(){ $("#alerts").empty(); }, 3000);
        }else{
          $("#mainBtns button").hide();
          $("#interactionsBtns button").hide();
          $("#mainSquareVillage, #mainSquareVillage2, #monkFirst, #enterVillage, #enterBlackSmith, #enterTavern").hide();
          $("#mainPartDescription").empty();

          $("#mainPartDescription").before(`<div id='trollText' class='newRocker textIndent15px'>Idziesz w stronę mostu. Przez las, wąwóz. Wychodzisz na dużą polanę. Na drugim końcu widzisz już zarysy mostu. Z trudem dostrzegasz dużą postać - to chyba ten trol. Podchodzisz bliżej i widzisz jak jakieś osoby coś wykrzykują i machają rękami. Po chwili wszystko ucicha. Duża postać nadal stoi przy moście, reszta przechodzi. Jesteś już blisko mostu. Widzisz ogromnego trola siedzącego na kamieniu, wspartego o dużych rozmiarów maczugę. Gdy już jesteś całkiem blisko trol mówi do Ciebie: 'Opłata za przejście, albo zjeżdżaj!!'. 'Nie mam zamiaru płacić, ani przechodzić. Jestem tutaj z Twojego powodu.' - odpowiadasz. 'Chce, żebyś zaprzestał pobierania nielegalnego myta. Jeżeli tego nie zrobisz będę musiał Cię zabić.' - mówisz dalej. 'Nic z Tego. To jest mój most i będę pobierał myto za jego przejście.' - odparł. Dyplomacja nie wyszła. Musisz z nim walczyć.</div><div id='description'></div>`);

          $("#prepareTroll").show();

          $("#prepareTroll").on("click", ()=>{
            $("#afterPrepareTroll").show();
              $("#prepareTroll").hide();
              functions.prepareFight();
          });

          $("#afterPrepareTroll").on("click", ()=>{
            $("#mainPartDescription").empty()
            $("#trollText").remove();
            $("#mainPartDescription").before(`<p id='afterTroll' class='newRocker textIndent15px'>Walka nie była długa. ${text[0]} szczęście. Udało Ci się go zranić pod pachą. Trol zawył dziko. Przechylił się i stracił równowagę i stoczył się ze skarpy do rzeki. ${text[1]} w dół i ${text[2]} go martwego z roztrzaskaną głową.</p>`);

            heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
            heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
            heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
            heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
            heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));

            workingFile.taskDone.splice(2, 1, 1);

            function checkTask(number, task){
              if(workingFile.taskDone[number] == 1){
                task.hide();
              }else{
                task.show();
              }
            }

            checkTask(0, $("#goTask1"));
            checkTask(1, $("#goTask2"));
            checkTask(2, $("#goTask3"));

            if(workingFile.taskDone[0] == 1 && workingFile.taskDone[1] == 1 && workingFile.taskDone[2] == 1){
              $("#gameOver").show();
            }

            functions.gameOver();
            $("#gameOver").on("click", ()=>{
            functions.gameOver();
            });

            $("#afterPrepareTroll").hide();

          });
        }
   });
 }

});//koniec DOMContentLoaded
