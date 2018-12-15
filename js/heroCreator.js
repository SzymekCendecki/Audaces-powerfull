let functions=require("./functions.js");
let gameInfo=require("./gameInfo.js");

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
let skinColor = ["biała", "brązowa", "czarna", "czerwona", "żółta", "zielona", "brunatna", "błękitna"];

//tablica z tatuażami
let tattoo = ["brak", "więzienne", "plemienne", "dziwne"]

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
	let elv = [-5, -5, 0, 5, 5]; module.exports.elv = elv;
	let dwarf = [4, 4, 0, -2, -3]; module.exports.dwarf = dwarf;
  let gnome = [-2, -2, 3, 3, 0]; module.exports.gnome = gnome;
  let halfling = [-3, 0, 6, 0, 0]; module.exports.halfling = halfling;
  let goblin = [2, -2, 4, 0, -4]; module.exports.goblin = goblin;
  let troll = [2, 0, 0, -2, -2]; module.exports.troll = troll;
  let semiGiant = [7, 7, -5, -3, 0]; module.exports.semiGiant = semiGiant;

module.exports.random = function(){
	$("#randomHero").on("click", ()=>{
		$("#chooseResult").hide(); $("#randomResult").show();
		functions.random(sex, 1); //losowanie płci
		functions.nameRandom(namesWomen, namesMan);//losowanie imienia
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
}

module.exports.choose = function(){
	$("#chooseHero").on("click", ()=>{
		$("#chooseResult").show(); $("#randomResult").hide(); $("#chooseHeroDescription > div").hide();

		hero.splice(0, 1, "nie wybrano"); hero.splice(1, 1, "nie wybrano"); hero.splice(2, 1, "nie wybrano"); hero.splice(3, 1, "nie wybrano");	hero.splice(4, 1, 0); hero.splice(5, 1, 0); hero.splice(6, 1, 0); hero.splice(7, 1, 0); hero.splice(8, 1, 0);	hero.splice(9, 1, "nie wybrano"); hero.splice(10, 1, "nie wybrano"); hero.splice(11, 1, "nie wybrano"); hero.splice(12, 1, "nie wybrano"); hero.splice(113, 1, "nie wybrano"); hero.splice(14, 1, "nie wybrano");

//wybór imienia
		$("#chooseName").on("click", ()=>{
				$("#chooseHeroDescription > div").hide(); $("#choosingName").show();
				$("#choosingName button").on("click", ()=>{
					let name = $("#nameForInput").val().replace(/\d/g,'');
					if(name == ""){
    				$("#alerts").html("<p class='newRocker redText center'>Twoja postać musi mieć imię !!!</p>");
					 	setTimeout(function(){ $("#alerts").empty(); }, 3000);
  				}else{
    				$("#alerts").html("<p class='newRocker greenText center'>Wybrano imię: " + name + "</p>");
						setTimeout(function(){ $("#alerts").empty(); }, 3000);
						hero.splice(0, 1, name);
  				}
				});
			});

//funkcja optymalizująca wpisywanie w tablicę wyborów oraz wyietlanie odpowiedniego alertu
			function xxx(what, what1, position){
				$("#alerts").html("<p class='newRocker greenText center'>Wybrano " + what + what1 + ".</p>");
				setTimeout(function(){ $("#alerts").empty(); }, 3000);
				hero.splice(position, 1, what1);
			}

//funkcja optymalizująca wyświetlanie opisów dla wyborów
			function yyy(description){
				$("#chooseHeroDescription > div").hide();
				 $("#choosingResults").show();
				 $("#choosingResults > p").empty().append(description);
			}

//wybór płci
			$("#chooseSex").on("click", ()=>{ $("#chooseHeroDescription > div").hide(); $("#choosingSex").show(); });
			$("#women").on("click", ()=>{ xxx("płeć: ", "kobieta", 1); });
			$("#men").on("click", ()=>{ xxx("płeć: ", "mężczyzna", 1); });
			$("#other").on("click", ()=>{ xxx("płeć: ", "nie wiadomo", 1); });

	//wybór rasy
		$("#chooseRace").on("click", ()=>{ yyy(gameInfo.raceTexts.race); });

		$("#human").on("click", ()=>{ xxx("rasę: ", "człowiek", 2); yyy(gameInfo.raceTexts.human); });
		$("#orc").on("click", ()=>{ xxx("rasę: ", "ork", 2); yyy(gameInfo.raceTexts.orc); });
		$("#halfOrc").on("click", ()=>{ xxx("rasę: ", "półork", 2); yyy(gameInfo.raceTexts.halfOrc); });
		$("#halfElv").on("click", ()=>{ xxx("rasę: ", "półelf", 2); yyy(gameInfo.raceTexts.halfElv); });
		$("#elv").on("click", ()=>{ xxx("rasę: ", "elf", 2); yyy(gameInfo.raceTexts.elv); });
		$("#dwarf").on("click", ()=>{ xxx("rasę: ", "krasnolud", 2); yyy(gameInfo.raceTexts.dwarf); });
		$("#halfling").on("click", ()=>{ xxx("rasę: ", "niziołek", 2); yyy(gameInfo.raceTexts.halfling); });
		$("#gnome").on("click", ()=>{ xxx("rasę: ", "gnom", 2); yyy(gameInfo.raceTexts.gnome); });
		$("#goblin").on("click", ()=>{ xxx("rasę: ", "goblin", 2); yyy(gameInfo.raceTexts.goblin); });
		$("#troll").on("click", ()=>{ xxx("rasę: ", "trol", 2); yyy(gameInfo.raceTexts.troll); });
		$("#semiGiant").on("click", ()=>{ xxx("rasę: ", "półolbrzym", 2); yyy(gameInfo.raceTexts.semiGiant); });

	//wybór profesji
	$("#chooseOccupation").on("click", ()=>{ yyy(gameInfo.occupationTexts.occupation); 	});

	$("#warrior").on("click", ()=>{ xxx("profesję: ", "wojownik", 3); yyy(gameInfo.occupationTexts.warrior); });
 	$("#criminal").on("click", ()=>{ xxx("profesję: ", "złoczyńca", 3); yyy(gameInfo.occupationTexts.criminal); });
 	$("#wizard").on("click", ()=>{ xxx("profesję: ", "czarodziej", 3); yyy(gameInfo.occupationTexts.wizard); });

	//punkty cech
	$("#choosePoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.points); $("#choosingPoints").show(); });

	$("#forcePoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.force); });
	$("#strenghtPoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.strenght); });
	$("#skillPoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.skill); });
	$("#intellectualsPoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.intellectuals); });
	$("#charismaPoints").on("click", ()=>{ yyy(gameInfo.pointsTexts.charisma); });

	//losowanie punktów cech
	 $("#random").on("click", ()=>{
		 let randPoints = Math.round(Math.random()*250);
		 $("#pointsRandom").empty().append(randPoints);

		 document.querySelector("#forceSlider").max = randPoints;
		 document.querySelector("#strenghtSlider").max = randPoints;
		 document.querySelector("#dexteritySlider").max = randPoints;
 		 document.querySelector("#intellectualsSlider").max = randPoints;
 		 document.querySelector("#charismaSlider").max = randPoints;
  });

	$("#forceSlider").on("input propertychange",function(){
		$("#forceScore").empty().append(this.value);
	});

	$("#strenghtSlider").on("input propertychange",function(){
		$("#strenghtScore").empty().append(this.value);
	});

	$("#dexteritySlider").on("input propertychange",function(){
		$("#dexterityScore").empty().append(this.value);
	});

	$("#intellectualsSlider").on("input propertychange",function(){
		$("#intellectualsScore").empty().append(this.value);
	});

	$("#charismaSlider").on("input propertychange",function(){
		$("#charismaScore").empty().append(this.value);
	});

//pokazenie dokananych wyborów
		$("#resultChoose").on("click", ()=>{ console.log(hero); });
	});
}
