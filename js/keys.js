let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");

document.addEventListener("DOMContentLoaded", () => {
//skróty klawiszowe dla otwierania okien
module.exports.keys = function(){
  //dla cech
   $("body").keypress((e)=>{ if(e.key == "c"){ functions.featuresShow(); } });
   $("body").keyup((e)=>{ if(e.key == "c"){ functions.closeWindow(); } });

//dla ekwipunku
 $("body").keypress((e)=>{ if(e.key == "e"){ functions.equipShow(); } });
 $("body").keyup((e)=>{ if(e.key == "e"){ functions.closeWindow(); } });

 //dla umiejętności
 $("body").keypress((e)=>{ if(e.key == "u"){ functions.skillsShow(); } });
 $("body").keyup((e)=>{ if(e.key == "u"){ functions.closeWindow(); } });

 //dla zadań
 $("body").keypress((e)=>{ if(e.key == "z"){ functions.tasksShow(); } });
 $("body").keyup((e)=>{ if(e.key == "z"){ functions.closeWindow(); } });
}

});//koniec DOMContentLoaded
