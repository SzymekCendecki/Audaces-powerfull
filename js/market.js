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

      //zdarzenia dla kupowania
  let buyItem = ["namiot", "torba", "derka", "lampa", "lina", "racja żyw", "sztylet", "kusza", "siodło", "drew. pałka", "pulerz"];
  let priceBuyItem = [5, 1, 1, 1, 1, 1, 8, 12, 10, 4, 12];

      $("#buy").on("click", ()=>{
        $("#mainPartDescription").empty();
        for(let i=0; i<buyItem.length; i++){
	         $("#mainPartDescription").append("<p id='"+i+"'></p>");
	         $("#"+i).append("<span class='greenText'>" + buyItem[i] + " <span class='blackText'>" + priceBuyItem[i] + " szt. zł.</span></span>");

           $("#"+i).on("click", ()=>{
            if(priceBuyItem[i] <= heroCreator.gold[0]){
              heroCreator.gold.splice(0, 1, heroCreator.gold[0] - priceBuyItem[i]);
              heroCreator.equip.push(" " + buyItem[i]);
              $("#alerts").html("<p class='newRocker greenText center margin2000p'>Kupiono: " + buyItem[i] + "</p>");
              setTimeout(function(){ $("#alerts").empty(); }, 3000);
            }else{
              $("#alerts").html("<p class='newRocker redText center margin2000p'>Brak złota !!!</p>");
              setTimeout(function(){ $("#alerts").empty(); }, 3000);
            }
          });
         }
       });

       $("#sell").on("click", ()=>{
         $("#mainPartDescription").empty();
         for(let i=0; i<heroCreator.equip.length; i++){
           if(heroCreator.equip[i] == " paczka"){
              $("#mainPartDescription").append("<p id='"+heroCreator.equip[i]+"' class='redText newRocker'>"+heroCreator.equip[i]+"</p>");
           }else{
             $("#mainPartDescription").append("<p id='"+heroCreator.equip[i]+"' class='greenText newRocker'>"+heroCreator.equip[i]+" <span class='blackText'>0,5 szt. zł.</span</p>");
           }
         }

         $("#mainPartDescription p").click(function () {
            if($(this).attr("id") == " paczka"){
              $("#alerts").html("<p class='newRocker redText center margin2000p'>Nie możesz sprzedać przedmiotu fabularnego.</p>");
              setTimeout(function(){ $("#alerts").empty(); }, 3000);
            }else{
              $(this).remove();
              if(heroCreator.equip.indexOf($(this).attr("id")) !== -1){
                  heroCreator.equip.splice(heroCreator.equip.indexOf($(this).attr("id")), 1);
                  heroCreator.gold.splice(0, 1, heroCreator.gold[0] + 0.5)
              }
            }
          });
       });

    //rozglądanie się w lokacji: targ
      $("#lookAroundMarket").on("click", ()=>{
        $("#mainPartDescription").empty().append(marketTexts.lookAroundMarket);
      });

});//koniec DOMContentLoaded
