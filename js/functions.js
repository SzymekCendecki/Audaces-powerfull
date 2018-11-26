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
function randomPoints(occupationsPoints, racePoints, tablePosition){
    let randomPoints = Math.round(Math.random()*50);
    let allPoints = randomPoints + occupationsPoints + racePoints;
    heroCreator.hero.splice(tablePosition, 1, allPoints);
}

module.exports.randomPoints2 = function(race, occupation){
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
  }else if(race == "półork" && occupation == "wojownik"){
    randomPoints(heroCreator.warrior[0], heroCreator.halfOrc[0], 4);
    randomPoints(heroCreator.warrior[1], heroCreator.halfOrc[1], 5);
    randomPoints(heroCreator.warrior[2], heroCreator.halfOrc[2], 6);
    randomPoints(heroCreator.warrior[3], heroCreator.halfOrc[3], 7);
    randomPoints(heroCreator.warrior[4], heroCreator.halfOrc[4], 8);
}else if(race == "półork" && occupation == "złoczyńca"){
  randomPoints(heroCreator.criminal[0], heroCreator.halfOrc[0], 4);
  randomPoints(heroCreator.criminal[1], heroCreator.halfOrc[1], 5);
  randomPoints(heroCreator.criminal[2], heroCreator.halfOrc[2], 6);
  randomPoints(heroCreator.criminal[3], heroCreator.halfOrc[3], 7);
  randomPoints(heroCreator.criminal[4], heroCreator.halfOrc[4], 8);
}else if(race == "półork" && occupation == "czarodziej"){
  randomPoints(heroCreator.wizard[0], heroCreator.halfOrc[0], 4);
  randomPoints(heroCreator.wizard[1], heroCreator.halfOrc[1], 5);
  randomPoints(heroCreator.wizard[2], heroCreator.halfOrc[2], 6);
  randomPoints(heroCreator.wizard[3], heroCreator.halfOrc[3], 7);
  randomPoints(heroCreator.wizard[4], heroCreator.halfOrc[4], 8);
} else if(race == "ork" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.orc[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.orc[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.Orc[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.orc[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.orc[4], 8);
}else if(race == "ork" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.orc[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.orc[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.orc[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.orc[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.orc[4], 8);
}else if(race == "ork" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.orc[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.orc[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.orc[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.orc[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.orc[4], 8);
} else if(race == "półelf" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.halfElv[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.halfElv[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.halfElv[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.halfElv[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.halfElv[4], 8);
}else if(race == "półelf" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.halfElv[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.halfElv[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.halfElv[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.halfElv[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.halfElv[4], 8);
}else if(race == "półelf" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.halfElv[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.halfElv[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.halfElv[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.halfElv[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.halfElv[4], 8);
}else if(race == "elf" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.elv[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.elv[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.elv[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.elv[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.elv[4], 8);
}else if(race == "elf" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.elv[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.elv[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.elv[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.elv[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.elv[4], 8);
}else if(race == "elf" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.elv[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.elv[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.elv[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.elv[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.elv[4], 8);
}else if(race == "krasnolud" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.dwarf[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.dwarf[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.dwarf[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.dwarf[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.dwarf[4], 8);
}else if(race == "krasnolud" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.dwarf[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.dwarf[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.dwarf[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.dwarf[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.dwarf[4], 8);
}else if(race == "krasnolud" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.dwarf[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.dwarf[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.dwarf[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.dwarf[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.dwarf[4], 8);
}else if(race == "gnom" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.gnome[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.gnome[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.gnome[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.gnome[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.gnome[4], 8);
}else if(race == "gnom" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.gnome[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.gnome[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.gnome[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.gnome[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.gnome[4], 8);
}else if(race == "gnom" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.gnome[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.gnome[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.gnome[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.gnome[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.gnome[4], 8);
}else if(race == "niziołek" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.halfling[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.halfling[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.halfling[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.halfling[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.halfling[4], 8);
}else if(race == "niziołek" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.halfling[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.halfling[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.halfling[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.halfling[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.halfling[4], 8);
}else if(race == "niziołek" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.halfling[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.halfling[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.halfling[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.halfling[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.halfling[4], 8);
}else if(race == "goblin" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.goblin[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.goblin[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.goblin[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.goblin[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.goblin[4], 8);
}else if(race == "goblin" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.goblin[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.goblin[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.goblin[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.goblin[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.goblin[4], 8);
}else if(race == "goblin" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.goblin[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.goblin[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.goblin[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.goblin[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.goblin[4], 8);
} else if(race == "troll" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.troll[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.troll[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.troll[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.troll[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.troll[4], 8);
}else if(race == "troll" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.troll[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.troll[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.troll[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.troll[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.troll[4], 8);
}else if(race == "troll" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.troll[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.troll[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.troll[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.troll[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.troll[4], 8);
}else if(race == "półolbrzym" && occupation == "wojownik"){
randomPoints(heroCreator.warrior[0], heroCreator.semiGiant[0], 4);
randomPoints(heroCreator.warrior[1], heroCreator.semiGiant[1], 5);
randomPoints(heroCreator.warrior[2], heroCreator.semiGiant[2], 6);
randomPoints(heroCreator.warrior[3], heroCreator.semiGiant[3], 7);
randomPoints(heroCreator.warrior[4], heroCreator.semiGiant[4], 8);
}else if(race == "półolbrzym" && occupation == "złoczyńca"){
randomPoints(heroCreator.criminal[0], heroCreator.semiGiant[0], 4);
randomPoints(heroCreator.criminal[1], heroCreator.semiGiant[1], 5);
randomPoints(heroCreator.criminal[2], heroCreator.semiGiant[2], 6);
randomPoints(heroCreator.criminal[3], heroCreator.semiGiant[3], 7);
randomPoints(heroCreator.criminal[4], heroCreator.semiGiant[4], 8);
}else if(race == "półolbrzym" && occupation == "czarodziej"){
randomPoints(heroCreator.wizard[0], heroCreator.semiGiant[0], 4);
randomPoints(heroCreator.wizard[1], heroCreator.semiGiant[1], 5);
randomPoints(heroCreator.wizard[2], heroCreator.semiGiant[2], 6);
randomPoints(heroCreator.wizard[3], heroCreator.semiGiant[3], 7);
randomPoints(heroCreator.wizard[4], heroCreator.semiGiant[4], 8);
}

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
