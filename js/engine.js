/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var heroCreator = __webpack_require__(1);

//funkcja, która tworzy nowy element DOM
module.exports.newElement = function (nameElement, idName, text, whereAppend) {
  var newElement = document.createElement(nameElement);
  newElement.id = idName;
  newElement.innerText = text;
  whereAppend.append(newElement);
};

//funkcja losująca płeć, rasy, profesji, oczu, włosów, skóry, tatuaży, wagi i wzrostu
module.exports.random = function (table, position) {
  var x = Math.round(Math.random() * (table.length - 1));
  var y = table[x];
  heroCreator.hero.splice(position, 1, y);
};

//funkcja losująca kolory dla włosów, skóry i oczu
module.exports.randomColor = function (y) {
  var color1 = [];
  var a = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  var c = Math.round(Math.random() * 255);
  color1.splice(0, 1, a);
  color1.splice(1, 1, b);
  color1.splice(2, 1, c);
  heroCreator.hero.splice(y, 1, color1);
};

//funkcja losująca wagę/wzrost
function randomWeightHeight(number1, number2, position, x) {
  var what = Math.round(Math.random() * number1 + number2);
  heroCreator.hero.splice(position, 1, what + x);
}

module.exports.weigthHeight = function (race) {
  if (race == "człowiek") {
    randomWeightHeight(80, 40, 13, " kg");randomWeightHeight(60, 150, 14, " cm");
  } else if (race == "półork") {
    randomWeightHeight(90, 50, 13, " kg");randomWeightHeight(50, 170, 14, " cm");
  } else if (race == "ork") {
    randomWeightHeight(100, 80, 13, " kg");randomWeightHeight(70, 170, 14, " cm");
  } else if (race == "półelf") {
    randomWeightHeight(60, 40, 13, " kg");randomWeightHeight(45, 165, 14, " cm");
  } else if (race == "elf") {
    randomWeightHeight(50, 40, 13, " kg");randomWeightHeight(30, 180, 14, " cm");
  } else if (race == "krasnolud") {
    randomWeightHeight(30, 70, 13, " kg");randomWeightHeight(45, 100, 14, " cm");
  } else if (race == "gnom") {
    randomWeightHeight(20, 50, 13, " kg");randomWeightHeight(50, 90, 14, " cm");
  } else if (race == "niziołek") {
    randomWeightHeight(40, 60, 13, " kg");randomWeightHeight(45, 105, 14, " cm");
  } else if (race == "goblin") {
    randomWeightHeight(30, 50, 13, " kg");randomWeightHeight(40, 80, 14, " cm");
  } else if (race == "trol") {
    randomWeightHeight(60, 100, 13, " kg");randomWeightHeight(70, 190, 14, " cm");
  } else if (race == "półolbrzym") {
    randomWeightHeight(90, 210, 13, " kg");randomWeightHeight(60, 260, 14, " cm");
  }
};

//losowanie imienia
module.exports.nameRandom = function (table1, table2) {
  if (heroCreator.hero[1] == "kobieta") {
    var x = Math.round(Math.random() * (table1.length - 1));
    var y = table1[x];
    heroCreator.hero.splice(0, 1, y);
  } else if (heroCreator.hero[1] == "mężczyzna") {
    var _x = Math.round(Math.random() * (table2.length - 1));
    var _y = table2[_x];
    heroCreator.hero.splice(0, 1, _y);
  } else {
    var allNames = table2.concat(table1);
    var _x2 = Math.round(Math.random() * (allNames.length - 1));
    var _y2 = table2[_x2];
    heroCreator.hero.splice(0, 1, _y2);
  }
};

//losowanie punktów postaci
function randomPoints(occupationArray, raceArray) {
  for (var i = 0; i < 5; i++) {
    var randPoints = Math.round(Math.random() * 50);
    var points = occupationArray[i] + raceArray[i] + randPoints;
    heroCreator.hero.splice(i + 4, 1, points);
  }
}

module.exports.randomPoints2 = function (race, occupation) {
  if (race == "człowiek" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.human);
  } else if (race == "człowiek" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.human);
  } else if (race == "człowiek" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.human);
  } else if (race == "półork" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.halfOrc);
  } else if (race == "półork" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.halfOrc);
  } else if (race == "półork" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.halfOrc);
  } else if (race == "ork" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.orc);
  } else if (race == "ork" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.orc);
  } else if (race == "ork" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.halfOrc);
  } else if (race == "półelf" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.halfElv);
  } else if (race == "półelf" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.halfElv);
  } else if (race == "półelf" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.halfElv);
  } else if (race == "elf" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.elv);
  } else if (race == "elf" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.elv);
  } else if (race == "elf" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.elv);
  } else if (race == "krasnolud" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.dwarf);
  } else if (race == "krasnolud" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.dwarf);
  } else if (race == "krasnolud" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.dwarf);
  } else if (race == "gnom" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.gnome);
  } else if (race == "gnom" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.gnome);
  } else if (race == "gnom" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.gnome);
  } else if (race == "niziołek" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.halfling);
  } else if (race == "niziołek" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.halfling);
  } else if (race == "niziołek" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.halfling);
  } else if (race == "goblin" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.goblin);
  } else if (race == "goblin" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.goblin);
  } else if (race == "goblin" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.goblin);
  } else if (race == "troll" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.troll);
  } else if (race == "troll" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.troll);
  } else if (race == "troll" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.troll);
  } else if (race == "półolbrzym" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior, heroCreator.semiGiant);
  } else if (race == "półolbrzym" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal, heroCreator.semiGiant);
  } else if (race == "półolbrzym" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard, heroCreator.semiGiant);
  }
};

//dodawanie odstępu do wypisanej zawartości tablicy
function distance(array) {
  for (var i = 1; i < array.length; i++) {
    array.splice(i, 1, " " + array[i]);
  }
}

