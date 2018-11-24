let heroCreator=require("./heroCreator.js");

//funkcja, która tworzy nowy element DOM
module.exports.newElement = function(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

//losowanie punktów
function randomPoints(occupationsPoints, racePoints, tablePosition){
    let randomPoints = Math.round(Math.random()*50);
    let allPoints = randomPoints + occupationsPoints + racePoints;
    heroCreator.hero.splice(tablePosition, 1, allPoints);
    console.log(randomPoints, occupationsPoints, racePoints);
}

module.exports.randomPoints2 = function(race, occupation){
  console.log(race, occupation);
  //człowiek - wojownik
  if(race == "człowiek" && occupation == "wojownik"){
    randomPoints(heroCreator.warrior[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.warrior[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.warrior[2], heroCreator.human[2], 6);
    randomPoints(heroCreator.warrior[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.warrior[4], heroCreator.human[4], 8);
  }else if (race == "człowiek" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.criminal[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.criminal[2], heroCreator. human[2], 6);
    randomPoints(heroCreator.criminal[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.criminal[4], heroCreator.human[4], 8);
  }else if(race == "człowiek" && occupation == "czarodziej"){
    randomPoints(heroCreator.wizard[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.wizard[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.wizard[2], heroCreator.human[2], 6);
    randomPoints(heroCreator.wizard[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.wizard[4], heroCreator.human[4], 8);
  }
}


//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function(hero){
  $("#heroResults").show();
  $("#spanName").text(hero[0]);
  $("#spanSex").text(hero[1]);
  $("#spanRace").text(hero[2]);
  $("#spanOccupation").text(hero[3]);
  $("#spanForce").text(hero[4]);
  $("#spanStrenght").text(hero[5]);
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
