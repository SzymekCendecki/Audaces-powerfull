let functions=require("./functions.js");
let heroCreator=("./heroCreator.js");

//tekst powitalny
module.exports.textHello = "Witaj w grze 'Audaces - serce z żelaza', pierwszej grze tekstowej Niewiernych Psów. Powyżej znajdują się cztery przyciski, dzięki którym poznasz podsatwowe informacje o tej wersji gry, licencji gry, samouczka obsługi interfejsu oraz rozpoczniesz grę AUDACES - serce z żelaza. Także tego. Studio Niewiernych Psów, życzy miłej zabawy.";

let firstMenuBtnsText = '{"info":"<p>To kolejna wersja gry Audaces, w której wprowadzone zostały wszystkie nie zrealizowane wcześniej pomysły. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com. Dostępne rozdzielczości: 1366x768 px.</p>", "licence":"<p>UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji).</p><p>POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI.</p><p>Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.</p>", "tutorial":"<p>Początek gry. Ekran składa się z powitania oraz czterech przycisków. Po wciśnięciu przycisku Info, Licencja lub Tutorial obok pojawi się odpowiednia informacja. Po wciśnięciu przycisku <strong>GRA</strong>, użytkownik rozpocznie grę. Wtedy będzie można stworzyć lub wylosować swoją postać. Po tym, gracz przejdze do gry. Ekran będzie podzielony na część z przyciskami - głównymi oraz interakcji. W głównej części będzie pojawiał się opis danej lokacji. W części komunikatów będą pojawiać się informacje o dokonanych wyborach oraz dodatkowe inforamcje związane z grą. Część z przyciskami będzie posiadała przyciski umożliwiające dostęp do cech postaci, ekwipunku, umiejętności itd. oraz do opcji, które będzie mógł wybrać w trakcie gry. Na podstawie opisów z głównej części gry, gracz będzie mógł dokonywać wyborów z listy przycisków.</p>"}';

let btnsText = JSON.parse(firstMenuBtnsText);

module.exports.firstMenuBtns = function(){
  $("#info").on("click", () => { $("#description").empty().html(btnsText.info); });
  $("#licence").on("click", () => { $("#description").empty().html(btnsText.licence); });
  $("#tutorial").on("click", () => { $("#description").empty().html(btnsText.tutorial);  });

  $("#game").on("click", () => {
   $("#info, #licence, #tutorial, #game").addClass("animRotate");
   $("#description").fadeOut(3000);
   setTimeout(()=>{
      $("#description").remove();
      $("#info, #licence, #tutorial, #game").remove();
  }, 3000);
   $("#randomHero, #chooseHero, #gameInfo").delay(3050).fadeIn(750);
  });
}
