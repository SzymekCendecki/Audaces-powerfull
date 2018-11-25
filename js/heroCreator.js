let functions=require("./functions.js");

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];
module.exports.hero = hero;

//tablica ekwipunku
let equip = [" ", " ",  " ", " ", " "]; module.exports.equip = equip;

//tablica umiejętności
let skills = [" ", " ",  " "]; module.exports.skills = skills;

//tablica ze złotem
let gold = [0];

//tablica z imionami męskimi
let namesMan = ["Wortigern", "Gintor", "Hegel", "Derig", "Diggramon", "Zengowetoryk", "Deggetm", "Zigamon", "Birduk", "Ardenor", "Winterks", "Joluntik", "Menigor", "Oltis", "Kurdir"];

//tablica z imionami żeńskimi
let namesWomen = ["Wortigerna", "Hejacynta", "Dejawina", "Ludiniam", "Keoburna", "Leokamina", "Erminia", "Xynenda", "Fejmira", "Apsurginis", "Wicynia", "Jermodernia", "Sertyksa"];

//tablica z rasami
let races = ["człowiek", "półork", "ork", "półelf", "elf", "krasnolud", "gnom", "niziołek", "goblin", "trol", "półolbrzym"];

//tablica z profesjami
let occupations = ["wojownik", "złoczyńca", "czarodziej"];

//tabica z płcią
let sex = ["kobieta", "mężczyzna", "nie wiadomo"];

//tablica z kolorami włosów
let hairColor = ["blond", "rude", "czarne", "farbowane"];

//tablica z kolorem oczu
let eyesColor = ["piwne", "szare", "brązowe", "niebieskie"];

//tablica z kolorem skóry
let skinColor = ["biała", "brązowa", "czarna", "czerwona", "zółta", "zielona", "brunatna", "błękitna"];

//tablica z tatuażami
let tattoo = ["brak", "więzienne", "plemienne", "dziwne"]

//tablica z wagą
let weight = ["niedowaga", "normalna", "nadwaga"];

//tablica ze wzrostem
let height = ["niski", "normalny", "wysoki"];

//tablice z ekwipunkiem
//broń
let equipWeapon = ["sztylet", "drewniana pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
let equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
let equipShield = ["puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//inny ekwipunek
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
let skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];
module.exports.skillsWarrior = skillsWarrior;

//złoczyńcy
let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];
module.exports.skillsCriminal = skillsCriminal;

//czarodzieja
let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];
module.exports.skillsWizard = skillsWizard;


//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
	let warrior = [5, 5, 0, 0, 0]; 	module.exports.warrior = warrior;
	let criminal = [0, 0, 10, 0, 0]; module.exports.criminal = criminal;
	let wizard = [0, 0, 0, 5, 5]; module.exports.wizard = wizard;

	let human = [0, 0, 0, 0, 0]; module.exports.human = human;
  let halfOrc = [3, 3, 0, -3, -3]; module.exports.halfOrc = halfOrc;
  let orc = [5, 5, 0, -5, -5]; module.exports.orc = orc;
  let halfElv = [-3, -3, 0, 3, 3]; module.exports.halfElv = halfElv;
	let elv = [-5, -5, 0, 5, 5]; module.exports.elc = elv;
	let dwarf = [4, 4, 0, -2, -3]; module.exports.dwarf = dwarf;
  let gnome = [-2, -2, 3, 3, 0]; module.exports.gnome = gnome;
  let halfling = [-3, 0, 6, 0, 0]; module.exports.halfling = halfling;
  let goblin = [2, -2, 4, 0, -4]; module.exports.goblin = goblin;
  let troll = [2, 0, 0, -2, -2]; module.exports.troll = troll;
  let semiGiant = [7, 7, -5, -3, 0]; module.exports.semiGiant = semiGiant;

//dodatkowa tablica dla losowania cech
let randomFeatures = [0, 0, 0, 0, 0];

module.exports.random = function(){
	$("#randomHero").on("click", ()=>{
		functions.random(sex, 1); //losowanie płci
		functions.nameRandom(namesWomen, namesMan);//losowanie imienia
		functions.random(races, 2); //losowanie rasy
		functions.random(occupations, 3); //losowanie profesji
		functions.randomPoints2(hero[2], hero[3]); //losowanie punktów
		functions.random(eyesColor, 9); //losowanie koloru oczu
		functions.random(hairColor, 10); //losowanie koloru włosów
		functions.random(skinColor, 11); //losowanie koloru skóry
		functions.random(tattoo, 12); //losowanie tatuaży
		functions.random(weight, 13); //losowanie wagi
		functions.random(height, 14); //losowanie wzrost
		functions.randomSkills(); //losowanie umiejętności
		functions.randomEquip(equipWeapon, equipArmor, equipShield, equipOther); //losowanie ekwipunku
		functions.heroCreatorResult(hero, skills, equip); //wyświetlanie wyniów losowania
		$("#heroResults span").addClass("greenText");
	});
}
