let functions=require("./functions.js");

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano"];

//tablica ekwipunku
let equip = [];

//tablica umiejętności
let skills = [];

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
let tattoo = ["brak", "więzienne", "plemienne", ""]

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

//tablice ze modyfikatorami rasy i profesji - dla określenia ostatecznej ilości punktów postaci
//indeksy: 0-siła, 1-wytrzymałość, 2-zręczność, 3-inteligencja, 4-charyzma
	let warrior = [5, 5, 0, 0, 0];
	let criminal = [0, 0, 10, 0, 0];
	let wizard = [0, 0, 0, 5, 5];

	let human = [0, 0, 0, 0, 0];
  let halfOrc = [3, 3, 0, -3, -3];
  let orc = [5, 5, 0, -5, -5];
  let halfElv = [-3, -3, 0, 3, 3];
	let elv = [-5, -5, 0, 5, 5];
	let dwarf = [4, 4, 0, -2, -3];
  let gnome = [-2, -2, 3, 3, 0];
  let halfling = [-3, 0, 6, 0, 0];
  let goblin = [2, -2, 4, 0, -4];
  let troll = [2, 0, 0, -2, -2];
  let semiGiant = [7, 7, -5, -3, 0];

//dodatkowa tablica dla losowania cech
let randomFeatures = [0, 0, 0, 0, 0];

//inny ekwipunek
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
let skillsWarrior = ["szt.przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drewniana", "mała tarcza metalowa"];

//złoczyńcy
let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drewniana pałka"];

//czarodzieja
let skillsWizard = ["pisanie i czytanie", "przyw./odp. demona", "wróżbiarstwo", "leczenie ran", "rzuczanie czarów", "tworz. eliksirów", "tworz.mag. przedm.", "tworzenie maści", "tworzenie runów", "astrologia", "zielarstwo"];

module.exports.random = function(){
	$("#randomHero").on("click", ()=>{
		//losowanie płci
		let randomSexNumber = Math.round(Math.random()*(sex.length-1));
		let sexHero = sex[randomSexNumber];
		hero.splice(1, 1, sexHero);

		//losowanie rasy
		let randomRaceNumber = Math.round(Math.random()*(races.length-1));
		let raceHero = races[randomRaceNumber];
		hero.splice(2, 1, raceHero);

		//losowanie profesji
  	let randomOccupationNumber = Math.round(Math.random()*(occupations.length-1));
  	let occupationsHero = occupations[randomOccupationNumber];
		hero.splice(3, 1, occupationsHero);

		$("#mainPart").html(`<h2>WYLOSOWANY BOHATER</h2><div><p>imię</p><p>${hero[0]}</p></div><div><p>płeć</p><p>${hero[1]}</p></div><div><p>rasa</p><p>${hero[2]}</p></div><div><p>profesja</p><p>${hero[3]}</p></div><div><p>współczynniki</p><p>siła: ${hero[4]}</p><p>wytrzymałość: ${hero[5]}</p><p>zręczność: ${hero[6]}</p><p>inteligencja: ${hero[7]}</p><p>inteligencja: ${hero[8]}</p></div><div><p>kolor oczu</p><p>${hero[9]}</p></div><div><p>kolor włosów</p><p>${hero[10]}</p></div><div><p>kolor skóry</p><p>${hero[11]}</p></div><div><p>tatuaże</p><p>${hero[12]}</p></div><div><p>waga</p><p>${hero[13]}</p></div><div><p>wzrost</p><p>${hero[14]}</p></div>`);
	});
}
