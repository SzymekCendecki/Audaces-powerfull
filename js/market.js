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

document.addEventListener("DOMContentLoaded", () => {
  let marketTexts = {
    "firstText":"<p id='firstTextMarket' class='newRocker textIndent15px'>Stoisz na środku placu targowego. Wokół widzisz stragany, na których możesz kupić potrzebne rzeczy. Co robisz?</p>",

    "lookAroundMarket":"<p class='newRocker textIndent15px margin2000p'>Rozglądasz się po targowisku. Sporo straganów i jeszcze więcej chętnych do zakupu czegokolwiek.</p>"
  }

module.exports.marketTexts = marketTexts;

  //zdarzenie dla pójścia na ulicę
    $("#marketToStreet").on("click", ()=>{
      $("#buy, #sell, #lookAroundMarket, #marketToStreet, #marketToCaravans").hide();
      $("#market, #caravans, #lookAroundStreet, #inRoom").show();
      $("#firstTextMarket").remove();
      $("#mainPartDescription").before(street.streetTexts.firstText).empty();
    });

    //zdarzenie dla pójścia na postój karawan
      $("#marketToCaravans").on("click", ()=>{
        $("#buy, #sell, #lookAroundMarket, #marketToStreet, #marketToCaravans").hide();
        $("#ask, #lookAroundCaravans, #toStreet, #toMarket").show();
        $("#firstTextMarket").remove();
        $("#mainPartDescription").before(caravans.caravansTexts.firstText).empty();

        if(heroCreator.variables[0] == 0){
          $("#ask, #lookAroundCaravans, #toStreet, #toMarket").show(); $("#agree").hide();
        }else{
          $("#agree, #lookAroundCaravans, #toStreet, #toMarket").show(); $("#ask").hide();
        }
      });

      //zdarzenia dla kupowania i sprzedawania
  let buyItem = ["namiot", "torba", "derka", "lampa", "lina", "racja żyw", "sztylet", "kusza", "siodło", "drew. pałka", "puklerz"];
  let priceBuyItem = [5, 1, 1, 1, 1, 1, 8, 12, 10, 4, 12];

      $("#buy").on("click", ()=>{ functions.buying(buyItem, priceBuyItem); });
      $("#sell").on("click", ()=>{ functions.selling(); });

    //rozglądanie się w lokacji: targ
      $("#lookAroundMarket").on("click", ()=>{
        $("#mainPartDescription").empty().append(marketTexts.lookAroundMarket);
      });

});//koniec DOMContentLoaded
