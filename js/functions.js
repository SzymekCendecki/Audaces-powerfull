let heroCreator=require("./heroCreator.js");
let prepareFightText=("./firstFight");

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

//funkcja losująca kolory dla włosów, skóry i oczu
module.exports.randomColor = function(y){
  let color1 = [];
    let a = Math.round(Math.random()*255);
  	let b = Math.round(Math.random()*255);
  	let c = Math.round(Math.random()*255);
  	color1.splice(0, 1, a);
  	color1.splice(1, 1, b);
  	color1.splice(2, 1, c);
  	heroCreator.hero.splice(y, 1, color1)
}

//funkcja losująca wagę/wzrost
function randomWeightHeight(number1, number2, position, x){
  let what = Math.round(Math.random()*number1 + number2);
  heroCreator.hero.splice(position, 1, what + x);
}

module.exports.weigthHeight = function(race){
    if(race == "człowiek"){ randomWeightHeight(80, 40, 13, " kg"); randomWeightHeight(60, 150, 14, " cm");
    }else if(race == "półork"){ randomWeightHeight(90, 50, 13, " kg"); randomWeightHeight(50, 170, 14, " cm");
    }else if(race == "ork"){ randomWeightHeight(100, 80, 13, " kg"); randomWeightHeight(70, 170, 14, " cm");
    }else if(race == "półelf"){ randomWeightHeight(60, 40, 13, " kg"); randomWeightHeight(45, 165, 14, " cm");
    }else if(race == "elf"){ randomWeightHeight(50, 40, 13, " kg"); randomWeightHeight(30, 180, 14, " cm");
    }else if(race == "krasnolud"){ randomWeightHeight(30, 70, 13, " kg"); randomWeightHeight(45, 100, 14, " cm");
    }else if(race == "gnom"){ randomWeightHeight(20, 50, 13, " kg"); randomWeightHeight(50, 90, 14, " cm");
    }else if(race == "niziołek"){ randomWeightHeight(40, 60, 13, " kg"); randomWeightHeight(45, 105, 14, " cm");
    }else if(race == "goblin"){ randomWeightHeight(30, 50, 13, " kg"); randomWeightHeight(40, 80, 14, " cm");
    }else if(race == "trol"){ randomWeightHeight(60, 100, 13, " kg"); randomWeightHeight(70, 190, 14, " cm");
    }else if(race == "półolbrzym"){ randomWeightHeight(90, 210, 13, " kg"); randomWeightHeight(60, 260, 14, " cm");
    }
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
    let randPoints = Math.round(Math.random()*50);
    let points = occupationArray[i] + raceArray[i] + randPoints;
    heroCreator.hero.splice(i + 4, 1, points);
  }
}

