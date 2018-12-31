let functions=require("./functions.js");
let firstMenu=require("./firstMenu.js");
let heroCreator=require("./heroCreator.js");
let gameInfo=require("./gameInfo.js");
let introGame=require("./introGame.js");
let street=require("./street.js");

document.addEventListener("DOMContentLoaded", () => {
  let caravansTexts = {
    "firstText":"<p id='firstTextCaravans' class='newRocker textIndent15px'>Idziesz w kierunku głównej bramy. Mijasz ludzi, zwierzęta i taplające się w błocie dzieci. Gdy dochodzisz do bramy robi się coraz tłoczniej. Przez bramę przejeżdżają wozy, ludzie łażą w każdą stronę, wartownicy na murach ziewają z nudów. W końcu udało się wyjść z miasta. Przed sobą widzisz wielki plac, na którym jakaś karawana szykuje się właśnie do odjazdu. Może warto spytać się, czy jedzie do przygranicznej wioski? Co robisz?</p>",

    "lookAroundCaravans":"<p class='newRocker textIndent15px margin2000p'>Za sobą masz bramę do miasta oraz wysokie mury miasta Erharuf. Przed sobą widzisz wielki plac, na którym karawany mogą przygotować się do podróży. W dali widniej ciemna linia prastarego lasu.</p>",

    "ask":"<p class='newRocker textIndent15px margin2000p'>Podchodzisz bliżej. Widzisz postać krasnoluda, który wydziera się w niebo głosy i pogania wszystkich wokół. Gdy jesteś już blisko, pytasz: 'Mości krasnoludzie, czy ta karawana jedzie do wioski na pograniczu?' 'Że co? Aaaa... Tak! Jedziemy dalej, ale będziemy przez nią przejeżdżać. Jak chcesz się zabrać to musisz się pospiesz z wsiadaniem. Na ostatnim wozie jest jeszcze trochę miejsca.'- odpowiedział i wrócił do swoich obowiązków.</p>",

    "agree":"<p class='newRocker textIndent15px margin2000p'>Na ostatnim wozie okazało się, że jest jeszcze sporo miejsca, dzięki czemu będzie można podróżować dość wygodnie. Po kilkunastu minutach karawana ruszyła...</p>"
  }

module.exports.caravansTexts = caravansTexts;

let z = 0;
module.exports.z = z;

module.exports.caravansEvents = function(){
//zdarzenie dla pójścia na ulicę
  $("#toStreet").on("click", ()=>{
    $("#ask, #agree, #lookAroundCaravans, #toMarket, #toStreet").hide();
    $("#market, #caravans, #lookAroundStreet, #inRoom").show();
    $("#firstTextCaravans").remove();
    $("#mainPartDescription").before(street.streetTexts.firstText);
  });

//pytane się dla w lokacji: karawany
  $("#ask").on("click", ()=>{
    $("#mainPartDescription").empty().append(caravansTexts.ask);
    $("#ask").hide();
    $("#agree").show();

    heroCreator.variables.splice(0, 1, 1);
  });

//rozglądanie się w lokacji: karawany
  $("#lookAroundCaravans").on("click", ()=>{
    $("#mainPartDescription").empty().append(caravansTexts.lookAroundCaravans);
  });

  //zgoda się w lokacji: karawany
    $("#agree").on("click", ()=>{
      $("#mainPartDescription").empty().append(caravansTexts.agree);
      $("#toMarket, #toStreet, #agree, #lookAroundCaravans").hide();
      $("#firstTextCaravans").remove();
      $("#mainPartDescription").empty();
    });
}

});//koniec DOMContentLoaded
