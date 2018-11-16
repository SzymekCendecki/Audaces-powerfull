let firstMenu = require("./firstMenu.js"); //podstawowe funkcj

document.addEventListener("DOMContentLoaded", () => {
  console.log("NIEWIERNE PSY RULEZ!!!!");

//ukrywanie odpowiednich części
$("header p, #heroBtns div").hide();

//przejście z pierwszego intro do pierwszego menu
setTimeout(function(){
  $("header p, #heroBtns div").fadeIn(750);
  $("body").fadeIn(750).css("background", "beige");
  $("#mainPart").empty().html(firstMenu.textHello);
}, 16000);

//funkcje dla przycisków pierwszego menu
$("#info").on("click", () => { firstMenu.infoBtn(); });
$("#licence").on("click", () => { firstMenu.licenceBtn(); });
$("#tutorial").on("click", () => { firstMenu.tutorialBtn(); });
$("#game").on("click", () => {
  $("#info, #licence, #tutorial, #game").addClass("animRotate");
  $("#mainPart").addClass("opacity0").delay(3000).remove("p");
});


});//koniec DOMContentLoaded