//losowanie umiejętności
module.exports.randomSkills = function () {
  //dla wojownika
  if (heroCreator.hero[3] === "wojownik") {
    for (var i = 0; i < 3; i++) {
      var random = Math.round(Math.random() * (heroCreator.skillsWarrior.length - 1));
      var is = false;
      for (var j = 0; j < heroCreator.skills.length; j++) {
        if (heroCreator.skills[j] == random) is = true;
      }if (is) i--;else heroCreator.skills[i] = random;
    }
    heroCreator.skills.splice(0, 1, heroCreator.skillsWarrior[heroCreator.skills[0]]);
    heroCreator.skills.splice(1, 1, heroCreator.skillsWarrior[heroCreator.skills[1]]);
    heroCreator.skills.splice(2, 1, heroCreator.skillsWarrior[heroCreator.skills[2]]);
  }

  //dla złoczyńcy
  else if (heroCreator.hero[3] === "złoczyńca") {
      for (var _i = 0; _i < 3; _i++) {
        var _random = Math.round(Math.random() * (heroCreator.skillsCriminal.length - 1));
        var _is = false;
        for (var _j = 0; _j < heroCreator.skills.length; _j++) {
          if (heroCreator.skills[_j] == _random) _is = true;
        }if (_is) _i--;else heroCreator.skills[_i] = _random;
      }
      heroCreator.skills.splice(0, 1, heroCreator.skillsCriminal[heroCreator.skills[0]]);
      heroCreator.skills.splice(1, 1, heroCreator.skillsCriminal[heroCreator.skills[1]]);
      heroCreator.skills.splice(2, 1, heroCreator.skillsCriminal[heroCreator.skills[2]]);
    }

    // dla czarodzieja
    else if (heroCreator.hero[3] === "czarodziej") {
        for (var _i2 = 0; _i2 < 3; _i2++) {
          var _random2 = Math.round(Math.random() * (heroCreator.skillsWizard.length - 1));
          var _is2 = false;
          for (var _j2 = 0; _j2 < heroCreator.skills.length; _j2++) {
            if (heroCreator.skills[_j2] == _random2) _is2 = true;
          }if (_is2) _i2--;else heroCreator.skills[_i2] = _random2;
        }
        heroCreator.skills.splice(0, 1, heroCreator.skillsWizard[heroCreator.skills[0]]);
        heroCreator.skills.splice(1, 1, heroCreator.skillsWizard[heroCreator.skills[1]]);
        heroCreator.skills.splice(2, 1, heroCreator.skillsWizard[heroCreator.skills[2]]);
      }
  distance(heroCreator.skills); //funkcja towrząca odstęp powiędzy elementami w tablicy z umiejętnościami
};

//losowanie ekwipunku
module.exports.randomEquip = function (array1, array2, array3, array4) {
  var allEquip = array1.concat(array2, array3, array4);
  var equipNumber1 = Math.round(Math.random() * (allEquip.length - 1));var equip1 = allEquip[equipNumber1];
  var equipNumber2 = Math.round(Math.random() * (allEquip.length - 1));var equip2 = allEquip[equipNumber2];
  var equipNumber3 = Math.round(Math.random() * (allEquip.length - 1));var equip3 = allEquip[equipNumber3];
  var equipNumber4 = Math.round(Math.random() * (allEquip.length - 1));var equip4 = allEquip[equipNumber4];
  var equipNumber5 = Math.round(Math.random() * (allEquip.length - 1));var equip5 = allEquip[equipNumber5];
  heroCreator.equip.splice(0, 1, equip1);heroCreator.equip.splice(1, 1, equip2);heroCreator.equip.splice(2, 1, equip3);heroCreator.equip.splice(3, 1, equip4);heroCreator.equip.splice(4, 1, equip5);
  distance(heroCreator.equip); //funkcja towrząca odstęp powiędzy elementami w tablicy z ekwipunkiem
};

//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function (hero, skills, equip) {
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

  $("#eyesResult p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[9][0]) + "," + parseInt(hero[9][1]) + ", " + parseInt(hero[9][2]));

  $("#hairResult p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[10][0]) + "," + parseInt(hero[10][1]) + ", " + parseInt(hero[10][2]));

  $("#skinResult p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[11][0]) + "," + parseInt(hero[11][1]) + ", " + parseInt(hero[11][2]));

  $("#tattooResult p:nth-child(2)").empty().append(hero[12]);
  $("#weightResult p:nth-child(2)").empty().append(hero[13]);
  $("#heightResult p:nth-child(2)").empty().append(hero[14]);

  $("#skillsResult p:nth-child(2)").empty().append(skills);
  $("#randomResult #equipResult p:nth-child(2)").empty().append(equip);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var gameInfo = __webpack_require__(2);

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
var hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, [0, 0, 0], [0, 0, 0], [0, 0, 0], "nie wybrano", "nie wybrano", "nie wybrano"];

function check(hero) {
	var x = "nie wybrano";
	if (hero[0] === x && hero[1] === x && hero[2] === x && hero[3] === x && hero[4] === 0 && hero[5] === 0 && hero[6] === 0 && hero[7] === 0 && hero[8] === 0 && hero[12] === x && hero[13] === x && hero[14] === x) {
		$("#play").hide();
	} else {
		$("#play").show();
	}
}

module.exports.hero = hero;

//tablica ekwipunku
var equip = [];module.exports.equip = equip;

//tablica umiejętności
var skills = [];module.exports.skills = skills;

//tablica ze złotem
var gold = [0];module.exports.gold = gold;

//tablica z imionami męskimi
var namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

//tablica z imionami żeńskimi
var namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

//tablica z rasami
var races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];

//tablica z profesjami
var occupations = ["wojownik", "złoczyńca", "czarodziej"];

//tabica z płcią
var sex = ["kobieta", "mężczyzna", "nie wiadomo"];

//tablica z tatuażami
var tattoo = ["brak", "więzienne", "plemienne", "dziwne"];

//tablice z ekwipunkiem
//broń
var equipWeapon = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
var equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
var equipShield = ["puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//inny ekwipunek
var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
var skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];
module.exports.skillsWarrior = skillsWarrior;

//złoczyńcy
var skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];
module.exports.skillsCriminal = skillsCriminal;

//czarodzieja
var skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];
module.exports.skillsWizard = skillsWizard;

//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
var warrior = [5, 5, 0, 0, 0];module.exports.warrior = warrior;
var criminal = [0, 0, 10, 0, 0];module.exports.criminal = criminal;
var wizard = [0, 0, 0, 5, 5];module.exports.wizard = wizard;

var human = [0, 0, 0, 0, 0];module.exports.human = human;
var halfOrc = [3, 3, 0, -3, -3];module.exports.halfOrc = halfOrc;
var orc = [5, 5, 0, -5, -5];module.exports.orc = orc;
var halfElv = [-3, -3, 0, 3, 3];module.exports.halfElv = halfElv;
var elv = [-5, -5, 0, 5, 5];module.exports.elv = elv;
var dwarf = [4, 4, 0, -2, -3];module.exports.dwarf = dwarf;
var gnome = [-2, -2, 3, 3, 0];module.exports.gnome = gnome;
var halfling = [-3, 0, 6, 0, 0];module.exports.halfling = halfling;
var goblin = [2, -2, 4, 0, -4];module.exports.goblin = goblin;
var troll = [2, 0, 0, -2, -2];module.exports.troll = troll;
var semiGiant = [7, 7, -5, -3, 0];module.exports.semiGiant = semiGiant;

