let functions=require("./functions.js");
let heroCreator=("./heroCreator.js");

let raceTexts = {
  "race":"Wybór rasy determinuje wiele cech bohtera. Można wybrać spośród 13 dostępnych ras. Więcej szczegółów na temat każdej rasy dostępne jest po wyborze z opcji.",

  "human":"Człowiek jedna z najbardziej licznych ras (ustępują jedynie goblinom). Są wszechstronni i wszędobylscy, dlatego też można spotkać ich na wszystkich kontynentach, parających się różnymi profesjami. Podstawowe cechy: wzrost: 150 - 210cm, waga: 40 - 120kg. Wiek: do 100 lat. Profesja: każda. Modyfikatory rasowe: brak.",

  "halfOrc":"Rasa ta posiada wymieszane cehy ludzi oraz orków. Są silniejsze i wytrzymasze niż przeciętny człowiek. Niestety od człowiek są mniej inteligentne i mniej charyzmatyczne. Wielu półorków stanowi ochronę karawan. Podstawowe cechy: wzrost: 170 - 220cm, waga: 50 - 140kg. Wiek: do 110 lat. Preferowana profesja: wojownik. Modyfikatory: siła +3, wytrzymałość +3, inteligencja -3, charyzma -3.",

  "orc":"Orkowie to koczownicy wojownicy. Z powodu ich ciągłego przemieszczania, niewiele wiadomo o ich zwyczajach. Wiadomo, iż tolerują jedynie magię szamanów własnych klanów. Są nieufni w handlu. Stałe orcze osady są nieliczne, usytuowane na obrzeżach cywilizowanych krain. Podstawowe cechy: wzrost: 170 - 240cm, waga: 80 - 180kg. Wiek: do 120 lat. Preferowana profesja: wojownik. Modyfikatory: siła +5, wytrzymałość +5, inteligencja -5, charyzma -5.",

  "halfElv":"Podobnie ja półorki, półelfy powstały z dwóch różnych ras. Żyją dłużej niż przeciętny człowiek. Nie mają także taich zdolności do magii jak elfy. Podstawowe cechy: wzrost: 165 - 210cm, waga: 40 - 100kg. Wiek: do 350 lat. Preferowana profesja: skłonności do bycia czarodziejem. Modyfikatory: siła -3, wytrzymałość -3, inteligencja +3, charyzma +3. ",

  "elv":"Elfy to bardzo uzdolnieni czarodzieje. Pomimo olbrzymich umiejętności magicznych, są równie biegli w posługiwaniu się łukiem. Są długowieczni, przez co omyłkowo uznawani są za nieśmiertelnych. Podstawowe cechy: wzrost: 180 - 210cm, waga: 40 - 90kg. Wiek: do 1500 lat. Preferowana profesja: czarodziej. Modyfikatory: siła -5, wytrzymałość -5, inteligencja +5, charyzma +5.",

  "dwarf":"Przez swoje specyficzne podejście do rzeczywistości, postrzegani są jako najardziej chamowata rasa świata. Jednakże są wyśmienitymi kowalami, górnikami i wojownikami. Bardzo uczuleni na punkcie krasnoludzkich kobiet, honoru oraz swoich bród. Podstawowe cechy: wzrost: 100 - 145cm, waga: 70 - 100kg. Wiek: do 500 lat. Preferowana profesja: wojownik. Modyfikatory: siła +4, wytrzymałość +4, inteligencja -2, charyzma -3.",

  "gnome":"Gnomy to zręczni rzemieślnicy i majsterkowicze. Lubują się w onstruowaniu różnych mechanizmów i urządzeń. W przeciwieństwie do krasnoludów nie przejawiają zbytniej chamowatości. Podstawowe cechy: wzrost: 90 - 140cm, waga: 50 - 70kg. Wiek: do 400 lat. Preferowana profesja: złoczyńca lub czarodziej. Modyfikatory: siła -2, wytrzymałość -2, zręczność +3, inteligencja +3.",

  "halfling":"Nizołki to przeciwieństwo krasnoludów. Pokojowo nastawiona rasa, zajmująca się rolnictwem. Słyną z wytwarzania najlepszego ziela do fajek, oraz niesamowitej zręczności. Podstawowe cechy: wzrost: 105 - 150cm, waga: 60 - 100kg. Wiek: do 250 lat. Preferowana profesja: złoczyńca. Modyfikatory: siła -3, zręczność +6.",

  "goblin":"Chyba najbardziej znienawidzona rasa na świecie. Mnoży się szybciej niż szczury w kanałach. Nie znają innego życia niż wojna i złodziejstwo. Podstawowe cechy: wzrost: 80 - 120cm, waga: 50 - 80kg. Wiek: do 40 lat. Preferowana profesja: złoczyńca lub wojownik. Modyfikatory: siła 2, wytrzymałość -2, zręczność +4, charyzma -4.",

  "troll":"Trole uznawane są za dziką rasę, co jest nieprawdą (tak jak to, że zamieniają się w kamień od słońca). Chociaż prawdą jest, że unikają ognia. Podstawowe cechy: wzrost: 190 - 260cm, waga: 100 - 160kg. Wiek: do 300 lat. Preferowana profesja: wojownik. Modyfikatory: siła +2, inteligencja -2, charyzma -2.",

  "semiGiant":"Pół dzika rasa. Legendy głoszą, że powstała z ludzi i olbrzymów. Ich osady najczęściej można znajdują się wśród wysokich wzgórz, pokrytych wrzosowisami. Podstawowe cechy: wzrost: 260 - 320cm, waga: 210 - 300kg. Wiek: do 200 lat. Preferowana profesja: wojownik. Modyfikatory: siła +7, wytrzymałość +7, zręczność: -5, inteligencja -3."
}

