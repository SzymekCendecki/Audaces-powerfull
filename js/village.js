let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {

module.exports.village = function(){

  let villageTexts = {
    "arriveVillage":"<p id='arriveVillage' class='newRocker textIndent15px'>Po trzech dniach, dotarliście już bez przeszkód do Przygranicznej wioski. Rozbiliście obozowisko, przy starym młynie. Zaciekawieni mieszkańcy wyszli ze swych chałup i obleźli karawanę. Co robisz?</p>",

    "lookAroundEnterVillage":"<p id='lookAroundEnterVillage' class='newRocker textIndent15px'>Wioska jest dość duża, składa się z prawie 40 chałup. Otoczona jest wałem ziemnym, z wbitymi w niego, zaostrzonymi palikami. To typowe umocnienie w tym rejonie. Przy rzece stoi stary młyn. Wokół wioski, jak okiem sięgnąć rozciągają się pola.</p>",

    "mainSquareVillage":"<p id='mainSquareVillage' class='newRocker textIndent15px'>Stoisz na placu pośrodku wioski. Przed sobą widzisz kamienną karczmę. Po Twojej lewej stronie jest mały 'kościółek'. Pewnie tam jest mnich, któremu musisz odda paczkę. Co robisz?</p>",

    "lookAroundVillage":"<p id='lookAroundVillage' class='newRocker textIndent15px'>Wioska jakich wiele w regionie. Bydło i ptactwo jest wszędzie. W oddali słychać odgłosy kuźni. Uwagę przykuwa karczma, jedyny kamienny budynek we wiosce.</p>"
  }

  $("#toVillage").on("click", ()=>{
    $("#toVillage, #afterFirstBattle").hide();
    $("#enterVillage, #lookAroundEnterVillage").show();
    $("#mainPartDescription").before(villageTexts.arriveVillage);
  });

  $("#lookAroundEnterVillage").on("click", ()=>{
    $("#mainPartDescription").empty().append(villageTexts.lookAroundEnterVillage);
  });

  $("#enterVillage").on("click", ()=>{
    $("#enterVillage, #lookAroundEnterVillage").hide();
    $("#monk, #blacksmith, #tavern, #lookAroundVillage").show();
    $("#arriveVillage").remove();
    $("#mainPartDescription").before(villageTexts.mainSquareVillage);
  });

  $("#lookAroundVillage").on("click", ()=>{
    $("#mainPartDescription").empty().append(villageTexts.lookAroundVillage);
  });

  $("#monk").on("click", ()=>{
    let c = [];
    if(heroCreator.hero[1] == "kobieta"){
      c.splice(0, 1, "Weszłaś");
    }else{
      c.splice(0, 1, "Wszedłeś");
    }

      $("#mainPartDescription").empty().append(`<p id='monk' class='newRocker textIndent15px'>${c[0]} do kościoła. Panuje w nim lekki zaduch i niewielki półmrok. Podeszłaś do stojącego przy ołtarzu mnicha. Mnich odwrócił się i powiedział: Witaj! Spodziewałem się Ciebie. Ponoć masz dla mnie przesyłkę? Co robisz?</p>`);

  });

  }


});//koniec DOMContentLoaded
