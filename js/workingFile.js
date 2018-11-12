document.addEventListener("DOMContentLoaded", () => {
  console.log("NIEWIERNE PSY RULEZ!!!!");

$("header p, #heroBtns div").hide();

setTimeout(function(){
$("header p, #heroBtns div").fadeIn(750);
$("body").fadeIn(750).css("background", "beige");

}, 16000);

});//koniec DOMContentLoaded