module.exports.raceTexts = raceTexts;

let occupationTexts = {
  "occupation":"Profesja to zawód, którym para się bohater na co dzień. Do wyboru są trzy profesje: wojownik, złoczyńca oraz czarodziej. Szczegóły są dostępne po wybraniu konkretnej opcji.",

  "warrior":"Wojownicy to specjaliści we władaniu każdą bronią białą bronią. Są podstawą wszystkich armii świata, ale także mogą podróżwać samotni lub w niewielkich grupach. Wielu idących drogą wojownika zdobyło sławę w bitwach czy pogromcy smoków. Będąc wojownikiem zwiedzisz świat.",

  "criminal":"Trucizny. Pułapki. Skrytobójstwo. To wszystko i wiele innych rzeczy zapewni Tobie droga złoczyńcy. Już w każdym mniejszym miasteczku, są odpowiednie organizacje, które wyszkolą Cię na nieustraszonego rzezimieszka.",

  "wizard":"Czarodziej to brzmi dumnie. Po wielu latach spędzonych na nauce. Będzie wzbudzał szacunek swoją tylko osobą, a wrogowie będą uciekać w panice przed Twoimi kulami ognia."
}

module.exports.occupationTexts = occupationTexts;

let pointsTexts = {
  "points":"Punkty cech określają czy postać jest silna, wytrzymała, inteligentna lub charyzmatyczna. Im więcej punktów tym lepiej.",

  "force":"SIŁA - określa ile postać może udźwignąć, podnieść, jak daleko rzucić itd. Ważna dla wojowników.",

  "strenght":"WYTRZYMAŁOŚĆ - określa ile postać może odnieść ran, jej odporność na choroby lub trucizny. Ważna dla wojowników.",

  "skill":"ZRĘCZNOŚĆ - określa sprawność ruchową postaci. Ważna dla złoczyńców.",

  "intellectuals":"INTELIGENCJA - określa sprawność umysłową postaci, czyli jak zapamiętuje, kojarzy fakty itd. Ważna dla czarodziejów.",

  "charisma":"CHARYZMA - określa sposób w jaki postać jest odbierana przez innych. Dzięki charyzmie, postać może np. przekonać rozmówcę do swoich racji. Ważna dla złoczyńcy i czarodziejów."
}

