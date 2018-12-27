let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let mainGameBtns=require("./mainGameBtns.js");
let room=require("./room.js");

document.addEventListener("DOMContentLoaded", () => {
 console.log("NIEWIERNE PSY RULEZ!!!!");

//ukrywanie odpowiednich części
$("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults, #gameInfo,  #gameInfoResult, #randomResult, #chooseResult, #unlock, #deleteSkills, #deleteEquip, #choosingResult, #play, #introGameTexts, #skip, #features, #equip, #skills, #tasks, #heroInfo").hide();

//pokój
$("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").hide();

//przejście z pierwszego intro do pierwszego menu
setTimeout(function(){
 $("header p, #heroBtns div").fadeIn(750);
 $("body").fadeIn(750).css("background", "beige");
 $("#mainPart h2, #mainPart h3").remove();
 functions.newElement("p", "description", "", $("#mainPart"));
 $("#description").addClass("standardText newRocker").empty().html(firstMenu.textHello);
}, 16000);

//funkcje dla przycisków pierwszego menu
 firstMenu.firstMenuBtns();
 heroCreator.random();
 heroCreator.choose();

//funkcje dla "wyskakującego" okienka dla informacji gry
gameInfo.gameInfo();

//funkcja umożliwiajaca rozpoczęcie gry po utworzenu postaci
introGame.showIntro();

//zdarzenia dla przycików głownych - cechy, ekwipunek, umiejętności oraz zadania
mainGameBtns.mainGameBtns();

//zdarzenia dla pokoju
room.roomEvents(heroCreator.equip, heroCreator.hero);

});//koniec DOMContentLoaded
