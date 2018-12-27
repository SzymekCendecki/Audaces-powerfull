let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
 console.log("NIEWIERNE PSY RULEZ!!!!");

 let roomTexts = {
   "firstText":"<p class='newRocker textIndent15px'>Stoisz w swoim pokoju, w którym znajduje się tylko łóżko, szafa, mały stolik i drewniana skrzynia. Na stoliku leży zawniątko, które musisz oddać mnichowi w przygranicznej wiosce. Co robisz?</p>",

   "lookAroundRoom":"<p class='newRocker textIndent15px margin2000p'>Rozglądasz się po pokoju. Widzisz drewnianą szafę, stojącą w rogu pokoju. Pod oknem stoi niewielka, drewniana skrzynia. Naprzeciw drzwi stoi łóżko. W pomieszczeniu niemiłosiernie wali stęchlizną i kupą szczurów.</p>",

   "wardrobe1":"<p class='newRocker textIndent15px margin2000p'>Otworzyłeś szafę, w której wisi <span id='coat' class='greenText'>płaszcz</span>.</p>",
   "wardrobe2":"<p class='newRocker textIndent15px margin2000p'>Otworzyłeś szafę. Jest pusta.</p>",

   "wardrobe3":"<p class='newRocker textIndent15px margin2000p'>Otworzyłaś szafę, w której wisi <span id='coat' class='greenText'>płaszcz</span>.</p>",
   "wardrobe4":"<p class='newRocker textIndent15px margin2000p'>Otworzyłaś szafę. Jest pusta.</p>",

   "wardrobe5":"<p class='newRocker textIndent15px margin2000p'>Szafa jest pusta.</p>",

   "chest1":"<p class='newRocker textIndent15px margin2000p'>Otworzyłeś skrzynię, w której znajduje się <span id='gold' class='greenText'>12 sztuk</span> złota.</p>",
   "chest2":"<p class='newRocker textIndent15px margin2000p'>Otworzyłeś skrzynię. Jest pusta.</p>",

   "chest3":"<p class='newRocker textIndent15px margin2000p'>Otworzyłaś skrzynię, w której znajduje się <span id='gold' class='greenText'>12 sztuk</span> złota.</p>",
   "chest4":"<p class='newRocker textIndent15px margin2000p'>Otworzyłaś skrzynię. Jest pusta.</p>",

   "chest5":"<p class='newRocker textIndent15px margin2000p'>Skrzynia jest pusta.</p>"
 }

 module.exports.roomTexts = roomTexts;

module.exports.roomEvents = function(equip, hero){
  //zdarzenie dla rozglądania się
  $("#lookAroundRoom").on("click", ()=>{
    $("#mainPartDescription").empty().append(roomTexts.lookAroundRoom);
  });

  //zdarzenie dla szafy
  $("#wardrobe").on("click", ()=>{
      if(heroCreator.equip.indexOf("płaszcz") !== -1){
        if(heroCreator.hero[1] === "kobieta"){
            $("#mainPartDescription").empty().append(roomTexts.wardrobe4);
        }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
          $("#mainPartDescription").empty().append(roomTexts.wardrobe2);
        }
      }else {
        if(heroCreator.hero[1] === "kobieta"){
            $("#mainPartDescription").empty().append(roomTexts.wardrobe3);
        }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
          $("#mainPartDescription").empty().append(roomTexts.wardrobe1);
        }
      }

      $("#coat").on('click', ()=>{
        $("#mainPartDescription").empty().append(roomTexts.wardrobe5);
        heroCreator.equip.push(" płaszcz");
      });
    });

  //zdarzenie dla skrzyni
  $("#chest").on("click", ()=>{
    if(heroCreator.gold[0] == 0){
      if(heroCreator.hero[1] === "kobieta"){
          $("#mainPartDescription").empty().append(roomTexts.chest3);
      }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
          $("#mainPartDescription").empty().append(roomTexts.chest1);
      }
    }else if(heroCreator.gold[0] > 0){
      if(heroCreator.hero[1] === "kobieta"){
          $("#mainPartDescription").empty().append(roomTexts.chest4);
      }else if(heroCreator.hero[1] === "mężczyzna" || heroCreator.hero[1] === "nie wiadomo"){
        $("#mainPartDescription").empty().append(roomTexts.chest2);
      }
    }

    $("#gold").on('click', ()=>{
      $("#mainPartDescription").empty().append(roomTexts.chest5);
      heroCreator.gold.splice(0, 1, 12);
    });
  });

//zdarzenie dla paczki
  $("#package").on("click", ()=>{
    console.log("paczka");
  });
}


 //pokój  $("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").hide();


});//koniec DOMContentLoaded
