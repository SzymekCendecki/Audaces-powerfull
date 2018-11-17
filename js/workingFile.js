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
$("#info").on("click", () => { $("#mainPart").empty().html(firstMenu.firstMenuBtns.info); $("#mainPart p").addClass("standardText newRocker"); });
$("#licence").on("click", () => { $("#mainPart").empty().html(firstMenu.firstMenuBtns.licence); $("#mainPart p").addClass("standardText newRocker"); });
$("#tutorial").on("click", () => { $("#mainPart").empty().html(firstMenu.firstMenuBtns.tutorial); $("#mainPart p").addClass("standardText newRocker"); });
$("#game").on("click", () => {
  $("#info, #licence, #tutorial, #game").addClass("animRotate");
  $("#mainPart p").fadeOut(3000);
  setTimeout(function(){ $("#mainPart p").remove(); }, 3000);
});


});//koniec DOMContentLoaded
