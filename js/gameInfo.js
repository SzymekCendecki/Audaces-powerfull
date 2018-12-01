let functions=require("./functions.js");
let heroCreator=("./heroCreator.js");

let raceTexts = {
  "race":"Wybór rasy determinuje wiele cech bohtera. Można wybrać spośród 13 dostępnych ras. Więcej szczegółów na temat każdej rasy dostępne jest po wyborze z opcji.",

  "human":"Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg. Wiek: do 100 lat. Profesja: każda. Modyfikatory rasowe: brak",

  "halfOrc":"Rasa ta posiada wymieszane cehy ludzi oraz orków. Są silniejsze i wytrzymasze niż przeciętny człowiek. Niestety od człowiek są mniej inteligentne i mniej charyzmatyczne. Wielu półorków stanowi ochronę karawan. Podstawowe cechy: wzrost: 170 - 220cm, waga: 50 - 140kg. Wiek: do 110 lat. Preferowana profesja: wojownik. Modyfikatory: siła +3, wytrzymałość +3, inteligencja -3, charyzma -3.",

  "orc":"Orkowie to koczownicy wojownicy. Z powodu ich ciągłego przemieszczania, niewiele wiadomo o ich zwyczajach. Wiadomo, iż tolerują jedynie magię szamanów własnych klanów. Są nieufni w handlu. Stałe orcze osady są nieliczne, usytuowane na obrzeżach cywilizowanych krain. Podstawowe cechy: wzrost: 170 - 240cm, waga: 80 - 180kg. Wiek: do 120 lat. Preferowana profesja: wojownik. Modyfikatory: siła +5, wytrzymałość +5, inteligencja -5, charyzma -5."
}

module.exports.gameInfo = function(){
  $("#gameInfo").on("click", ()=>{
    $("#heroBtns button").prop("disabled", true);
    $("#gameInfoResult").show();
    $("#infoDescription").empty();
  });

  $("#gameInfoResult button:first-child").on("click", ()=>{
    $("#heroBtns button").prop("disabled", false);
    $("#gameInfoResult").hide();
  });

$("ol li:first-child span").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.race); });
$("ol li:first-child ul li:first-child").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.human); });
$("ol li:first-child ul li:nth-child(2)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.halfOrc); });
$("ol li:first-child ul li:nth-child(3)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.orc); });
}