module.exports.random = function () {
	$("#randomHero").on("click", function () {
		$("#chooseResult").hide();skills.splice(0, 3);equip.splice(0, 5);
		hero.splice(0, 1, "nie wybrano");hero.splice(1, 1, "nie wybrano");hero.splice(2, 1, "nie wybrano");hero.splice(3, 1, "nie wybrano");hero.splice(4, 1, 0);hero.splice(5, 1, 0);hero.splice(6, 1, 0);hero.splice(7, 1, 0);hero.splice(8, 1, 0);hero.splice(9, 1, [0, 0, 0]);hero.splice(10, 1, [0, 0, 0]);hero.splice(11, 1, [0, 0, 0]);hero.splice(12, 1, "nie wybrano");hero.splice(13, 1, "nie wybrano");hero.splice(14, 1, "nie wybrano");

		$("#play").show();

		functions.random(sex, 1); //losowanie płci
		functions.nameRandom(namesWomen, namesMan); //losowanie imienia
		functions.random(races, 2); //losowanie rasy
		functions.random(occupations, 3); //losowanie profesji
		functions.randomPoints2(hero[2], hero[3]); //losowanie punktów
		functions.randomColor(9); //losowanie koloru oczu
		functions.randomColor(10); //losowanie koloru włosów
		functions.randomColor(11); //losowanie koloru skóry
		functions.random(tattoo, 12); //losowanie tatuaży
		functions.weigthHeight(hero[2]); //losowanie wagi i wzrostu
		functions.randomSkills(); //losowanie umiejętności
		functions.randomEquip(equipWeapon, equipArmor, equipShield, equipOther); //losowanie ekwipunku
		functions.heroCreatorResult(hero, skills, equip); //wyświetlanie wyniów losowania
	});
};

