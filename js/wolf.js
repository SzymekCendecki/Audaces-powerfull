let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let workingFile=require("./workingFile.js");

document.addEventListener("DOMContentLoaded", () => {

 module.exports.wolf = function(){

     $("#goTask2").on("click", ()=>{
       let text = [];
       $("#afterGrasshopper, #afterTroll").hide();

       //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
      if(heroCreator.hero[1] == "kobieta"){
        text.splice(0, 1, "Miałaś");
        text.splice(1, 1, "Spojrzałaś");
        text.splice(2, 1, "ujrzałaś");
      }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
        text.splice(0, 1, "Miałeś");
        text.splice(1, 1, "Spojrzałeś");
        text.splice(2, 1, "ujrzałeś")
      }

        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#alerts").html("<p class='newRocker redText center margin2000p'>Oddaj paczkę !!!</p>");
          setTimeout(function(){ $("#alerts").empty(); }, 3000);
        }else{
          $("#mainBtns button").hide();
          $("#interactionsBtns button").hide();
          $("#mainSquareVillage, #mainSquareVillage2, #monkFirst, #enterVillage, #enterBlackSmith, #enterTavern").hide();
          $("#mainPartDescription").empty();

          $("#mainPartDescription").before(`<div id='wolfText' class='newRocker textIndent15px'>Idąc drogą w stronę kolejnego zadania, wchodzisz w las. Pachnie igliwiem, ptaki śpiewają. Przechodzisz koło sporej polany. Na jej końcu widzisz łanie z młodymi. Spostrzegła Cię i szybkimi susami zniknęła z młodymi w lesie. Idziesz dalej. W końcu docieraszdo pieczary. Przed nią widzisz resztki zwierząt. W powietrzu unosi się zapach gnijącego mięsa, który potrafi zemdlić nawet takiego twardziela jak Ty. 'No cóż. Zadanie trzeba wykonać, pomimo zapachu. Wchodzisz do jaskini. Jaskinia jest większa i dość dobrze oświetlona niż wydawało się to z zewnątrz. Po kilku krokach dochodzisz prawie do jej środka. Wtem, zza sporego głazu, który stał przy wejściu wyszedł bardzo duży wilk i tarasuje wyjście. Nie możesz ucieć. Musisz walczyć.</div><div id='description'></div>`);

          $("#prepareWolf").show();

          $("#prepareWolf").on("click", ()=>{
            $("#afterPrepareWolf").show();
              $("#prepareWolf").hide();
              functions.prepareFight();
          });

          $("#afterPrepareWolf").on("click", ()=>{
            $("#mainPartDescription").empty()
            $("#wolfText").remove();
            $("#mainPartDescription").before(`<p id='afterWolf' class='newRocker textIndent15px'>To była dzika walka. Nie było 'zlituj się'. Niestety wilk popełnił błąd. Fatalny dla niego w skutkach. Źle się ustawił, a Ty bez skrupółów ${text[0]} jego błąd i z całej siły ${text[1]} w jego kręgosłup. Tylko gruchnęło. Wilk momentalnie padł i zginął w konwulsjach, z pianą na pysku. Twoje cechy podniosły się.</p>`);

            heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
            heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
            heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
            heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
            heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));

            workingFile.taskDone.splice(1, 1, 1);
            console.log(workingFile.taskDone);

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
              console.log("game over");
            }

            $("#afterPrepareWolf").hide();

          });
        }
   });
 }

});//koniec DOMContentLoaded
