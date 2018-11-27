let heroCreator=require("./heroCreator.js");

//funkcja, która tworzy nowy element DOM
module.exports.newElement = function(nameElement, idName, text, whereAppend){
  let newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
}

//funkcja losująca płeć, rasy, profesji, oczu, włosów, skóry, tatuaży, wagi i wzrostu
module.exports.random = function (table, position){
    let x = Math.round(Math.random()*(table.length-1));
    let y = table[x];
    heroCreator.hero.splice(position, 1, y);
}

//losowanie imienia
module.exports.nameRandom = function(table1, table2){
  if(heroCreator.hero[1] == "kobieta"){
    let x = Math.round(Math.random()*(table1.length-1));
    let y = table1[x];
    heroCreator.hero.splice(0, 1, y);
  }else if(heroCreator.hero[1] == "mężczyzna"){
    let x = Math.round(Math.random()*(table2.length-1));
    let y = table2[x];
    heroCreator.hero.splice(0, 1, y);
  }else{
    let allNames = table2.concat(table1);
    let x = Math.round(Math.random()*(allNames.length-1));
    let y = table2[x];
    heroCreator.hero.splice(0, 1, y);
  }
}

//losowanie punktów postaci
function randomPoints(occupationArray, raceArray){
  for(let i=0; i<5; i++){
    let randomPoints = Math.round(Math.random()*50);
    let points = occupationArray[i] + raceArray[i] + randomPoints;
    heroCreator.hero.splice(i+4, 1, points);
  }
}

module.exports.randomPoints2 = function(race, occupation){
  if(race == "człowiek" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.human);
  }else if (race == "człowiek" && occupation == "złoczyńca") { randomPoints(heroCreator.criminal, heroCreator.human);
  }else if(race == "człowiek" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.human);
  }else if(race == "półork" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.halfOrc);
  }else if(race == "półork" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.halfOrc);
  }else if(race == "półork" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.halfOrc);
  }else if(race == "ork" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.orc);
  }else if(race == "ork" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.orc);
  }else if(race == "ork" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.halfOrc);
  }else if(race == "półelf" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.halfElv);
  }else if(race == "półelf" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.halfElv);
  }else if(race == "półelf" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.halfElv);
  }else if(race == "elf" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.elv);
  }else if(race == "elf" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.elv);
  }else if(race == "elf" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.elv);
  }else if(race == "krasnolud" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.dwarf);
  }else if(race == "krasnolud" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.dwarf);
  }else if(race == "krasnolud" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.dwarf);
  }else if(race == "gnom" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.gnome);
  }else if(race == "gnom" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.gnome);
  }else if(race == "gnom" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.gnome);
  }else if(race == "niziołek" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.halfling);
  }else if(race == "niziołek" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.halfling);
  }else if(race == "niziołek" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.halfling);
  }else if(race == "goblin" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.goblin);
  }else if(race == "goblin" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.goblin);
  }else if(race == "goblin" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.goblin);
  }else if(race == "troll" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.troll);
  }else if(race == "troll" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.troll);
  }else if(race == "troll" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.troll);
  }else if(race == "półolbrzym" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.semiGiant);
  }else if(race == "półolbrzym" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.semiGiant);
  }else if(race == "półolbrzym" && occupation == "czarodziej"){ randomPoints(heroCreator.wizard, heroCreator.semiGiant); }
}

//dodawanie odstępu do wypisanej zawartości tablicy
function distance(array){ for(let i=1; i<array.length; i++){ array.splice(i, 1, " " + array[i]); } }

//losowanie umiejętności
module.exports.randomSkills  = function(){
  //dla wojownika
if(heroCreator.hero[3] === "wojownik"){
   for (let i=0; i<3; i++) {
  let random = Math.round(Math.random()*(heroCreator.skillsWarrior.length-1));
  let is = false;
  for (let j=0; j<heroCreator.skills.length; j++)
  if (heroCreator.skills[j] == random) is = true; if (is) i--; else heroCreator.skills[i] = random;
}
heroCreator.skills.splice(0, 1, heroCreator.skillsWarrior[heroCreator.skills[0]]);
heroCreator.skills.splice(1, 1, heroCreator.skillsWarrior[heroCreator.skills[1]]);
heroCreator.skills.splice(2, 1, heroCreator.skillsWarrior[heroCreator.skills[2]]);
}

//dla złoczyńcy
else if(heroCreator.hero[3] === "złoczyńca"){
  for (let i=0; i<3; i++) {
    let  random = Math.round(Math.random()*(heroCreator.skillsCriminal.length-1));
    let is = false;
    for (let j=0; j<heroCreator.skills.length; j++) if (heroCreator.skills[j] == random) is = true;
     if (is) i--;
    else heroCreator.skills[i] = random;
  }
heroCreator.skills.splice(0, 1, heroCreator.skillsCriminal[heroCreator.skills[0]]);
heroCreator.skills.splice(1, 1, heroCreator.skillsCriminal[heroCreator.skills[1]]);
heroCreator.skills.splice(2, 1, heroCreator.skillsCriminal[heroCreator.skills[2]]);
}

// dla czarodzieja
else if(heroCreator.hero[3] === "czarodziej"){
  for (let i=0; i<3; i++) {
    let random = Math.round(Math.random()*(heroCreator.skillsWizard.length-1));
     let is = false;
     for (let j=0; j<heroCreator.skills.length; j++) if (heroCreator.skills[j] == random) is = true;
     if (is) i--;
     else heroCreator.skills[i] = random;
   }
	heroCreator.skills.splice(0, 1, heroCreator.skillsWizard[heroCreator.skills[0]]);
  heroCreator.skills.splice(1, 1, heroCreator.skillsWizard[heroCreator.skills[1]]);
	heroCreator.skills.splice(2, 1, heroCreator.skillsWizard[heroCreator.skills[2]]);
 }
distance(heroCreator.skills); //funkcja towrząca odstęp powiędzy elementami w tablicy z umiejętnościami
}

//losowanie ekwipunku
module.exports.randomEquip = function (array1, array2, array3, array4){
  let allEquip = array1.concat(array2, array3, array4);
  let equipNumber1 = Math.round(Math.random()*(allEquip.length-1)); let equip1 = allEquip[equipNumber1];
  let equipNumber2 = Math.round(Math.random()*(allEquip.length-1)); let equip2 = allEquip[equipNumber2];
  let equipNumber3 = Math.round(Math.random()*(allEquip.length-1)); let equip3 = allEquip[equipNumber3];
  let equipNumber4 = Math.round(Math.random()*(allEquip.length-1)); let equip4 = allEquip[equipNumber4];
  let equipNumber5 = Math.round(Math.random()*(allEquip.length-1)); let equip5 = allEquip[equipNumber5];
  heroCreator.equip.splice(0, 1, equip1); heroCreator.equip.splice(1, 1, equip2); heroCreator.equip.splice(2, 1, equip3); heroCreator.equip.splice(3, 1, equip4); heroCreator.equip.splice(4, 1, equip5);
  distance(heroCreator.equip);//funkcja towrząca odstęp powiędzy elementami w tablicy z ekwipunkiem
}

//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function(hero, skills, equip){
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
  $("#spanSkills").text(skills);
  $("#spanEquip").text(equip);
}