module.exports.choose = function () {
	$("#chooseHero").on("click", function () {
		$("#chooseResult").show();$("#randomResult").hide();$("#chooseHeroDescription > div").hide();skills.splice(0, 3);equip.splice(0, 5);$("#play").hide();
		hero.splice(0, 1, "nie wybrano");hero.splice(1, 1, "nie wybrano");hero.splice(2, 1, "nie wybrano");hero.splice(3, 1, "nie wybrano");hero.splice(4, 1, 0);hero.splice(5, 1, 0);hero.splice(6, 1, 0);hero.splice(7, 1, 0);hero.splice(8, 1, 0);hero.splice(9, 1, [0, 0, 0]);hero.splice(10, 1, [0, 0, 0]);hero.splice(11, 1, [0, 0, 0]);hero.splice(12, 1, "nie wybrano");hero.splice(13, 1, "nie wybrano");hero.splice(14, 1, "nie wybrano");

		//wybór imienia
		$("#chooseName").on("click", function () {
			$("#chooseHeroDescription > div").hide();$("#choosingName").show();
			$("#choosingName button").on("click", function () {
				var name = $("#nameForInput").val().replace(/\d/g, '');
				if (name == "") {
					$("#alerts").html("<p class='newRocker redText center'>Twoja postać musi mieć imię !!!</p>");
					setTimeout(function () {
						$("#alerts").empty();
					}, 3000);
				} else {
					$("#alerts").html("<p class='newRocker greenText center'>Wybrano imię: " + name + "</p>");
					setTimeout(function () {
						$("#alerts").empty();
					}, 3000);
					hero.splice(0, 1, name);
				}
			});
		});

		//funkcja optymalizująca wpisywanie w tablicę wyborów oraz wyietlanie odpowiedniego alertu
		function xxx(what, what1, position) {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano " + what + what1 + ".</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(position, 1, what1);
		}

		//funkcja optymalizująca wyświetlanie opisów dla wyborów
		function yyy(description) {
			$("#chooseHeroDescription > div").hide();
			$("#choosingResults").show();
			$("#choosingResults > p").empty().append(description);
		}

		//wybór płci
		$("#chooseSex").on("click", function () {
			$("#chooseHeroDescription > div").hide();$("#choosingSex").show();
		});
		$("#women").on("click", function () {
			xxx("płeć: ", "kobieta", 1);
		});
		$("#men").on("click", function () {
			xxx("płeć: ", "mężczyzna", 1);
		});
		$("#other").on("click", function () {
			xxx("płeć: ", "nie wiadomo", 1);
		});

		//wybór rasy
		$("#chooseRace").on("click", function () {
			yyy(gameInfo.raceTexts.race);
		});

		$("#human").on("click", function () {
			xxx("rasę: ", "człowiek", 2);yyy(gameInfo.raceTexts.human);
		});
		$("#orc").on("click", function () {
			xxx("rasę: ", "ork", 2);yyy(gameInfo.raceTexts.orc);
		});
		$("#halfOrc").on("click", function () {
			xxx("rasę: ", "półork", 2);yyy(gameInfo.raceTexts.halfOrc);
		});
		$("#halfElv").on("click", function () {
			xxx("rasę: ", "półelf", 2);yyy(gameInfo.raceTexts.halfElv);
		});
		$("#elv").on("click", function () {
			xxx("rasę: ", "elf", 2);yyy(gameInfo.raceTexts.elv);
		});
		$("#dwarf").on("click", function () {
			xxx("rasę: ", "krasnolud", 2);yyy(gameInfo.raceTexts.dwarf);
		});
		$("#halfling").on("click", function () {
			xxx("rasę: ", "niziołek", 2);yyy(gameInfo.raceTexts.halfling);
		});
		$("#gnome").on("click", function () {
			xxx("rasę: ", "gnom", 2);yyy(gameInfo.raceTexts.gnome);
		});
		$("#goblin").on("click", function () {
			xxx("rasę: ", "goblin", 2);yyy(gameInfo.raceTexts.goblin);
		});
		$("#troll").on("click", function () {
			xxx("rasę: ", "trol", 2);yyy(gameInfo.raceTexts.troll);
		});
		$("#semiGiant").on("click", function () {
			xxx("rasę: ", "półolbrzym", 2);yyy(gameInfo.raceTexts.semiGiant);
		});

		//wybór profesji
		$("#chooseOccupation").on("click", function () {
			yyy(gameInfo.occupationTexts.occupation);
		});

		$("#warrior").on("click", function () {
			xxx("profesję: ", "wojownik", 3);yyy(gameInfo.occupationTexts.warrior);
		});
		$("#criminal").on("click", function () {
			xxx("profesję: ", "złoczyńca", 3);yyy(gameInfo.occupationTexts.criminal);
		});
		$("#wizard").on("click", function () {
			xxx("profesję: ", "czarodziej", 3);yyy(gameInfo.occupationTexts.wizard);
		});

		//punkty cech
		$("#choosePoints").on("click", function () {
			yyy(gameInfo.pointsTexts.points);$("#choosingPoints").show();
		});

		$("#forcePoints").on("click", function () {
			yyy(gameInfo.pointsTexts.force);
		});
		$("#strenghtPoints").on("click", function () {
			yyy(gameInfo.pointsTexts.strenght);
		});
		$("#skillPoints").on("click", function () {
			yyy(gameInfo.pointsTexts.skill);
		});
		$("#intellectualsPoints").on("click", function () {
			yyy(gameInfo.pointsTexts.intellectuals);
		});
		$("#charismaPoints").on("click", function () {
			yyy(gameInfo.pointsTexts.charisma);
		});

		var tab = [0, 0, 0, 0, 0, 0, 0];
		$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", true);

		//losowanie punktów cech
		$("#random").on("click", function () {
			$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", false);
			var randPoints = Math.round(Math.random() * 250);
			$("#pointsRandom").empty().append(randPoints);
			tab.splice(5, 1, randPoints);
		});

		function xyz(tab) {
			var x = parseInt(tab[0]) + parseInt(tab[1]) + parseInt(tab[2]) + parseInt(tab[3]) + parseInt(tab[4]);
			tab.splice(6, 1, x);
			$("#pointsRandom").empty().append(tab[5] - tab[6]);

			if (tab[5] - tab[6] <= 0) {
				$("#unlock").show();
				$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", true);
			}
		}

		$("#forceSlider").on("input propertychange", function () {
			tab.splice(0, 1, this.value);xyz(tab);hero.splice(4, 1, this.value);
		});
		$("#strenghtSlider").on("input propertychange", function () {
			tab.splice(1, 1, this.value);xyz(tab);hero.splice(5, 1, this.value);
		});
		$("#dexteritySlider").on("input propertychange", function () {
			tab.splice(2, 1, this.value);xyz(tab);hero.splice(6, 1, this.value);
		});
		$("#intellectualsSlider").on("input propertychange", function () {
			tab.splice(3, 1, this.value);xyz(tab);hero.splice(7, 1, this.value);
		});
		$("#charismaSlider").on("input propertychange", function () {
			tab.splice(4, 1, this.value);xyz(tab);hero.splice(8, 1, this.value);
		});

		$("#unlock").on("click", function () {
			$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", false);
			$("#unlock").hide();
		});

		// funkcja opymalizująca wybieranie koloru oczu, włosów i skóry
		function ccc(what, tab, position, where) {
			what.on("input propertychange", function () {
				tab.splice(position, 1, this.value);
				where.css("background-color", "rgb(" + parseInt(tab[0]) + "," + parseInt(tab[1]) + ", " + parseInt(tab[2]));
			});
		}

		//wybieranie koloru oczu
		$("#chooseEyes").on("click", function () {
			yyy(gameInfo.otherTexts.eyesColor);$("#choosingEyes").show();$("#chooseEyes #resultColorEye").css("background-color", "rgb(" + parseInt(hero[9][0]) + "," + parseInt(hero[9][1]) + ", " + parseInt(hero[9][2]));
		});

		var eyesColor = [0, 0, 0];

		ccc($("#colorEye1"), eyesColor, 0, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
		ccc($("#colorEye2"), eyesColor, 1, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
		ccc($("#colorEye3"), eyesColor, 2, $("#resultColorEye"), hero.splice(9, 1, eyesColor));

		//wybieranie koloru włosów
		$("#chooseHair").on("click", function () {
			yyy(gameInfo.otherTexts.hairColor);$("#choosingHair").show();$("#chooseHair #resultColorHair").css("background-color", "rgb(" + parseInt(hero[10][0]) + "," + parseInt(hero[10][1]) + ", " + parseInt(hero[10][2]));
		});
		var hairColor = [0, 0, 0];

		ccc($("#colorHair1"), hairColor, 0, $("#resultColorHair"), hero.splice(10, 1, hairColor));
		ccc($("#colorHair2"), hairColor, 1, $("#resultColorHair"), hero.splice(10, 1, hairColor));
		ccc($("#colorHair3"), hairColor, 2, $("#resultColorHair"), hero.splice(10, 1, hairColor));

		//wybieranie koloru skóry
		$("#chooseSkin").on("click", function () {
			yyy(gameInfo.otherTexts.skinColor);$("#choosingSkin").show();$("#chooseSkin #resultColorSkin").css("background-color", "rgb(" + parseInt(hero[11][0]) + "," + parseInt(hero[11][1]) + ", " + parseInt(hero[11][2]));
		});
		var skinColor = [0, 0, 0];

		ccc($("#colorSkin1"), skinColor, 0, $("#resultColorSkin"), hero.splice(11, 1, skinColor));
		ccc($("#colorSkin2"), skinColor, 1, $("#resultColorSkin"), hero.splice(11, 1, skinColor));
		ccc($("#colorSkin3"), skinColor, 2, $("#resultColorSkin"), hero.splice(11, 1, skinColor));

		//wybieranie tatuaży
		$("#chooseTattoo").on("click", function () {
			yyy(gameInfo.otherTexts.tattoo);
		});

		$("#noneTattoo").on("click", function () {
			xxx("tatuaż: ", "brak", 12);yyy(gameInfo.otherTexts.noneTattoo);
		});
		$("#jailTattoo").on("click", function () {
			xxx("tatuaż: ", "więzienny", 12);yyy(gameInfo.otherTexts.jailTattoo);
		});
		$("#tribeTattoo").on("click", function () {
			xxx("tatuaż: ", "plemienny", 12);yyy(gameInfo.otherTexts.tribeTattoo);
		});
		$("#strangeTatoo").on("click", function () {
			xxx("tatuaż: ", "dziwny", 12);yyy(gameInfo.otherTexts.strangeTatoo);
		});

		//funkcja ustawiająca zakres suwaka wagi i wzrostu w zależności od wybranej rasy
		function weightHeight(what, tab, position, where, heroPosition) {
			what.on("input propertychange", function () {
				tab.splice(position, 1, this.value);
				where.empty().append("" + parseInt(tab));
				hero.splice(heroPosition, 1, this.value);
			});
		}

		// funkcja opymalizująca wybieranie wagi i wzrostu
		function cba(where, tabPosition, what, num1, num2) {
			where.empty().append(tabPosition);
			document.querySelector(what).min = num1;
			document.querySelector(what).max = num2;
		}

		//wybieranie wagi
		//funkcja ustawiająca zakres suwaka
		function abc() {
			if (hero[2] == "nie wybrano") {
				$("#resultWeight").empty().append("<p class='redText'>Wybierz rasę.</p>" + hero[2]);
			} else if (hero[2] == "człowiek") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 120);
			} else if (hero[2] == "półork") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 140);
			} else if (hero[2] == "ork") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 80, 180);
			} else if (hero[2] == "półelf") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 100);
			} else if (hero[2] == "elf") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 90);
			} else if (hero[2] == "krasnolud") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 70, 100);
			} else if (hero[2] == "gnom") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 70);
			} else if (hero[2] == "niziołek") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 60, 100);
			} else if (hero[2] == "goblin") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 80);
			} else if (hero[2] == "trol") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 100, 160);
			} else if (hero[2] == "półolbrzym") {
				cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 210, 300);
			}
		}

		$("#chooseWeight").on("click", function () {
			yyy(gameInfo.otherTexts.weight);$("#choosingWeight").show();abc();
		});
		var weight = [0];

		weightHeight($("#weight"), weight, 0, $("#resultWeight"), 13);

		//wybieranie wzrostu
		//funkcja ustawiająca zakres suwaka
		function abcHeight() {
			if (hero[2] == "nie wybrano") {
				$("#resultHeight").empty().append("<p class='redText'>Wybierz rasę.</p>" + hero[2]);
			} else if (hero[2] == "człowiek") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 150, 210);
			} else if (hero[2] == "półork") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 170, 220);
			} else if (hero[2] == "ork") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 170, 240);
			} else if (hero[2] == "półelf") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 165, 210);
			} else if (hero[2] == "elf") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 180, 210);
			} else if (hero[2] == "krasnolud") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 100, 145);
			} else if (hero[2] == "gnom") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 90, 140);
			} else if (hero[2] == "niziołek") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 105, 150);
			} else if (hero[2] == "goblin") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 80, 120);
			} else if (hero[2] == "trol") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 190, 260);
			} else if (hero[2] == "półolbrzym") {
				cba($("#chooseHeight #resultHeight"), height[0], "#height", 260, 320);
			}
		}

		$("#chooseHeight").on("click", function () {
			yyy(gameInfo.otherTexts.height);$("#choosingHeight").show();abcHeight();
		});
		var height = [0];

		weightHeight($("#height"), height, 0, $("#resultHeight"), 14);

		//funkcja optymalizująca wybieranie umiejętności i ekwipunku
		function sss(tab, tabLength, what, x, y, z) {
			if (tab.indexOf(what + " ") !== -1) {
				$("#alerts").html("<p class='newRocker redText center'>Wybrano już tą " + x + ".</p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 3000);
			} else if (tab.length < tabLength) {
				$("#alerts").html("<p class='newRocker greenText center'>Wybrano " + x + ": " + what + ".</p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 3000);
				tab.push(what + " ");
				z.append(what + " ");
			} else if (tab.length >= tabLength) {
				$("#alerts").html("<p class='newRocker redText center'>Wybrano już " + y + ".</p>");
				setTimeout(function () {
					$("#alerts").empty();
				}, 3000);
				tab.splice(tabLength, 1);
			}
		}

		//wybieranie umiejętności
		$("#chooseSkills").on("click", function () {
			yyy(gameInfo.otherTexts.skills);$("#choosingSkills").show();$("#deleteSkills").show();

			$("#survivalSkill").on("click", function () {
				sss(skills, 3, "sztuka przetrwania", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#disciplineSkill").on("click", function () {
				sss(skills, 3, "dyscyplina", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#commandSkill").on("click", function () {
				sss(skills, 3, "dowodzenie", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#hitShieldSkill").on("click", function () {
				sss(skills, 3, "uderz. tarczą", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#horseRiddingSkill").on("click", function () {
				sss(skills, 3, "jeździectwo", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#daggerSkill").on("click", function () {
				sss(skills, 3, "sztylet", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#swordSkill").on("click", function () {
				sss(skills, 3, "miecz", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#sabreSkill").on("click", function () {
				sss(skills, 3, "szabla", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#spearSkill").on("click", function () {
				sss(skills, 3, "włócznia", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#bowSkill").on("click", function () {
				sss(skills, 3, "łuk", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#crossBowSkill").on("click", function () {
				sss(skills, 3, "kusza", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#bucklerSkill").on("click", function () {
				sss(skills, 3, "puklerz", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#smallShieldWoddenSkill").on("click", function () {
				sss(skills, 3, "mała tarcza drew.", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#smallShieldMetalSkill").on("click", function () {
				sss(skills, 3, "mała tarcza metal.", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});

			$("#poisonsSkill").on("click", function () {
				sss(skills, 3, "przyg. trucizn", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#climbingSkill").on("click", function () {
				sss(skills, 3, "wspinaczka", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#actingSkill").on("click", function () {
				sss(skills, 3, "aktorstwo", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#acrobaticsSkill").on("click", function () {
				sss(skills, 3, "akrobatyka", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#trapsSkill").on("click", function () {
				sss(skills, 3, "tworz. pułapek", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#sneakingSkill").on("click", function () {
				sss(skills, 3, "szkradanie się", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#stealingSkill").on("click", function () {
				sss(skills, 3, "kradzież kieszonkowa", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#evasionSkill").on("click", function () {
				sss(skills, 3, "uniki", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#woodenStickSkill").on("click", function () {
				sss(skills, 3, "drew. pałka", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#daggerSkill").on("click", function () {
				sss(skills, 3, "sztylet", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#shortSwordSkill").on("click", function () {
				sss(skills, 3, "krótki miecz", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#bluffingSkill").on("click", function () {
				sss(skills, 3, "blefowanie", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});

			$("#readWriteSkill").on("click", function () {
				sss(skills, 3, "pisanie i czytanie", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#demonsSkill").on("click", function () {
				sss(skills, 3, "przyw./odp. demona", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#divinationSkill").on("click", function () {
				sss(skills, 3, "wróżbiarstwo", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#healingSkill").on("click", function () {
				sss(skills, 3, "leczenie ran", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#castSpellSkill").on("click", function () {
				sss(skills, 3, "rzucanie czarów", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#createPotionsSkill").on("click", function () {
				sss(skills, 3, "tworz. eliksirów", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#magicItemsSkill").on("click", function () {
				sss(skills, 3, "tworz. mag. przedm.", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#createOintnentSkill").on("click", function () {
				sss(skills, 3, "tworz. maści", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#astrologySkill").on("click", function () {
				sss(skills, 3, "astrologia", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#createRunesSkill").on("click", function () {
				sss(skills, 3, "tworz. runów", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});
			$("#herbalistsSkill").on("click", function () {
				sss(skills, 3, "zielarstwo", "umiejętność", "trzy umiejętności", $("#resultSkills"));
			});

			$("#deleteSkills").on("click", function () {
				skills.splice(0, 3);$("#resultSkills").empty();
			});
		});

		//wybieranie ekwipunku
		$("#chooseEquip").on("click", function () {
			yyy(gameInfo.otherTexts.equip);$("#choosingEquip").show();$("#deleteEquip").show();
			$("#daggerEquip").on("click", function () {
				sss(equip, 5, "sztylet", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#woodenStickEquip").on("click", function () {
				sss(equip, 5, "drewniana pałka", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#shortSwordEquip").on("click", function () {
				sss(equip, 5, "krótki miecz", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#sabreEquip").on("click", function () {
				sss(equip, 5, "szabla", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#spearEquip").on("click", function () {
				sss(equip, 5, "włócznia", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#slingShotEquip").on("click", function () {
				sss(equip, 5, "proca", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#bowEquip").on("click", function () {
				sss(equip, 5, "łuk", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#gambisonEquip").on("click", function () {
				sss(equip, 5, "przeszywanica", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#leatherArmorEquip").on("click", function () {
				sss(equip, 5, "zbr. skórzana", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#studdedArmorEquip").on("click", function () {
				sss(equip, 5, "zbr. ćwiekowana", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#sbucklerEquip").on("click", function () {
				sss(equip, 5, "puklerz", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#smallShieldWoddenEquip").on("click", function () {
				sss(equip, 5, "mała tarcza drew.", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#smallShieldWMetalEquip").on("click", function () {
				sss(equip, 5, "mała tarcza metal.", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#tindersEquip").on("click", function () {
				sss(equip, 5, "hubka i krzesiwo", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#moneyBagEquip").on("click", function () {
				sss(equip, 5, "mieszek", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#leatherBeltEquip").on("click", function () {
				sss(equip, 5, "pas skórzany", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#needlesThreadEquip").on("click", function () {
				sss(equip, 5, "igły i nici", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#tubePartschmenEquip").on("click", function () {
				sss(equip, 5, "tuba na pergaminy", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#penWritingEquip").on("click", function () {
				sss(equip, 5, "pęk piór do pisania", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#parchments5piecesEquip").on("click", function () {
				sss(equip, 5, "pergaminy 5szt.", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#ordinaryClothesEquip").on("click", function () {
				sss(equip, 5, "zwykłe ubranie", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#clothesEquip").on("click", function () {
				sss(equip, 5, "płaszcz", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#fussyHatEquip").on("click", function () {
				sss(equip, 5, "fikuśny kapelusz", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#travelBagEquip").on("click", function () {
				sss(equip, 5, "torba podróżna", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#purseEquip").on("click", function () {
				sss(equip, 5, "sakwa", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#blanketEquip").on("click", function () {
				sss(equip, 5, "koc", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#tentEquip").on("click", function () {
				sss(equip, 5, "namiot", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#wooddenBowlEquip").on("click", function () {
				sss(equip, 5, "drewniana miska", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#woodenSpoonEquip").on("click", function () {
				sss(equip, 5, "drewniana łyżka", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#torchEquip").on("click", function () {
				sss(equip, 5, "pochodnia", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#oilLampEquip").on("click", function () {
				sss(equip, 5, "lampa oliwna", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#lampOilEquip").on("click", function () {
				sss(equip, 5, "kaganek", "rzecz", "pięć", $("#resultEquip"));
			});
			$("#rope5mEquip").on("click", function () {
				sss(equip, 5, "lina 5m", "rzecz", "pięć", $("#resultEquip"));
			});

			$("#deleteEquip").on("click", function () {
				equip.splice(0, 5);$("#resultEquip").empty();
			});
		});

		//pokazenie dokananych wyborów
		$("#resultChoose").on("click", function () {
			yyy();
			check(hero);

			$("#choosingResult").show();
			$("#choosingResult #resultName p:nth-child(2)").empty().append(hero[0]);
			$("#choosingResult #resultSex p:nth-child(2)").empty().append(hero[1]);
			$("#choosingResult #resultRace p:nth-child(2)").empty().append(hero[2]);
			$("#choosingResult #resultOccupation p:nth-child(2)").empty().append(hero[3]);

			$("#choosingResult #points div:first-child p").empty().append(hero[4]);
			$("#choosingResult #points div:nth-child(2) p").empty().append(hero[5]);
			$("#choosingResult #points div:nth-child(3) p").empty().append(hero[6]);
			$("#choosingResult #points div:nth-child(4) p").empty().append(hero[7]);
			$("#choosingResult #points div:nth-child(5) p").empty().append(hero[8]);

			$("#choosingResult #resultEyes p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[9][0]) + "," + parseInt(hero[9][1]) + ", " + parseInt(hero[9][2]));

			$("#choosingResult #resultHair p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[10][0]) + "," + parseInt(hero[10][1]) + ", " + parseInt(hero[10][2]));

			$("#choosingResult #resultSkin p:nth-child(2)").css("background-color", "rgb(" + parseInt(hero[11][0]) + "," + parseInt(hero[11][1]) + ", " + parseInt(hero[11][2]));

			$("#choosingResult #resultTattoo p:nth-child(2)").empty().append(hero[12]);
			$("#choosingResult #resultWeight p:nth-child(2)").empty().append(hero[13]);
			$("#choosingResult #resultHeight p:nth-child(2)").empty().append(hero[14]);

			$("#choosingResult #resultSkills p:nth-child(2)").empty().append(skills);
			$("#choosingResult #resultEquip p:nth-child(2)").empty().append(equip);
		});
	});
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var heroCreator = "./heroCreator.js";

var raceTexts = {
  "race": "Wybór rasy determinuje wiele cech bohtera. Można wybrać spośród 13 dostępnych ras. Więcej szczegółów na temat każdej rasy dostępne jest po wyborze z opcji.",

  "human": "Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg. Wiek: do 100 lat. Profesja: każda. Modyfikatory rasowe: brak.",

  "halfOrc": "Rasa ta posiada wymieszane cehy ludzi oraz orków. Są silniejsze i wytrzymasze niż przeciętny człowiek. Niestety od człowiek są mniej inteligentne i mniej charyzmatyczne. Wielu półorków stanowi ochronę karawan. Podstawowe cechy: wzrost: 170 - 220cm, waga: 50 - 140kg. Wiek: do 110 lat. Preferowana profesja: wojownik. Modyfikatory: siła +3, wytrzymałość +3, inteligencja -3, charyzma -3.",

  "orc": "Orkowie to koczownicy wojownicy. Z powodu ich ciągłego przemieszczania, niewiele wiadomo o ich zwyczajach. Wiadomo, iż tolerują jedynie magię szamanów własnych klanów. Są nieufni w handlu. Stałe orcze osady są nieliczne, usytuowane na obrzeżach cywilizowanych krain. Podstawowe cechy: wzrost: 170 - 240cm, waga: 80 - 180kg. Wiek: do 120 lat. Preferowana profesja: wojownik. Modyfikatory: siła +5, wytrzymałość +5, inteligencja -5, charyzma -5.",

  "halfElv": "Podobnie ja półorki, półelfy powstały z dwóch różnych ras. Żyją dłużej niż przeciętny człowiek. Nie mają także taich zdolności do magii jak elfy. Podstawowe cechy: wzrost: 165 - 210cm, waga: 40 - 100kg. Wiek: do 350 lat. Preferowana profesja: skłonności do bycia czarodziejem. Modyfikatory: siła -3, wytrzymałość -3, inteligencja +3, charyzma +3. ",

  "elv": "Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg. Wiek: do 1500 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -5, wytrzymałość -5, inteligencja +5, charyzma +5.",

  "dwarf": "Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg. Wiek: do 500 lat. Preferowana profesja: wojownik. Modyfikatory: siła +4, wytrzymałość +4, inteligencja -2, charyzma -3.",

  "gnome": "Gnomy to zręczni rzemieślnicy i majsterkowicze. Lubują się w onstruowaniu różnych mechanizmów i urządzeń. W przeciwieństwie do krasnoludów nie przejawiają zbytniej chamowatości. Podstawowe cechy: wzrost: 90 - 140cm, waga: 50 - 70kg. Wiek: do 400 lat. Preferowana profesja: złoczyńca lub czarodziej. Modyfikatory: siła -2, wytrzymałość -2, zręczność +3, inteligencja +3.",

  "halfling": "Nizołki to przeciwieństwo krasnoludów. Pokojowo nastawiona rasa, zajmująca się rolnictwem. Słyną z wytwarzania najlepszego ziela do fajek, oraz niesamowitej zręczności. Podstawowe cechy: wzrost: 105 - 150cm, waga: 60 - 100kg. Wiek: do 250 lat. Preferowana profesja: złoczyńca. Modyfikatory: siła -3, zręczność +6.",

  "goblin": "Chyba najbardziej znienawidzona rasa na świecie. Mnoży się szybciej niż szczury w kanałach. Nie znają innego życia niż wojna i złodziejstwo. Podstawowe cechy: wzrost: 80 - 120cm, waga: 50 - 80kg. Wiek: do 40 lat. Preferowana profesja: złoczyńca lub wojownik. Modyfikatory: siła 2, wytrzymałość -2, zręczność +4, charyzma -4.",

  "troll": "Trole uznawane są za dziką rasę, co jest nieprawdą (tak jak to, że zamieniają się w kamień od słońca). Chociaż prawdą jest, że unikają ognia. Podstawowe cechy: wzrost: 190 - 260cm, waga: 100 - 160kg. Wiek: do 300 lat. Preferowana profesja: wojownik. Modyfikatory: siła +2, inteligencja -2, charyzma -2.",

  "semiGiant": "Pół dzika rasa. Legendy głoszą, że powstała z ludzi i olbrzymów. Ich osady najczęściej można znajdują się wśród wysokich wzgórz, pokrytych wrzosowisami. Podstawowe cechy: wzrost: 260 - 320cm, waga: 210 - 300kg. Wiek: do 200 lat. Preferowana profesja: wojownik. Modyfikatory: siła +7, wytrzymałość +7, zręczność: -5, inteligencja -3."
};

module.exports.raceTexts = raceTexts;

var occupationTexts = {
  "occupation": "Profesja to zawód, którym para się bohater na co dzień. Do wyboru są trzy profesje: wojownik, złoczyńca oraz czarodziej. Szczegóły są dostępne po wybraniu konkretnej opcji.",

  "warrior": "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.",

  "criminal": "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.",

  "wizard": "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia."
};

module.exports.occupationTexts = occupationTexts;

var pointsTexts = {
  "points": "Punkty cech określają czy postać jest silna, wytrzymała, inteligentna lub charyzmatyczna. Im więcej punktów tym lepiej.",

  "force": "SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.",

  "strenght": "WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby lub trucizny. Ważna dla wojowników.",

  "skill": "ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.",

  "intellectuals": "INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd. Ważna dla czarodziejów.",

  "charisma": "CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów."
};

module.exports.pointsTexts = pointsTexts;

var otherTexts = {
  "eyesColor": "W tej części można wybrać kolor oczu. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor oczu.",
  "hairColor": "W tej części można wybrać kolor włosów. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor włosów.",
  "skinColor": "W tej części można wybrać kolor skóry. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor skóry.",
  "tattoo": "Tatuaże mogą być dziełem sztuki, wyznacznikiem statusu społecznego, miejsca w hierarchii oraz przynależności do klanu lub orgnizacji.",
  "noneTattoo": "Skóra nie jest poryta żadnymi tatuażami.",
  "jailTattoo": "Te tatuaże w więzieniach nazywane są 'dziarami'. Określają one status więźnia, jego miejsca odsiadki oraz jaka jest jego przestępcza specjalizacja. Czasami wytatuowane ważniejsze 'dokonania'.",
  "tribeTattoo": "Tatuaże pleienne określają przynależność do określonego klanu oraz status/pozycję w tym klanie.",
  "strangeTatoo": "Bliżej nie sprecyzowane wzory tatuaży, które najczęściej wzorowane są na wątpliwych wizjach osób parających się tatuowaniem.",
  "weight": "Oreśla wagę postaci, którą można ustawić za pomocą suwaka.",
  "height": "Określa wzrost postaci, który można ustawić za pomocą suwaka.",
  "skills": "Umiejętności określają to, co postać potrafi robić (lepiej lub gorzej). Możesz wybrać maksymalnie trzy umiejętności.",
  "equip": "Ekwipunek to są wszytkie przedmioty, które może używać bohater."
};

module.exports.otherTexts = otherTexts;

module.exports.gameInfo = function () {
  $("#gameInfo").on("click", function () {
    $("#heroBtns button").prop("disabled", true);
    $("#gameInfoResult").show();
    $("#infoDescription").empty();
  });

  $("#gameInfoResult button:first-child").on("click", function () {
    $("#heroBtns button").prop("disabled", false);
    $("#gameInfoResult").hide();
  });

  //wywołanie opisu ras
  $("ol li:first-child span").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.race);
  });
  $("ol li:first-child ul li:first-child").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.human);
  });
  $("ol li:first-child ul li:nth-child(2)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.halfOrc);
  });
  $("ol li:first-child ul li:nth-child(3)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.orc);
  });
  $("ol li:first-child ul li:nth-child(4)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.halfElv);
  });
  $("ol li:first-child ul li:nth-child(5)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.elv);
  });
  $("ol li:first-child ul li:nth-child(6)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.dwarf);
  });
  $("ol li:first-child ul li:nth-child(7)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.gnome);
  });
  $("ol li:first-child ul li:nth-child(8)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.halfling);
  });
  $("ol li:first-child ul li:nth-child(9)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.goblin);
  });
  $("ol li:first-child ul li:nth-child(10)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.troll);
  });
  $("ol li:first-child ul li:nth-child(11)").on("click", function () {
    $("#infoDescription").empty().text(raceTexts.semiGiant);
  });

  //wywołanie opisu profesjami
  $("ol li:nth-child(2) span").on("click", function () {
    $("#infoDescription").empty().text(occupationTexts.occupation);
  });
  $("ol li:nth-child(2) ul li:first-child").on("click", function () {
    $("#infoDescription").empty().text(occupationTexts.warrior);
  });
  $("ol li:nth-child(2) ul li:nth-child(2)").on("click", function () {
    $("#infoDescription").empty().text(occupationTexts.criminal);
  });
  $("ol li:nth-child(2) ul li:nth-child(3)").on("click", function () {
    $("#infoDescription").empty().text(occupationTexts.wizard);
  });

  //wywołanie opisu cech
  $("ol li:nth-child(3) span").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.points);
  });
  $("ol li:nth-child(3) ul li:first-child").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.force);
  });
  $("ol li:nth-child(3) ul li:nth-child(2)").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.strenght);
  });
  $("ol li:nth-child(3) ul li:nth-child(3)").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.skill);
  });
  $("ol li:nth-child(3) ul li:nth-child(4)").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.intellectuals);
  });
  $("ol li:nth-child(3) ul li:nth-child(5)").on("click", function () {
    $("#infoDescription").empty().text(pointsTexts.charisma);
  });
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var firstMenu = __webpack_require__(5);
var heroCreator = __webpack_require__(1);
var gameInfo = __webpack_require__(2);
var introGame = __webpack_require__(6);

document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

  //ukrywanie odpowiednich części
  $("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults, #gameInfo,  #gameInfoResult, #randomResult, #chooseResult, #unlock, #deleteSkills, #deleteEquip, #choosingResult, #play, #introGameTexts, #skip").hide();

  //przejście z pierwszego intro do pierwszego menu
  setTimeout(function () {
    $("header p, #heroBtns div").fadeIn(750);
    $("body").fadeIn(750).css("background", "beige");
    $("#mainPart h2, #mainPart h3").remove();
    functions.newElement("p", "description", "", $("#mainPart"));
    $("#description").addClass("standardText newRocker").empty().html(firstMenu.textHello);
  }, 16000);

  //funkcje dla przycisków pierwszego menu
  firstMenu.firstMenuBtns();
  heroCreator.random();
  heroCreator.choose();

  //funkcje dla "wyskakującego" okienka dla informacji gry
  gameInfo.gameInfo();

  //funkcja umożliwiajaca rozpoczęcie gry po utworzenu postaci
  introGame.showIntro();
}); //koniec DOMContentLoaded

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var heroCreator = "./heroCreator.js";

//tekst powitalny
module.exports.textHello = "Witaj w grze 'Audaces - serce z żelaza', pierwszej grze tekstowej Niewiernych Psów. Powyżej znajdują się cztery przyciski, dzięki którym poznasz podsatwowe informacje o tej wersji gry, licencji gry, samouczka obsługi interfejsu oraz rozpoczniesz grę AUDACES - serce z żelaza. Także tego. Studio Niewiernych Psów, życzy miłej zabawy.";

var firstMenuBtnsText = '{"info":"<p>To kolejna wersja gry Audaces, w której wprowadzone zostały wszystkie nie zrealizowane wcześniej pomysły. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com. Dostępne rozdzielczości: 1366x768 px.</p>", "licence":"<p>UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji).</p><p>POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI.</p><p>Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.</p>", "tutorial":"<p>Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial obok pojawi się odpowiednia informacja. Po wciśnięciu przycisku <strong>GRA</strong>, użytkownik rozpocznie grę. Wtedy będzie można stworzyć lub wylosować swoją postać. Po tym, gracz przejdze do gry. Ekran będzie podzielony na część z przyciskami - głównymi oraz interakcji. W głównej części będzie pojawiał się opis danej lokacji. W części komunikatów będą pojawiać się informacje o dokonanych wyborach oraz dodatkowe inforamcje związane z grą. Część z przyciskami będzie posiadała przyciski umożliwiające dostęp do cech postaci, ekwipunku, umiejętności itd. oraz do opcji, które będzie mógł wybrać w trakcie gry. Na podstawie opisów z głównej części gry, gracz będzie mógł dokonywać wyborów z listy przycisków.</p>"}';

var btnsText = JSON.parse(firstMenuBtnsText);

module.exports.firstMenuBtns = function () {
  $("#info").on("click", function () {
    $("#description").empty().html(btnsText.info);
  });
  $("#licence").on("click", function () {
    $("#description").empty().html(btnsText.licence);
  });
  $("#tutorial").on("click", function () {
    $("#description").empty().html(btnsText.tutorial);
  });

  $("#game").on("click", function () {
    $("#info, #licence, #tutorial, #game").addClass("animRotate");
    $("#description").fadeOut(3000);
    setTimeout(function () {
      $("#description").remove();
      $("#info, #licence, #tutorial, #game").remove();
    }, 3000);
    $("#randomHero, #chooseHero, #gameInfo").delay(3050).fadeIn(750);
  });
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var heroCreator = "./heroCreator.js";

var introGameTexts = {
  "text1": "<p class='animOpacity01'>Mówią, że Dzikie Pustkowia to kraina opuszczona przez Bogów.</p>",
  "text2": "<p class='animOpacity01'>Pełna siedzib mrocznych kultów, wyrzutków społeczeństwa, krwiożerczych bestii i demonów, przywołanych czarną magią z innych wymiarów.</p>",
  "text3": "<p class='animOpacity01'>Krąży wiele legend o ukrytych, nieprzebranych skarbach, o herosach - smokobójcach.</p>",
  "text4": "<p class='animOpacity01'>Dzikie Pustkowia fascynuję i przerażają, jednak wielu śmiałków wędruje w tą część świata w poszukiwaniu bogactw i chwały.</p>",
  "text5": "<p class='animOpacity01'>Większość nie wraca...</p>",
  "text6": "<p class='animOpacity01'>Twoja historia zaczyna się w mieście Erharuf.</p>",
  "text7": "<p class='animOpacity01'>W ostatnim bezpiecznym mieście przed Dzikimi Pustkowiami.</p>",
  "text8": "<p class='animOpacity01'>Na usilną prośbę znajomego kapłana zgadzasz się dostarczyć małą paczkę dla tamtejszego mnicha, rezydującego w niewielkiej wiosce, która leży tuż przy granicy z Dzikimi Pustkowiami.</p>"
};

module.exports.occupationTexts = introGameTexts;

module.exports.showIntro = function () {
  $("#play").on("click", function () {
    $("#randomHero, #chooseHero, #play, #randomResult, #chooseResult").hide();
    $("#introGameTexts, #skip").show();
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text1);
    }, 0);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text2);
    }, 4000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text3);
    }, 8000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text4);
    }, 12000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text5);
    }, 16000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text6);
    }, 20000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text7);
    }, 24000);
    setTimeout(function () {
      $("#introGameTexts").append(introGameTexts.text8);
    }, 28000);
    setTimeout(function () {
      $("#introGameTexts, #skip").hide();
    }, 35000);

    $("#skip").on("click", function () {
      $("#skip, #introGameTexts").hide();
    });
  });
};

/***/ })
/******/ ]);