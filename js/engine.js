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

//losowanie punktów
function randomPoints(occupationsPoints, racePoints, tablePosition) {
  var randomPoints = Math.round(Math.random() * 50);
  var allPoints = randomPoints + occupationsPoints + racePoints;
  heroCreator.hero.splice(tablePosition, 1, allPoints);
  console.log(randomPoints, occupationsPoints, racePoints);
}

module.exports.randomPoints2 = function (race, occupation) {
  console.log(race, occupation);
  //człowiek - wojownik
  if (race == "człowiek" && occupation == "wojownik") {
    randomPoints(heroCreator.warrior[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.warrior[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.warrior[2], heroCreator.human[2], 6);
    randomPoints(heroCreator.warrior[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.warrior[4], heroCreator.human[4], 8);
  } else if (race == "człowiek" && occupation == "złoczyńca") {
    randomPoints(heroCreator.criminal[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.criminal[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.criminal[2], heroCreator.human[2], 6);
    randomPoints(heroCreator.criminal[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.criminal[4], heroCreator.human[4], 8);
  } else if (race == "człowiek" && occupation == "czarodziej") {
    randomPoints(heroCreator.wizard[0], heroCreator.human[0], 4);
    randomPoints(heroCreator.wizard[1], heroCreator.human[1], 5);
    randomPoints(heroCreator.wizard[2], heroCreator.human[2], 6);
    randomPoints(heroCreator.wizard[3], heroCreator.human[3], 7);
    randomPoints(heroCreator.wizard[4], heroCreator.human[4], 8);
  }
};

//funkcja pokazująca wybór kreowania postaci
module.exports.heroCreatorResult = function (hero) {
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
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var functions = __webpack_require__(0);

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
var hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];
module.exports.hero = hero;

//tablica ekwipunku
var equip = [];

//tablica umiejętności
var skills = [];

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
var skinColor = ["biała", "brązowa", "czarna", "czerwona", "zółta", "zielona", "brunatna", "błękitna"];

//tablica z tatuażami
var tattoo = ["brak", "więzienne", "plemienne", ""];

//tablica z wagą
var weight = ["niedowaga", "normalna", "nadwaga"];

//tablica ze wzrostem
var height = ["niski", "normalny", "wysoki"];

//tablice z ekwipunkiem
//broń
var equipWeapon = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
var equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
var equipShield = ["puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
var warrior = [5, 5, 0, 0, 0];module.exports.warrior = warrior;
var criminal = [0, 0, 10, 0, 0];module.exports.criminal = criminal;
var wizard = [0, 0, 0, 5, 5];module.exports.wizard = wizard;

var human = [0, 0, 0, 0, 0];module.exports.human = human;
var halfOrc = [3, 3, 0, -3, -3];module.exports.halfOrc = halfOrc;
var orc = [5, 5, 0, -5, -5];module.exports.orc = orc;
var halfElv = [-3, -3, 0, 3, 3];module.exports.halfElv = halfElv;
var elv = [-5, -5, 0, 5, 5];module.exports.elc = elv;
var dwarf = [4, 4, 0, -2, -3];module.exports.dwarf = dwarf;
var gnome = [-2, -2, 3, 3, 0];module.exports.gnome = gnome;
var halfling = [-3, 0, 6, 0, 0];module.exports.halfling = halfling;
var goblin = [2, -2, 4, 0, -4];module.exports.goblin = goblin;
var troll = [2, 0, 0, -2, -2];module.exports.troll = troll;
var semiGiant = [7, 7, -5, -3, 0];module.exports.semiGiant = semiGiant;

//dodatkowa tablica dla losowania cech
var randomFeatures = [0, 0, 0, 0, 0];

//inny ekwipunek
var equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas", "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
var skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//złoczyńcy
var skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

//czarodzieja
var skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

module.exports.random = function () {
	$("#randomHero").on("click", function () {

		//losowanie płci
		var randomSexNumber = Math.round(Math.random() * (sex.length - 1));
		var sexHero = sex[randomSexNumber];
		hero.splice(1, 1, sexHero);

		//losowanie imienia
		if (hero[1] == "kobieta") {
			var randomNameNumber = Math.round(Math.random() * (namesWomen.length - 1));
			var nameHero = namesWomen[randomNameNumber];
			hero.splice(0, 1, nameHero);
		} else if (hero[1] == "mężczyzna") {
			var _randomNameNumber = Math.round(Math.random() * (namesMan.length - 1));
			var _nameHero = namesMan[_randomNameNumber];
			hero.splice(0, 1, _nameHero);
		} else {
			var allNames = namesMan.concat(namesWomen);
			var _randomNameNumber2 = Math.round(Math.random() * (allNames.length - 1));
			var _nameHero2 = allNames[_randomNameNumber2];
			hero.splice(0, 1, _nameHero2);
		}

		//losowanie rasy
		var randomRaceNumber = Math.round(Math.random() * (races.length - 1));
		var raceHero = races[randomRaceNumber];
		hero.splice(2, 1, raceHero);

		//losowanie profesji
		var randomOccupationNumber = Math.round(Math.random() * (occupations.length - 1));
		var occupationsHero = occupations[randomOccupationNumber];
		hero.splice(3, 1, occupationsHero);

		functions.randomPoints2(hero[2], hero[3]);

		functions.heroCreatorResult(hero);
		$("#heroResults span").addClass("greenText");
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

document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

  //ukrywanie odpowiednich części
  $("header p, #heroBtns div, #randomHero, #chooseHero, #heroResults").hide();

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
    $("#randomHero, #chooseHero").delay(3050).fadeIn(750);
  });
};

/***/ })
/******/ ]);