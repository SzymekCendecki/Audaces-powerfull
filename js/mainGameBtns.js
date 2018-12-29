let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
//#features, #equip, #skills, #tasks

module.exports.mainGameBtns = function(){
//zdarzenia dla wyświetlania cech postaci w grze
  $("#features").on("click", ()=>{ functions.featuresShow(); });

//zdarzenia dla wyświetlania ekwipunku w grze
  $("#equip").on("click", ()=>{ functions.equipShow(); });

//zdarzenia dla wyświetlania umiejętności w grze
  $("#skills").on("click", ()=>{ functions.skillsShow(); });

//zdarzenia dla wyświetlania zadań w grze
  $("#tasks").on("click", ()=>{ functions.tasksShow(); });

//zamykanie okna
  $("#heroInfo button:first-child").on("click", ()=>{ functions.closeWindow(); });
}

});//koniec DOMContentLoaded
