let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
  let streetTexts = {
    "firstText":"<p id='firstTextStreet' class='newRocker textIndent15px'>Stoisz przed domem. Aby udać się do wyznaczonego celu, najlepiej zabrać się z jakąś karawaną. Idziesz w kierunku bramy miasta. Przy bramie znajduje się targ. To dobry czas i miejsce, aby uzupełnić zapasy na dalszą podróż. Co robisz?</p>",
    "lookAroundStreet":"<p class='newRocker textIndent15px margin2000p'>Typowa ulica dzielnicy Najemników, miasta Erharuf. Częściowo brukowana. Pobliskie budynki są niskie i drewniane, maksymalnie jednopiętrowe. Nic specjalnego.</p>"
  }

  module.exports.roomTexts = streetTexts;

module.exports.streetEvents = function(){

  //zdarzenie dla wchodzenie do pokoju
  $("#outRoom").on("click", ()=>{
    $("#outRoom, #wardrobe, #chest, #lookAroundRoom").hide();
    $("#inRoom, #lookAroundStreet, #caravans, #market").show();
    $("#secondTextRoom").remove();
    $("#mainPartDescription").before(streetTexts.firstText).empty();
  });

//zdarzenie dla pójścia do karawan
  $("#caravans").on("click", ()=>{
    $("#inRoom, #lookAroundStreet, #caravans, #market").hide();
    $("#firstTextStreet").remove();
  });

  //zdarzenie dla pójścia do targu
    $("#market").on("click", ()=>{
      $("#inRoom, #lookAroundStreet, #caravans, #market").hide();
      $("#firstTextStreet").remove();
    });

  //zdarzenie dla rozglądania się - ulica
  $("#lookAroundStreet").on("click", ()=>{
    $("#mainPartDescription").empty().append(streetTexts.lookAroundStreet);
  });
}

});//koniec DOMContentLoaded
