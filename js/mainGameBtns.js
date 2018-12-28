let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
 console.log("NIEWIERNE PSY RULEZ!!!!");

//#features, #equip, #skills, #tasks

module.exports.mainGameBtns = function(){

//zdarzenia dla wyświetlania cech postaci w grze
  $("#features").on("click", ()=>{
    $("#heroInfo").show();
    $("#heroInfoDescription").html(`<div class='width24p margin2000p'><p>imię</p><p>${heroCreator.hero[0]}</p></div><div class='width24p margin2000p'><p>płeć</p><p>${heroCreator.hero[1]}</p></div><div class='width24p margin2000p'><p>rasa</p><p>${heroCreator.hero[2]}</p></div><div class='width24p margin2000p'><p>profesja</p><p>${heroCreator.hero[3]}</p></div><div class='width100p anotherFlex margin2000p'><div class='width33p'><p>siła</p><p'>${heroCreator.hero[4]}</p></div><div class='width33p'><p>wytrzymałość</p><p>${heroCreator.hero[5]}</p></div><div class='width33p'><p>zręczność</p><p>${heroCreator.hero[6]}</p></div><div class='width33p'><p>inteligencja</p><p>${heroCreator.hero[7]}</p></div><div class='width33p'><p>charyzma</p><p>${heroCreator.hero[8]}</p></div></div><div class='width24p margin2000p'><p>kolor oczu</p><p  id="eColor"></p></div><div class='width24p margin2000p'><p>kolor włosów</p><p id="hColor"></p></div><div class='width24p margin2000p'><p>kolor skóry</p><p id="sColor"></p></div><div class='width24p margin2000p'><p>tatuaże</p><p>${heroCreator.hero[12]}</p></div><div class='width24p margin2000p'><p>waga</p><p>${heroCreator.hero[13]}</p></div><div class='width24p margin2000p'><p>wzrost</p><p>${heroCreator.hero[14]}</p></div>`);

    $("#eColor").css("background-color", `rgb(${parseInt(heroCreator.hero[9][0])},${parseInt(heroCreator.hero[9][1])}, ${parseInt(heroCreator.hero[9][2])}`).addClass("height15px");
    $("#hColor").css("background-color", `rgb(${parseInt(heroCreator.hero[10][0])}, ${parseInt(heroCreator.hero[10][1])}, ${parseInt(heroCreator.hero[10][2])}`).addClass("height15px");
    $("#sColor").css("background-color", `rgb(${parseInt(heroCreator.hero[11][0])}, ${parseInt(heroCreator.hero[11][1])}, ${parseInt(heroCreator.hero[11][2])}`).addClass("height15px");
  });

//zdarzenia dla wyświetlania ekwipunku w grze
  $("#equip").on("click", ()=>{
    $("#heroInfo").show()
    $("#heroInfoDescription").empty().append(heroCreator.equip).append(`<p class='newRocker textIndent15px'>złoto: <span class="greenText">${heroCreator.gold}</span> szt. zł.</p>`);
  });

//zdarzenia dla wyświetlania umiejętności w grze
  $("#skills").on("click", ()=>{
    $("#heroInfo").show();
    $("#heroInfoDescription").empty().append(heroCreator.skills);
  });

//zdarzenia dla wyświetlania zadań w grze
  $("#tasks").on("click", ()=>{
    $("#heroInfo").show()
    $("#heroInfoDescription").empty().append(heroCreator.tasks);
  });

  $("#heroInfo button:first-child").on("click", ()=>{
    $("#heroBtns button").prop("disabled", false);
    $("#heroInfo").hide();
  });

}

});//koniec DOMContentLoaded
