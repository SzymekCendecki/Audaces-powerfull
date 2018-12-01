let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");

document.addEventListener("DOMContentLoaded", () => {
 console.log("NIEWIERNE PSY RULEZ!!!!");

//ukrywanie odpowiednich części
$("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults, #gameInfo,  #gameInfoResult").hide();

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

//funkcje dla "wyskakującego" okienka dla informacji gry
gameInfo.gameInfo();

});//koniec DOMContentLoaded
