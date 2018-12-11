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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
module.exports.heroCreatorResult = function (hero, skills, equip, what) {
  what.show();
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
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var gameInfo = __webpack_require__(5);

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
var hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];
module.exports.hero = hero;

//tablica ekwipunku
var equip = [" ", " ", " ", " ", " "];module.exports.equip = equip;

//tablica umiejętności
var skills = [" ", " ", " "];module.exports.skills = skills;

//tablica ze złotem
var gold = [0];

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

//tablica z kolorami włosów
var hairColor = ["blond", "rude", "czarne", "farbowane"];

//tablica z kolorem oczu
var eyesColor = ["piwne", "szare", "brązowe", "niebieskie"];

//tablica z kolorem skóry
var skinColor = ["biała", "brązowa", "czarna", "czerwona", "żółta", "zielona", "brunatna", "błękitna"];

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
		$("#chooseResult").hide();$("#randomResult").show();
		functions.random(sex, 1); //losowanie płci
		functions.nameRandom(namesWomen, namesMan); //losowanie imienia
		functions.random(races, 2); //losowanie rasy
		functions.random(occupations, 3); //losowanie profesji
		functions.randomPoints2(hero[2], hero[3]); //losowanie punktów
		functions.random(eyesColor, 9); //losowanie koloru oczu
		functions.random(hairColor, 10); //losowanie koloru włosów
		functions.random(skinColor, 11); //losowanie koloru skóry
		functions.random(tattoo, 12); //losowanie tatuaży
		functions.weigthHeight(hero[2]); //losowanie wagi i wzrostu
		functions.randomSkills(); //losowanie umiejętności
		functions.randomEquip(equipWeapon, equipArmor, equipShield, equipOther); //losowanie ekwipunku
		functions.heroCreatorResult(hero, skills, equip, $("#heroResults")); //wyświetlanie wyniów losowania
		$("#heroResults span").addClass("greenText");
	});
};

module.exports.choose = function () {
	$("#chooseHero").on("click", function () {
		$("#chooseResult").show();$("#randomResult").hide();$("#chooseHeroDescription > div").hide();

		hero.splice(0, 1, "nie wybrano");hero.splice(1, 1, "nie wybrano");hero.splice(2, 1, "nie wybrano");hero.splice(3, 1, "nie wybrano");hero.splice(4, 1, 0);hero.splice(5, 1, 0);hero.splice(6, 1, 0);hero.splice(7, 1, 0);hero.splice(8, 1, 0);hero.splice(9, 1, "nie wybrano");hero.splice(10, 1, "nie wybrano");hero.splice(11, 1, "nie wybrano");hero.splice(12, 1, "nie wybrano");hero.splice(113, 1, "nie wybrano");hero.splice(14, 1, "nie wybrano");

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

		//wybór płci
		$("#chooseSex").on("click", function () {
			$("#chooseHeroDescription > div").hide();$("#choosingSex").show();
		});
		$("#women").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano płeć: kobieta.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(1, 1, "kobieta");
		});

		$("#men").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano płeć: mężczyzna.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(1, 1, "mężczyzna");
		});

		$("#other").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano płeć: nie wiadomo.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(1, 1, "nie wiadomo");
		});

		//wybóe rasy
		$("#chooseRace").on("click", function () {
			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.race);
		});

		$("#human").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: człowiek.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "człowiek");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.human);
		});

		$("#orc").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: ork.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "ork");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.orc);
		});

		$("#halfOrc").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: półork.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "półork");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.halfOrc);
		});

		$("#halfElv").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: półelf.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "półelf");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.halfElv);
		});

		$("#elv").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: elf.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "elf");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.elv);
		});

		$("#dwarf").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: krasnolud.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "krasnolud");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.dwarf);
		});

		$("#halfling").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: niziołek.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "niziołek");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.halfling);
		});

		$("#gnome").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: gnom.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "gnom");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.gnome);
		});

		$("#goblin").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: goblin.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "goblin");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.goblin);
		});

		$("#troll").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: trol.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "trol");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.troll);
		});

		$("#semiGiant").on("click", function () {
			$("#alerts").html("<p class='newRocker greenText center'>Wybrano rasę: półolbrzym.</p>");
			setTimeout(function () {
				$("#alerts").empty();
			}, 3000);
			hero.splice(2, 1, "półolbrzym");

			$("#chooseHeroDescription > div").hide();
			$("#choosingRace").show();
			$("#choosingRace > p").empty().append(gameInfo.raceTexts.semiGiant);
		});

		//pokazenie dokananych wyborów
		$("#resultChoose").on("click", function () {
			$("#chooseHeroDescription > div").hide();
			$("#choosingResults").show();
			console.log(hero);
		});
	});
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);
var firstMenu = __webpack_require__(4);
var heroCreator = __webpack_require__(1);
var gameInfo = __webpack_require__(5);

document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

  //ukrywanie odpowiednich części
  $("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults, #gameInfo,  #gameInfoResult, #chooseResult").hide();

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
}); //koniec DOMContentLoaded

/***/ }),
/* 4 */
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
/* 5 */
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
  "occupation": "Profesja to zawód, którym się par bohater na co dzień. Do wyboru są trzy profesje: wojownik, złoczyńca oraz czarodziej. Szczegóły są dostępne po wybraniu konkretnej opcji.",

  "warrior": "Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.",

  "criminal": "Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.",

  "wizard": "Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia."
};

var pointsTexts = {
  "points": "Punkty cech określają czy postać jest silna, wytrzymała, inteligentna lub charyzmatyczna. Im więcej punktów tym lepiej.",

  "force": "SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.",

  "strenght": "WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby lub trucizny. Ważna dla wojowników.",

  "skill": "ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.",

  "intellectuals": "INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd. Ważna dla czarodziejów.",

  "charisma": "CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów."
};

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

/***/ })
/******/ ]);