module.exports.pointsTexts = pointsTexts;

let otherTexts = {
  "eyesColor":"W tej części można wybrać kolor oczu. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor oczu.",
  "hairColor":"W tej części można wybrać kolor włosów. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor włosów.",
  "skinColor":"W tej części można wybrać kolor skóry. Do tego celu służą trzy suwaki, dzięki którym można ustawić pożądany kolor skóry.",
  "tattoo":"Tatuaże mogą być dziełem sztuki, wyznacznikiem statusu społecznego, miejsca w hierarchii oraz przynależności do klanu lub orgnizacji.",
  "noneTattoo":"Skóra nie jest poryta żadnymi tatuażami.",
  "jailTattoo":"Te tatuaże w więzieniach nazywane są 'dziarami'. Określają one status więźnia, jego miejsca odsiadki oraz jaka jest jego przestępcza specjalizacja. Czasami wytatuowane ważniejsze 'dokonania'.",
  "tribeTattoo":"Tatuaże pleienne określają przynależność do określonego klanu oraz status/pozycję w tym klanie.",
  "strangeTatoo":"Bliżej nie sprecyzowane wzory tatuaży, które najczęściej wzorowane są na wątpliwych wizjach osób parających się tatuowaniem.",
  "weight":"Oreśla wagę postaci, którą można ustawić za pomocą suwaka.",
  "height":"Określa wzrost postaci, który można ustawić za pomocą suwaka."
}

module.exports.otherTexts = otherTexts;

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

//wywołanie opisu ras
$("ol li:first-child span").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.race); });
$("ol li:first-child ul li:first-child").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.human); });
$("ol li:first-child ul li:nth-child(2)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.halfOrc); });
$("ol li:first-child ul li:nth-child(3)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.orc); });
$("ol li:first-child ul li:nth-child(4)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.halfElv); });
$("ol li:first-child ul li:nth-child(5)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.elv); });
$("ol li:first-child ul li:nth-child(6)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.dwarf); });
$("ol li:first-child ul li:nth-child(7)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.gnome); });
$("ol li:first-child ul li:nth-child(8)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.halfling); });
$("ol li:first-child ul li:nth-child(9)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.goblin); });
$("ol li:first-child ul li:nth-child(10)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.troll); });
$("ol li:first-child ul li:nth-child(11)").on("click", ()=>{ $("#infoDescription").empty().text(raceTexts.semiGiant); });

//wywołanie opisu profesjami
$("ol li:nth-child(2) span").on("click", ()=>{ $("#infoDescription").empty().text(occupationTexts.occupation); });
$("ol li:nth-child(2) ul li:first-child").on("click", ()=>{ $("#infoDescription").empty().text(occupationTexts.warrior); });
$("ol li:nth-child(2) ul li:nth-child(2)").on("click", ()=>{ $("#infoDescription").empty().text(occupationTexts.criminal); });
$("ol li:nth-child(2) ul li:nth-child(3)").on("click", ()=>{ $("#infoDescription").empty().text(occupationTexts.wizard); });

//wywołanie opisu cech
$("ol li:nth-child(3) span").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.points); });
$("ol li:nth-child(3) ul li:first-child").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.force); });
$("ol li:nth-child(3) ul li:nth-child(2)").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.strenght); });
$("ol li:nth-child(3) ul li:nth-child(3)").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.skill); });
$("ol li:nth-child(3) ul li:nth-child(4)").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.intellectuals); });
$("ol li:nth-child(3) ul li:nth-child(5)").on("click", ()=>{ $("#infoDescription").empty().text(pointsTexts.charisma); });
}
