let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {

 module.exports.grasshopper = function(){

   $("#goTask1").on("click", ()=>{
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
        }
        
        if(heroCreator.equip.indexOf("paczka") !== -1){
          $("#alerts").html("<p class='newRocker redText center margin2000p'>Oddaj paczkę !!!</p>");
          setTimeout(function(){ $("#alerts").empty(); }, 3000);
        }else{
          $("#mainBtns button").hide();
          $("#interactionsBtns button").hide();
          $("#goTask2, #goTask3").show();
          $("#mainSquareVillage, #mainSquareVillage2, #monkFirst, #enterVillage, #enterBlackSmith").hide();
          $("#mainPartDescription").empty();

          $("#mainPartDescription").before(`<div class='newRocker textIndent15px'>Idziesz na pola. Jest ciepło, łany zbóż kołyszą się na wietrze. Jest spokój. Zastanawiasz się czy ten polny stwór to nie majaki pijanych farmerów. Jednak dla świętego spokoju idziesz dalej i rozglądasz się po okolicy. ${text[0]} prawie do końca pól. Niczego niepokojącego ${text[1]}. ${text[2]}, że trzeba się zająć następnym zadaniem. Wtem ${text[3]} dziwne, suche trzaski. ${text[4]} się rozglądać i ${text[5]} jak z pobliskiego rowu zaczął wstawać stwór, wielki jak dorodny bawół. Przecierasz oczy ze zdumienia i nie wierzysz. Ten potwór wygląda jak gigantyczny PASIKONIK!!!!</div><div id='description' ></div>`);
        }
   });
 }

});//koniec DOMContentLoaded
