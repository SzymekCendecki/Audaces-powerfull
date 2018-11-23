let heroCreator=require("./heroCreator.js");

//funkcja, która tworzy nowy element DOM
module.exports.newElement = function(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function(hero){
  $("#randomHeroResults").show();
  $("#spanName").text(hero[0]);
  $("#spanSex").text(hero[1]);
  $("#spanRace").text(hero[2]);
  $("#spanOccupation").text(hero[3]);
  $("#spanForce").text(hero[4]);
  $("#spanStrength").text(hero[5]);
  $("#spanDexterity").text(hero[6]);
  $("#spanIntelligence").text(hero[7]);
  $("#spanCharisma").text(hero[8]);
  $("#spanEyes").text(hero[9]);
  $("#spanHair").text(hero[10]);
  $("#spanSkin").text(hero[11]);
  $("#spanTattoo").text(hero[12]);
  $("#spanWeight").text(hero[13]);
  $("#spanHeight").text(hero[14]);
}