module.exports.randomPoints2 = function(race, occupation){
  if(race == "człowiek" && occupation == "wojownik"){ randomPoints(heroCreator.warrior, heroCreator.human);
  }else if(race == "człowiek" && occupation == "złoczyńca"){ randomPoints(heroCreator.criminal, heroCreator.human);
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
//function distance(array){ for(let i=1; i<array.length; i++){ array.splice(i, 1, " " + array[i]); } }

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
//distance(heroCreator.skills); //funkcja towrząca odstęp powiędzy elementami w tablicy z umiejętnościami
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
  //distance(heroCreator.equip);//funkcja towrząca odstęp powiędzy elementami w tablicy z ekwipunkiem
}

//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function(hero, skills, equip){
  $("#randomResult").show();
  $("#nameResult p:nth-child(2)").empty().append(hero[0]);
  $("#sexResult p:nth-child(2)").empty().append(hero[1]);
  $("#raceResult p:nth-child(2)").empty().append(hero[2]);
  $("#occupationResult p:nth-child(2)").empty().append(hero[3]);
  $("#pointsResult div:first-child p").empty().append(hero[4]);
  $("#pointsResult div:nth-child(2) p").empty().append(hero[5]);
  $("#pointsResult div:nth-child(3) p").empty().append(hero[6]);
  $("#pointsResult div:nth-child(4) p").empty().append(hero[7]);
  $("#pointsResult div:nth-child(5) p").empty().append(hero[8]);

  $("#eyesResult p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[9][0])},${parseInt(hero[9][1])}, ${parseInt(hero[9][2])}`);

  $("#hairResult p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[10][0])},${parseInt(hero[10][1])}, ${parseInt(hero[10][2])}`);

  $("#skinResult p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[11][0])},${parseInt(hero[11][1])}, ${parseInt(hero[11][2])}`);

  $("#tattooResult p:nth-child(2)").empty().append(hero[12]);
  $("#weightResult p:nth-child(2)").empty().append(hero[13]);
  $("#heightResult p:nth-child(2)").empty().append(hero[14]);

$("#skillsResult p:nth-child(2), #randomResult #equipResult p:nth-child(2)").empty();

  for(let i=0; i<skills.length; i++){
    $("#skillsResult p:nth-child(2)").append(heroCreator.skills[i] + " ");
  }

  for(let i=0; i<equip.length; i++){
    $("#randomResult #equipResult p:nth-child(2)").append(heroCreator.equip[i] + " ");
  }
}

//zdarzenia dla okien z informacjami
//dla cech
module.exports.featuresShow = function(){
  $("#heroInfo").show();
  $("#heroInfoDescription").html(`<div class='width24p margin2000p'><p>imię</p><p>${heroCreator.hero[0]}</p></div><div class='width24p margin2000p'><p>płeć</p><p>${heroCreator.hero[1]}</p></div><div class='width24p margin2000p'><p>rasa</p><p>${heroCreator.hero[2]}</p></div><div class='width24p margin2000p'><p>profesja</p><p>${heroCreator.hero[3]}</p></div><div class='width100p anotherFlex margin2000p'><div class='width33p'><p>siła</p><p'>${heroCreator.hero[4]}</p></div><div class='width33p'><p>wytrzymałość</p><p>${heroCreator.hero[5]}</p></div><div class='width33p'><p>zręczność</p><p>${heroCreator.hero[6]}</p></div><div class='width33p'><p>inteligencja</p><p>${heroCreator.hero[7]}</p></div><div class='width33p'><p>charyzma</p><p>${heroCreator.hero[8]}</p></div></div><div class='width24p margin2000p'><p>kolor oczu</p><p  id="eColor"></p></div><div class='width24p margin2000p'><p>kolor włosów</p><p id="hColor"></p></div><div class='width24p margin2000p'><p>kolor skóry</p><p id="sColor"></p></div><div class='width24p margin2000p'><p>tatuaże</p><p>${heroCreator.hero[12]}</p></div><div class='width24p margin2000p'><p>waga</p><p>${heroCreator.hero[13]}</p></div><div class='width24p margin2000p'><p>wzrost</p><p>${heroCreator.hero[14]}</p></div>`);

  $("#eColor").css("background-color", `rgb(${parseInt(heroCreator.hero[9][0])},${parseInt(heroCreator.hero[9][1])}, ${parseInt(heroCreator.hero[9][2])}`).addClass("height15px");
  $("#hColor").css("background-color", `rgb(${parseInt(heroCreator.hero[10][0])}, ${parseInt(heroCreator.hero[10][1])}, ${parseInt(heroCreator.hero[10][2])}`).addClass("height15px");
  $("#sColor").css("background-color", `rgb(${parseInt(heroCreator.hero[11][0])}, ${parseInt(heroCreator.hero[11][1])}, ${parseInt(heroCreator.hero[11][2])}`).addClass("height15px");
}
//dla ekwipunku
module.exports.equipShow = function(){
  $("#heroInfo").show();
  $("#heroInfoDescription").empty();
  for(let i=0; i<heroCreator.equip.length; i++){
    $("#heroInfoDescription").append(heroCreator.equip[i] + " ");
  }
  $("#heroInfoDescription").append(`<p class='newRocker textIndent15px'>złoto: <span class="greenText">${heroCreator.gold}</span> szt. zł.</p>`);
}

//dla umiejętności
module.exports.skillsShow = function(){
  $("#heroInfo").show();
  $("#heroInfoDescription").empty();
  for(let i=0; i<heroCreator.skills.length; i++){
    $("#heroInfoDescription").append(heroCreator.skills[i] + " ");
  }
}

//dla zadań
module.exports.tasksShow = function(){
  $("#heroInfo").show()
  $("#heroInfoDescription").empty();
  for(let i=0; i<heroCreator.tasks.length; i++){
    $("#heroInfoDescription").append(heroCreator.tasks[i] + " ");
  }
}

//zamykanie okien
module.exports.closeWindow = function(){
  $("#heroBtns button").prop("disabled", false);
  $("#heroInfo").hide();
}

//kupowanie
module.exports.buying = function(buyItem, priceBuyItem){
  $("#mainPartDescription").empty();
  for(let i=0; i<buyItem.length; i++){
     $("#mainPartDescription").append("<p id='"+i+"'></p>");
     $("#"+i).append("<span class='greenText'>" + buyItem[i] + " <span class='blackText'>" + priceBuyItem[i] + " szt. zł.</span></span>");

     $("#"+i).on("click", ()=>{
      if(priceBuyItem[i] <= heroCreator.gold[0]){
        heroCreator.gold.splice(0, 1, heroCreator.gold[0] - priceBuyItem[i]);
        heroCreator.equip.push(buyItem[i]);
        $("#alerts").html("<p class='newRocker greenText center margin2000p'>Kupiono: " + buyItem[i] + "</p>");
        setTimeout(function(){ $("#alerts").empty(); }, 3000);
      }else{
        $("#alerts").html("<p class='newRocker redText center margin2000p'>Brak złota !!!</p>");
        setTimeout(function(){ $("#alerts").empty(); }, 3000);
      }
    });
   }
}

//sprzedawanie
module.exports.selling = function(){
  $("#mainPartDescription").empty();
  for(let i=0; i<heroCreator.equip.length; i++){
    if(heroCreator.equip[i] == "paczka"){
       $("#mainPartDescription").append("<p id='"+heroCreator.equip[i]+"' class='redText newRocker'>"+heroCreator.equip[i]+"</p>");
    }else{
      $("#mainPartDescription").append("<p id='"+heroCreator.equip[i]+"' class='greenText newRocker'>"+heroCreator.equip[i]+" <span class='blackText'>0,5 szt. zł.</span</p>");
    }
  }

  $("#mainPartDescription p").click(function () {
     if($(this).attr("id") == "paczka"){
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
}

//przygotowanie do walki
//funkcja optymalizująca pętle dla broni, zbroi i tarczy
function battleLoop(where, array){
 for(let i=0; i<array.length; i++){
   where.append("<span class='greenText'>" + array[i] + " </span>");
 }
}

module.exports.prepareFight = function(equip, hero){
  let firstFightTexts = {
    "title":"<p id='titleFirstFight' class='newRocker greenText'>Posiadasz poniższy ekwipunek.</p>",
    "weapon":"<p id='weaponFirstFight' class='newRocker blackText'>broń</p>",
    "armor":"<p id='armorFirstFight' class='newRocker blackText'>zbroje</p>",
    "shield":"<p id='shieldFirstFight' class='newRocker blackText'>tarcze</p>",
    "resultItems":"<p id='resultItems' class='newRocker height15px'></p>",
    "reset":"<p id='reset' class='newRocker redText'>usuń rzeczy</p>"
   }

  $("#mainPartDescription").append(firstFightTexts.title, firstFightTexts.weapon, firstFightTexts.armor, firstFightTexts.shield, firstFightTexts.skills, firstFightTexts.resultItems, firstFightTexts.reset);

//wyświetlenie dostępnej broni
    let weapon = heroCreator.equip.filter(function(el) {
			return el === 'sztylet' || el == "drew. pałka" || el == "krótki miecz" || el == "szabla" || el == "włócznia" || el == "proca" || el == "łuk" || el == "kusza" || el == "kostur" || el == "młot" || el == "topór" || el == "siekiera";
		});

    battleLoop($("#weaponFirstFight"), weapon);

    //wyświetlenie dostępnych zbroi
        let armor = heroCreator.equip.filter(function(el) {
    			return el === 'przeszywanica' || el == "zbroja skórzana" || el == "zbroja ćwiekowana";
    		});

      battleLoop($("#armorFirstFight"), armor);

    //wyświetlenie dostępnych zbroi
        let shield = heroCreator.equip.filter(function(el) {
          return el === 'puklerz' || el == "mała tarcza drew." || el == "mała tarcza metal.";
        });

        battleLoop($("#shieldFirstFight"), shield);

let arr = [];

        $("p span").click(function () {
         arr.push($(this).text());

          if(arr.length > 3){
           arr.splice(3, 1);
           $("#alerts").html("<p class='newRocker redText center margin2000p'>Możesz wybrać tylko trzy rzeczy !!!</p>");
           setTimeout(function(){ $("#alerts").empty(); }, 3000);
         }
         $("#resultItems").empty().append(arr);
    });

    $("#reset").on("click", ()=>{
        arr.splice(0, 3);
       $("#resultItems").empty().append(arr);
    });

    //resetowanie wyników wyborów
        $("#reset").on("click", ()=>{ $("#result2").empty(); });

    //akceptacja wyborów
      $("#agrreChoose").on("click", ()=>{
        $("#mainPartDescription").empty();
      });
}

//tekst końca gry
module.exports.gameOver = function(){
  let txt=[];
  $("#afterWolf, #afterTroll, #afterGrasshopper").hide();
  //wyszkanie płci oraz przypisanie konkretnego słowa do zmiennej
 if(heroCreator.hero[1] == "kobieta"){
   txt.splice(0, 1, "Zakończyłaś");
   txt.splice(1, 1, "Zmęczona");
   txt.splice(2, 1, "poobijana");
   txt.splice(3, 1, "wróciłaś");
   txt.splice(4, 1, "weszłaś");
   txt.splice(5, 1, "mogłaś");
   txt.splice(6, 1, "obudziłaś");
}else if(heroCreator.hero[1] == "mężczyzna" || heroCreator.hero[1] == "nie wiadomo"){
  txt.splice(0, 1, "Zakończyłeś");
  txt.splice(1, 1, "Zmęczony");
  txt.splice(2, 1, "poobijany");
  txt.splice(3, 1, "wróciłeś");
  txt.splice(4, 1, "wszedłeś");
  txt.splice(5, 1, "mogłeś");
  txt.splice(6, 1, "obudziłeś");
 }
  $("#afterWolf, #afterTroll, #afterGrasshopper").hide();
    $("#mainPartDescription").before(`<p id='gameOver' class='newRocker textIndent15px'>${txt[0]} trzecie zadanie. ${txt[1]} i ${txt[2]} ${txt[3]} do osady. Gdy tylko ${txt[4]} do osady zobaczyłeś jak mieszkańcy oraz uczestnicy karawany świętowali. Kapłan uleczył Twoje rany, dzięki temu ${txt[5]} bawić się z innymi. Następnego dnia ${txt[6]} się potwornym kacem, na kopie siana w szczerym polu. I tak nastąpił szczęśliwy koniec tej przygody z dostarczeniem paczki. Jednakże nastał nowy dzień... ale to już inna historia.</p>`);

    $("#mainPart p:nth-child(2)").hide();
    $("#mainPart p:nth-child(3)").hide();
    $("#mainPart p:nth-child(4)").hide();
    $("#gameOver").hide();
}
