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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var firstMenu = __webpack_require__(2); //podstawowe funkcj

document.addEventListener("DOMContentLoaded", function () {
  console.log("NIEWIERNE PSY RULEZ!!!!");

  //ukrywanie odpowiednich części
  $("header p, #heroBtns div").hide();

  //przejście z pierwszego intro do pierwszego menu
  setTimeout(function () {
    $("header p, #heroBtns div").fadeIn(750);
    $("body").fadeIn(750).css("background", "beige");
    $("#mainPart").empty().html(firstMenu.textHello);
  }, 16000);

  //funkcje dla przycisków pierwszego menu
  $("#info").on("click", function () {
    $("#mainPart").empty().html(firstMenu.firstMenuBtns.info);$("#mainPart p").addClass("standardText newRocker");
  });
  $("#licence").on("click", function () {
    $("#mainPart").empty().html(firstMenu.firstMenuBtns.licence);$("#mainPart p").addClass("standardText newRocker");
  });
  $("#tutorial").on("click", function () {
    $("#mainPart").empty().html(firstMenu.firstMenuBtns.tutorial);$("#mainPart p").addClass("standardText newRocker");
  });
  $("#game").on("click", function () {
    $("#info, #licence, #tutorial, #game").addClass("animRotate");
    $("#mainPart p").fadeOut(3000);
    setTimeout(function () {
      $("#mainPart p").remove();
    }, 3000);
  });
}); //koniec DOMContentLoaded

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//tekst powitalny
module.exports.textHello = "<p class='standardText newRocker'>Witaj w grze 'Audaces - serce z żelaza', pierwszej grze tekstowej Niewiernych Psów. Powyżej znajdują się cztery przyciski, dzięki którym poznasz podsatwowe informacje o tej wersji gry, licencji gry, samouczka obsługi interfejsu oraz rozpoczniesz grę AUDACES - serce z żelaza. Także tego. Studio Niewiernych Psów, życzy miłej zabawy.</p>";

var firstMenuBtns = '{"info":"<p>To kolejna wersja gry Audaces, w której wprowadzone zostały wszystkie nie zrealizowane wcześniej pomysły. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com. Dostępne rozdzielczości: 1366x768 px.</p>", "licence":"<p>UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji).</p><p>POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI.</p><p>Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.</p>", "tutorial":"<p>Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial obok pojawi się odpowiednia informacja. Po wciśnięciu przycisku <strong>GRA</strong>, użytkownik rozpocznie grę. Wtedy będzie można stworzyć lub wylosować swoją postać. Po tym, gracz przejdze do gry. Ekran będzie podzielony na część z przyciskami - głównymi oraz interakcji. W głównej części będzie pojawiał się opis danej lokacji. W części komunikatów będą pojawiać się informacje o dokonanych wyborach oraz dodatkowe inforamcje związane z grą. Część z przyciskami będzie posiadała przyciski umożliwiające dostęp do cech postaci, ekwipunku, umiejętności itd. oraz do opcji, które będzie mógł wybrać w trakcie gry. Na podstawie opisów z głównej części gry, gracz będzie mógł dokonywać wyborów z listy przycisków.</p>"}';

module.exports.firstMenuBtns = JSON.parse(firstMenuBtns);

/***/ })
/******/ ]);