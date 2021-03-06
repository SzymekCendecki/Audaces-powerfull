let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let keys=require("./keys.js");
let mainGameBtns=require("./mainGameBtns.js");
let room=require("./room.js");
let street=require("./street.js");
let caravans=require("./caravans.js");
let firstFight=require("./firstFight.js");
let village=require("./village.js");
let grasshopper=require("./grasshopper.js");
let wolf=require("./wolf.js");
let troll=require("./troll.js");

document.addEventListener("DOMContentLoaded", () => {
//ukrywanie odpowiednich części
$("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults, #gameInfo,  #gameInfoResult, #randomResult, #chooseResult, #unlock, #deleteSkills, #deleteEquip, #choosingResult, #play, #introGameTexts, #skip, #features, #equip, #skills, #tasks, #heroInfo").hide();

//pokój
$("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").hide();

//ulica
  $("#inRoom, #lookAroundStreet, #caravans, #market").hide();

//karawany
  $("#ask, #lookAroundCaravans, #toMarket, #toStreet, #agree").hide();

//targ
  $("#buy, #sell, #lookAroundMarket, #marketToStreet, #marketToCaravans, #go, #lookAroundWagon").hide();

//pierwsza walka - obrona karawany
  $("#prepare, #afterPrepareFirstBattle, #toVillage").hide();

  //po walce - wioska - przybycie karawany do wioski
    $("#enterVillage, #lookAroundEnterVillage, #monk, #tavern, #blacksmith, #lookAroundVillage, #givePackage, #outChurch, #lookAroundBlackSmith, #outBlacksmith, #buyBlackSmith, #sellBlacksmith, #blackboard, #lookAroundTavern, #outTavern").hide();

$("#goTask1, #goTask2, #goTask3").hide();

//zadanie pasikonik
$("#afterPrepareGrasshoper, #prepareGrasshoper").hide();
//zadanie wilk
$("#afterPrepareWolf, #prepareWolf").hide();

//zadanie troll
$("#afterPrepareTroll, #prepareTroll").hide();

//gameOver
$("#gameOver").hide();

//przejście z pierwszego intro do pierwszego menu
setTimeout(function(){
 $("header p, #heroBtns div").fadeIn(750);
 $("body").fadeIn(750).css("background", "beige");
 $("#mainPart h2, #mainPart h3").remove();
 functions.newElement("p", "description", "", $("#mainPart"));
 $("#description").addClass("standardText newRocker").empty().html(firstMenu.textHello);
}, 16000);

//tablica dla zrobionych zadań
module.exports.taskDone = [0, 0, 0];

//funkcje dla przycisków pierwszego menu
 firstMenu.firstMenuBtns();
 heroCreator.random();
 heroCreator.choose();

//funkcje dla "wyskakującego" okienka dla informacji gry
gameInfo.gameInfo();

//funkcja umożliwiajaca rozpoczęcie gry po utworzenu postaci
introGame.showIntro();

//zdarzenia pod przyciskiem
keys.keys();

//zdarzenia dla przycików głownych - cechy, ekwipunek, umiejętności oraz zadania
mainGameBtns.mainGameBtns();

//zdarzenia dla pokoju
room.roomEvents(heroCreator.equip, heroCreator.hero);

//zdarzenia dla ulicy
street.streetEvents();

//zdarzenia dla caravan
caravans.caravansEvents();

//zdarzenia dla pierwszej walki
firstFight.firstFightEvents();

//zdarzenia dla wioski
village.village();

//zdarzenia dla zadania z pasikonikiem
grasshopper.grasshopper();

//zdarzenia dla zadania z wilkiem
wolf.wolf();

//zdarzenia dla zadania z wilkiem
troll.troll();

});//koniec DOMContentLoaded
