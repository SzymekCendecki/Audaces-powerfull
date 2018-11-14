document.addEventListener("DOMContentLoaded", () => {
  console.log("NIEWIERNE PSY RULEZ!!!!");

$("header p, #heroBtns div").hide();

setTimeout(function(){
$("header p, #heroBtns div").fadeIn(750);
$("body").fadeIn(750).css("background", "beige");

}, 16000);

$("#info").on("click", function(){
  $("#mainPart").empty().html("<p class='standardText newRocker'>To kolejna wersja gry Audaces, w której wprowadzone zostały wszystkie nie zrealizowane wcześniej pomysły. Gra powstała dzięki użytym technologiom: HTML5, SASS, jQuery, EcmaScript 6. Fonty pobrane z: fonts.google.com.</p>");
});


$("#licence").on("click", function(){
  $("#mainPart").empty().html("<p class='standardText newRocker'>UMOWA LICENCYJNA UŻYTKOWNIKA APLIKACJI AUDACES (oraz wszystkich jego wesji).</p><p class='standardText newRocker'>POSIADAJĄC APLIKACJĘ AKCEPTUJESZ PONIŻSZE WARUNKI LICENCJI.</p><p class='standardText newRocker'>Autor informuje, iż zawarte treści w aplikacji mogą być niestosowne dla osób niepełnoletnich, o innym światopoglądzie lub wyznawanej religii. Użytkownik używa aplikację na własne ryzyko. Twórca tej aplikacji infourmuje, iż aplikacja ta została stowrzona w celach hobbystycznych oraz w celu nauki programowania. Aplikacja ta może zawierać błędy, które niekoniecznie muszą być poprawione. Autor nie udziela żadnych gwarancji, obietnic oraz zapewnień na tą aplikację (i jej wersje) i nie odpowiada za błędne działanie lub użytkowanie programu. Autor aplikacji nie bierze na siebie żadnych reklamacji w sprawie wadliwego działania programu oraz nie poczuwa się do zadość uczynienia za spowodowane szkody. Prawa autorskie należą do Szymona Cendeckiego. Audaces jest rozprowadzany na zasadzie FREEWARE czyli: użytkownik dostaje aplikację za darmo, nie może w żaden sposób zmieniać aplikacji, może wykorzystywać aplikację na własny użytek, zabrnia się wykorzystywać aplikację w celach komercyjnych, zabrania się ujawniania kodu źródłowego.</p>");
});

});//koniec DOMContentLoaded
