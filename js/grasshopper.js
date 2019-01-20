let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let workingFile=require("./workingFile.js");

document.addEventListener("DOMContentLoaded", () => {

 module.exports.grasshopper = function(){

     $("#goTask1").on("click", ()=>{
        $("#afterWolf, #afterTroll").hide();
         let text = [];

        //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
        if(heroCreator.hero[1] == "kobieta"){
          text.splice(0, 1, "Doszłaś");
          text.splice(1, 1, "niedostrzegłaś");
          text.splice(2, 1, "Uznałaś");
          text.splice(3, 1, "uszłyszałaś");
          text.splice(4, 1, "Zaczęłaś");
          text.splice(5, 1, "ujrzałaś");

        }else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
          text.splice(0, 1, "Doszedłeś");
          text.splice(1, 1, "niedostrzegłeś");
          text.splice(2, 1, "Uznałeś");
          text.splice(3, 1, "uszłyszałeś");
          text.splice(4, 1, "Zacząłeś");
          text.splice(5, 1, "ujrzałeś");
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

          $("#mainPartDescription").before(`<div id='grasshopperText' class='newRocker textIndent15px'>Idziesz na pola. Jest ciepło, łany zbóż kołyszą się na wietrze. Jest spokój. Zastanawiasz się czy ten polny stwór to nie majaki pijanych farmerów. Jednak dla świętego spokoju idziesz dalej i rozglądasz się po okolicy. ${text[0]} prawie do końca pól. Niczego niepokojącego ${text[1]}. ${text[2]}, że trzeba się zająć następnym zadaniem. Wtem ${text[3]} dziwne, suche trzaski. ${text[4]} się rozglądać i ${text[5]} jak z pobliskiego rowu zaczął wstawać stwór, wielki jak dorodny bawół. Przecierasz oczy ze zdumienia i nie wierzysz. Ten potwór wygląda jak gigantyczny PASIKONIK!!!!</div><div id='description'></div>`);
          $("#prepareGrasshoper").show();

          $("#prepareGrasshoper").on("click", ()=>{
            $("#afterPrepareGrasshoper").show();
              $("#prepareGrasshoper").hide();
              functions.prepareFight();
          });

          $("#afterPrepareGrasshoper").on("click", ()=>{
            $("#mainPartDescription").empty()
            $("#grasshopperText").remove();
            $("#mainPartDescription").before("<p id='afterGrasshopper' class='newRocker textIndent15px'>Pasikonik wykończony. Twoje cechy podniosły się.</p>");

            heroCreator.hero.splice(4, 1, (heroCreator.hero[4] + 5));
            heroCreator.hero.splice(5, 1, (heroCreator.hero[5] + 5));
            heroCreator.hero.splice(6, 1, (heroCreator.hero[6] + 5));
            heroCreator.hero.splice(7, 1, (heroCreator.hero[7] + 5));
            heroCreator.hero.splice(8, 1, (heroCreator.hero[8] + 5));

            workingFile.taskDone.splice(0, 1, 1);

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
            $("#gameOver").on("click", ()=>{
              functions.gameOver();
            });
            $("#afterPrepareGrasshoper").hide();

          });
        }
   });
 }

});//koniec DOMContentLoaded
