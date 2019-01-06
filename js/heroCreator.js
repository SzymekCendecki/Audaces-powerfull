let functions=require("./functions.js");
let gameInfo=require("./gameInfo.js");

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, [0, 0, 0], [0, 0, 0], [0, 0, 0], "nie wybrano", "nie wybrano", "nie wybrano"];

function check(hero){
	let x = "nie wybrano";
	if(hero[0] === x && hero[1] === x && hero[2] === x && hero[3] === x && hero[4] === 0 && hero[5] === 0 && hero[6] === 0 && hero[7] === 0 && hero[8] === 0 && hero[12] === x && hero[13] === x && hero[14] === x){
		$("#play").hide();
	}else {
		$("#play").show();
	}
}

module.exports.hero = hero;

//tablica ze zmiennymi, które będą potrzebne w trakcie gry
//indeks: 0 dla określania czy postać zapytała się na postoju karawan
let variables = [0]; module.exports.variables = variables;

//tablica ekwipunku
let equip = []; module.exports.equip = equip;

//tablica umiejętności
let skills = []; module.exports.skills = skills;

//tablica ze złotem
let gold = [0]; module.exports.gold = gold;

//tablica dla zadań
let tasks = ["Zanieś paczkę mnichowi."]; module.exports.tasks = tasks;

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

//tablica z tatuażami
let tattoo = ["brak", "więzienne", "plemienne", "dziwne"]

//tablice z ekwipunkiem
//broń
let equipWeapon = ["sztylet", "drew. pałka", "krótki miecz", "szabla", "włócznia", "proca", "łuk"];

//zbroja
let equipArmor = ["przeszywanica", "zbroja skórzana", "zbroja ćwiekowana"];

//tarcze
let equipShield = ["puklerz", "mała tarcza drew.", "mała tarcza metal."];

//inny ekwipunek
let equipOther = ["kostur", "mieszek", "torba podróżna", "sakwa", "plecak", "manierka", "sagan", "koc", "tuba na perg.", "pęk piór do pis.", "pergaminy 5szt.", "zwykłe ubranie", "fikuśna czapka", "płaszcz", "skórzany pas",  "igły i nici", "derka", "namiot", "drewniana miska", "drewniana łyżka", "pochodnia", "lampa oliwna", "kaganek", "lina 5m", "hubka i krzesiwo"];

//tablice z umiejętnościami
//wojownika
let skillsWarrior = ["szt. przetrwania", "dyscyplina", "dowodzenie", "uderzenie tarczą", "jeździectwo", "sztylet", "krótki miecz", "szabla", "włócznia", "łuk", "puklerz", "mała tarcza drew.", "mała tarcza metal."];
module.exports.skillsWarrior = skillsWarrior;

//złoczyńcy
let skillsCriminal = ["trucizny", "wspinaczka", "aktorstwo", "akrobatyka", "pułapki", "skradanie się", "kradzież", "uniki", "blefowanie", "drew. pałka"];
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
	$("#randomHero").on("click", ()=>{ $("#chooseResult").hide(); skills.splice(0,3); equip.splice(0,5);
		hero.splice(0, 1, "nie wybrano"); hero.splice(1, 1, "nie wybrano"); hero.splice(2, 1, "nie wybrano"); hero.splice(3, 1, "nie wybrano");	hero.splice(4, 1, 0); hero.splice(5, 1, 0); hero.splice(6, 1, 0); hero.splice(7, 1, 0); hero.splice(8, 1, 0);	hero.splice(9, 1, [0,0,0]); hero.splice(10, 1, [0,0,0]); hero.splice(11, 1, [0,0,0]); hero.splice(12, 1, "nie wybrano"); hero.splice(13, 1, "nie wybrano"); hero.splice(14, 1, "nie wybrano");

		$("#play").show();

		functions.random(sex, 1); //losowanie płci
		functions.nameRandom(namesWomen, namesMan);//losowanie imienia
		functions.random(races, 2); //losowanie rasy
		functions.random(occupations, 3); //losowanie profesji
		functions.randomPoints2(hero[2], hero[3]); //losowanie punktów
		functions.randomColor(9); //losowanie koloru oczu
		functions.randomColor(10); //losowanie koloru włosów
		functions.randomColor(11); //losowanie koloru skóry
		functions.random(tattoo, 12); //losowanie tatuaży
		functions.weigthHeight(hero[2]); //losowanie wagi i wzrostu
		functions.randomSkills(); //losowanie umiejętności
		functions.randomEquip(equipWeapon, equipArmor, equipShield, equipOther); //losowanie ekwipunku
		functions.heroCreatorResult(hero, skills, equip); //wyświetlanie wyniów losowania
	});
}

module.exports.choose = function(){
	$("#chooseHero").on("click", ()=>{ $("#chooseResult").show(); $("#randomResult").hide(); $("#chooseHeroDescription > div").hide(); skills.splice(0,3); equip.splice(0,5); $("#play").hide();
		hero.splice(0, 1, "nie wybrano"); hero.splice(1, 1, "nie wybrano"); hero.splice(2, 1, "nie wybrano"); hero.splice(3, 1, "nie wybrano");	hero.splice(4, 1, 0); hero.splice(5, 1, 0); hero.splice(6, 1, 0); hero.splice(7, 1, 0); hero.splice(8, 1, 0);	hero.splice(9, 1, [0,0,0]); hero.splice(10, 1, [0,0,0]); hero.splice(11, 1, [0,0,0]); hero.splice(12, 1, "nie wybrano"); hero.splice(13, 1, "nie wybrano"); hero.splice(14, 1, "nie wybrano");

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

let tab = [0, 0, 0, 0, 0, 0, 0];
	$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", true);

	//losowanie punktów cech
		$("#random").on("click", ()=>{
			$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", false);
		let randPoints = Math.round(Math.random()*250);
		$("#pointsRandom").empty().append(randPoints);
		tab.splice(5, 1, randPoints);
  });

	function xyz(tab){
		let x = parseInt(tab[0]) + parseInt(tab[1]) + parseInt(tab[2]) + parseInt(tab[3]) + parseInt(tab[4]);
		tab.splice(6, 1, x);
		$("#pointsRandom").empty().append(tab[5] - tab[6]);

		if(tab[5] - tab[6] <=0 ){
			$("#unlock").show();
			$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", true);
		}
	}

	$("#forceSlider").on("input propertychange",function(){ tab.splice(0, 1, (this.value));	xyz(tab); hero.splice(4, 1, (this.value));
	});
	$("#strenghtSlider").on("input propertychange",function(){ tab.splice(1, 1, (this.value)); xyz(tab); hero.splice(5, 1, (this.value));});
	$("#dexteritySlider").on("input propertychange",function(){ tab.splice(2, 1, (this.value));  xyz(tab); hero.splice(6, 1, (this.value));});
	$("#intellectualsSlider").on("input propertychange",function(){ tab.splice(3, 1, (this.value)); xyz(tab); hero.splice(7, 1, (this.value));});
	$("#charismaSlider").on("input propertychange",function(){ tab.splice(4, 1, (this.value)); xyz(tab); hero.splice(8, 1, (this.value)); });

	$("#unlock").on("click", ()=>{
		$("#forceSlider, #strenghtSlider, #dexteritySlider, #intellectualsSlider, #charismaSlider").prop("disabled", false);
			$("#unlock").hide();
	});

// funkcja opymalizująca wybieranie koloru oczu, włosów i skóry
	function ccc(what, tab, position, where){
		what.on("input propertychange",function(){
			tab.splice(position, 1, this.value);
			where.css("background-color", `rgb(${parseInt(tab[0])},${parseInt(tab[1])}, ${parseInt(tab[2])}`);
		});
	}

//wybieranie koloru oczu
$("#chooseEyes").on("click", ()=>{ yyy(gameInfo.otherTexts.eyesColor); $("#choosingEyes").show(); $("#chooseEyes #resultColorEye").css("background-color", `rgb(${parseInt(hero[9][0])},${parseInt(hero[9][1])}, ${parseInt(hero[9][2])}`); });

let eyesColor = [0, 0, 0];

ccc($("#colorEye1"), eyesColor, 0, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
ccc($("#colorEye2"), eyesColor, 1, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
ccc($("#colorEye3"), eyesColor, 2, $("#resultColorEye"), hero.splice(9, 1, eyesColor));

//wybieranie koloru włosów
$("#chooseHair").on("click", ()=>{ yyy(gameInfo.otherTexts.hairColor); $("#choosingHair").show(); $("#chooseHair #resultColorHair").css("background-color", `rgb(${parseInt(hero[10][0])},${parseInt(hero[10][1])}, ${parseInt(hero[10][2])}`); });
let hairColor = [0, 0, 0];

ccc($("#colorHair1"), hairColor, 0, $("#resultColorHair"), hero.splice(10, 1, hairColor));
ccc($("#colorHair2"), hairColor, 1, $("#resultColorHair"), hero.splice(10, 1, hairColor));
ccc($("#colorHair3"), hairColor, 2, $("#resultColorHair"), hero.splice(10, 1, hairColor));

//wybieranie koloru skóry
$("#chooseSkin").on("click", ()=>{ yyy(gameInfo.otherTexts.skinColor); $("#choosingSkin").show(); $("#chooseSkin #resultColorSkin").css("background-color", `rgb(${parseInt(hero[11][0])},${parseInt(hero[11][1])}, ${parseInt(hero[11][2])}`); });
let skinColor = [0, 0, 0];

ccc($("#colorSkin1"), skinColor, 0, $("#resultColorSkin"), hero.splice(11, 1, skinColor));
ccc($("#colorSkin2"), skinColor, 1, $("#resultColorSkin"), hero.splice(11, 1, skinColor));
ccc($("#colorSkin3"), skinColor, 2, $("#resultColorSkin"), hero.splice(11, 1, skinColor));

//wybieranie tatuaży
$("#chooseTattoo").on("click", ()=>{ yyy(gameInfo.otherTexts.tattoo); });

$("#noneTattoo").on("click", ()=>{ xxx("tatuaż: ", "brak", 12); yyy(gameInfo.otherTexts.noneTattoo); });
$("#jailTattoo").on("click", ()=>{ xxx("tatuaż: ", "więzienny", 12); yyy(gameInfo.otherTexts.jailTattoo); });
$("#tribeTattoo").on("click", ()=>{ xxx("tatuaż: ", "plemienny", 12); yyy(gameInfo.otherTexts.tribeTattoo); });
$("#strangeTatoo").on("click", ()=>{ xxx("tatuaż: ", "dziwny", 12); yyy(gameInfo.otherTexts.strangeTatoo); });

//funkcja ustawiająca zakres suwaka wagi i wzrostu w zależności od wybranej rasy
	function weightHeight(what, tab, position, where, heroPosition){
		what.on("input propertychange",function(){
			tab.splice(position, 1, this.value);
			where.empty().append(`${parseInt(tab)}`);
			hero.splice(heroPosition, 1, this.value);
		});
	}

// funkcja opymalizująca wybieranie wagi i wzrostu
function cba(where, tabPosition, what, num1, num2){
	where.empty().append(tabPosition);
	document.querySelector(what).min = num1;
	document.querySelector(what).max = num2;
}

//wybieranie wagi
//funkcja ustawiająca zakres suwaka
function abc(){
	if(hero[2] == "nie wybrano"){	$("#resultWeight").empty().append("<p class='redText'>Wybierz rasę.</p>" + hero[2]);
}else if(hero[2] == "człowiek"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 120);
	}else if(hero[2] == "półork"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 140);
	}else if(hero[2] == "ork"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 80, 180);
	}else if(hero[2] == "półelf"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 100);
	}else if(hero[2] == "elf"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 40, 90);
	}else if(hero[2] == "krasnolud"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 70, 100);
	}else if(hero[2] == "gnom"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 70);
	}else if(hero[2] == "niziołek"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 60, 100);
	}else if(hero[2] == "goblin"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 50, 80);
	}else if(hero[2] == "trol"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 100, 160);
	}else if(hero[2] == "półolbrzym"){ cba($("#choosingWeight #resultWeight"), weight[0], "#weight", 210, 300);
	}
}

$("#chooseWeight").on("click", ()=>{ yyy(gameInfo.otherTexts.weight); $("#choosingWeight").show(); abc(); });
let weight = [0];

weightHeight($("#weight"), weight, 0, $("#resultWeight"), 13);

//wybieranie wzrostu
//funkcja ustawiająca zakres suwaka
function abcHeight(){
	if(hero[2] == "nie wybrano"){	$("#resultHeight").empty().append("<p class='redText'>Wybierz rasę.</p>" + hero[2]);
	}else if(hero[2] == "człowiek"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 150, 210);
	}else if(hero[2] == "półork"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 170, 220);
	}else if(hero[2] == "ork"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 170, 240);
	}else if(hero[2] == "półelf"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 165, 210);
	}else if(hero[2] == "elf"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 180, 210);
	}else if(hero[2] == "krasnolud"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 100, 145);
	}else if(hero[2] == "gnom"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 90, 140);
	}else if(hero[2] == "niziołek"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 105, 150);
	}else if(hero[2] == "goblin"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 80, 120);
	}else if(hero[2] == "trol"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 190, 260);
	}else if(hero[2] == "półolbrzym"){ cba($("#chooseHeight #resultHeight"), height[0], "#height", 260, 320);
	}
}

$("#chooseHeight").on("click", ()=>{ yyy(gameInfo.otherTexts.height); $("#choosingHeight").show(); abcHeight(); });
let height = [0];

weightHeight($("#height"), height, 0, $("#resultHeight"), 14);

//funkcja optymalizująca wybieranie umiejętności i ekwipunku
function sss(tab, tabLength, what, x, y, z){
	if(tab.indexOf(what) !== -1){
			$("#alerts").html("<p class='newRocker redText center'>Wybrano już tą " + x +".</p>");
			setTimeout(function(){ $("#alerts").empty(); }, 3000);
	}else if( tab.length < tabLength){
				$("#alerts").html("<p class='newRocker greenText center'>Wybrano " + x + ": " + what + ".</p>");
			setTimeout(function(){ $("#alerts").empty(); }, 3000);
			tab.push(what);
			z.append(what);
		}else if( tab.length >= tabLength){
			$("#alerts").html("<p class='newRocker redText center'>Wybrano już " + y +".</p>");
			setTimeout(function(){ $("#alerts").empty(); }, 3000);
			tab.splice(tabLength, 1);
		}
}

//wybieranie umiejętności
$("#chooseSkills").on("click", ()=>{ yyy(gameInfo.otherTexts.skills); $("#choosingSkills").show(); $("#deleteSkills").show();

$("#survivalSkill").on("click", ()=>{ sss(skills, 3, "sztuka przetrwania", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#disciplineSkill").on("click", ()=>{ sss(skills, 3, "dyscyplina", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#commandSkill").on("click", ()=>{ sss(skills, 3, "dowodzenie", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#hitShieldSkill").on("click", ()=>{ sss(skills, 3, "uderz. tarczą", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#horseRiddingSkill").on("click", ()=>{ sss(skills, 3, "jeździectwo", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#daggerSkill").on("click", ()=>{ sss(skills, 3, "sztylet","umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#swordSkill").on("click", ()=>{ sss(skills, 3, "miecz", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#sabreSkill").on("click", ()=>{ sss(skills, 3, "szabla","umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#spearSkill").on("click", ()=>{ sss(skills, 3, "włócznia", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#bowSkill").on("click", ()=>{ sss(skills, 3, "łuk", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#crossBowSkill").on("click", ()=>{ sss(skills, 3, "kusza", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#bucklerSkill").on("click", ()=>{ sss(skills, 3, "puklerz", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#smallShieldWoddenSkill").on("click", ()=>{ sss(skills, 3, "mała tarcza drew.", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#smallShieldMetalSkill").on("click", ()=>{ sss(skills, 3, "mała tarcza metal.", "umiejętność", "trzy umiejętności", $("#resultSkills")); });

$("#poisonsSkill").on("click", ()=>{ sss(skills, 3, "przyg. trucizn", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#climbingSkill").on("click", ()=>{ sss(skills, 3, "wspinaczka", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#actingSkill").on("click", ()=>{ sss(skills, 3, "aktorstwo", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#acrobaticsSkill").on("click", ()=>{ sss(skills, 3, "akrobatyka", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#trapsSkill").on("click", ()=>{ sss(skills, 3, "tworz. pułapek", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#sneakingSkill").on("click", ()=>{ sss(skills, 3, "szkradanie się", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#stealingSkill").on("click", ()=>{ sss(skills, 3, "kradzież kieszonkowa", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#evasionSkill").on("click", ()=>{ sss(skills, 3, "uniki", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#woodenStickSkill").on("click", ()=>{ sss(skills, 3, "drew. pałka", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#daggerSkill").on("click", ()=>{ sss(skills, 3, "sztylet", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#shortSwordSkill").on("click", ()=>{ sss(skills, 3, "krótki miecz", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#bluffingSkill").on("click", ()=>{ sss(skills, 3, "blefowanie", "umiejętność", "trzy umiejętności", $("#resultSkills")); });

$("#readWriteSkill").on("click", ()=>{ sss(skills, 3, "pisanie i czytanie", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#demonsSkill").on("click", ()=>{ sss(skills, 3, "przyw./odp. demona", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#divinationSkill").on("click", ()=>{ sss(skills, 3, "wróżbiarstwo", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#healingSkill").on("click", ()=>{ sss(skills, 3, "leczenie ran","umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#castSpellSkill").on("click", ()=>{ sss(skills, 3, "rzucanie czarów", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#createPotionsSkill").on("click", ()=>{ sss(skills, 3, "tworz. eliksirów", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#magicItemsSkill").on("click", ()=>{ sss(skills, 3, "tworz. mag. przedm.", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#createOintnentSkill").on("click", ()=>{ sss(skills, 3, "tworz. maści", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#astrologySkill").on("click", ()=>{ sss(skills, 3, "astrologia", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#createRunesSkill").on("click", ()=>{ sss(skills, 3, "tworz. runów", "umiejętność", "trzy umiejętności", $("#resultSkills")); });
$("#herbalistsSkill").on("click", ()=>{ sss(skills, 3, "zielarstwo", "umiejętność", "trzy umiejętności", $("#resultSkills")); });

$("#deleteSkills").on("click", ()=>{ skills.splice(0, 3); $("#resultSkills").empty(); });
});

//wybieranie ekwipunku
$("#chooseEquip").on("click", ()=>{ yyy(gameInfo.otherTexts.equip); $("#choosingEquip").show(); $("#deleteEquip").show();
$("#daggerEquip").on("click", ()=>{ sss(equip, 5, "sztylet", "rzecz", "pięć", $("#resultEquip")); });
$("#woodenStickEquip").on("click", ()=>{ sss(equip, 5, "drew. pałka", "rzecz", "pięć", $("#resultEquip")); });
$("#shortSwordEquip").on("click", ()=>{ sss(equip, 5, "krótki miecz", "rzecz", "pięć", $("#resultEquip")); });
$("#sabreEquip").on("click", ()=>{ sss(equip, 5, "szabla", "rzecz", "pięć", $("#resultEquip")); });
$("#spearEquip").on("click", ()=>{ sss(equip, 5, "włócznia", "rzecz", "pięć", $("#resultEquip")); });
$("#slingShotEquip").on("click", ()=>{ sss(equip, 5, "proca", "rzecz", "pięć", $("#resultEquip")); });
$("#bowEquip").on("click", ()=>{ sss(equip, 5, "łuk", "rzecz", "pięć", $("#resultEquip")); });

$("#gambisonEquip").on("click", ()=>{ sss(equip, 5, "przeszywanica", "rzecz", "pięć", $("#resultEquip")); });
$("#leatherArmorEquip").on("click", ()=>{ sss(equip, 5, "zbr. skórzana", "rzecz", "pięć", $("#resultEquip")); });
$("#studdedArmorEquip").on("click", ()=>{ sss(equip, 5, "zbr. ćwiekowana", "rzecz", "pięć", $("#resultEquip")); });

$("#bucklerEquip").on("click", ()=>{ sss(equip, 5, "puklerz", "rzecz", "pięć", $("#resultEquip")); });
$("#smallShieldWoddenEquip").on("click", ()=>{ sss(equip, 5, "mała tarcza drew.", "rzecz", "pięć", $("#resultEquip")); });
$("#smallShieldWMetalEquip").on("click", ()=>{ sss(equip, 5, "mała tarcza metal.", "rzecz", "pięć", $("#resultEquip")); });

$("#tindersEquip").on("click", ()=>{ sss(equip, 5, "hubka i krzesiwo", "rzecz", "pięć", $("#resultEquip")); });
$("#moneyBagEquip").on("click", ()=>{ sss(equip, 5, "mieszek", "rzecz", "pięć", $("#resultEquip")); });
$("#leatherBeltEquip").on("click", ()=>{ sss(equip, 5, "pas skórzany", "rzecz", "pięć", $("#resultEquip")); });
$("#needlesThreadEquip").on("click", ()=>{ sss(equip, 5, "igły i nici", "rzecz", "pięć", $("#resultEquip")); });
$("#tubePartschmenEquip").on("click", ()=>{ sss(equip, 5, "tuba na pergaminy", "rzecz", "pięć", $("#resultEquip")); });

$("#penWritingEquip").on("click", ()=>{ sss(equip, 5, "pęk piór do pisania", "rzecz", "pięć", $("#resultEquip")); });
$("#parchments5piecesEquip").on("click", ()=>{ sss(equip, 5, "pergaminy 5szt.", "rzecz", "pięć", $("#resultEquip")); });
$("#ordinaryClothesEquip").on("click", ()=>{ sss(equip, 5, "zwykłe ubranie", "rzecz", "pięć", $("#resultEquip")); });
$("#clothesEquip").on("click", ()=>{ sss(equip, 5, "płaszcz", "rzecz", "pięć", $("#resultEquip")); });
$("#fussyHatEquip").on("click", ()=>{ sss(equip, 5, "fikuśny kapelusz", "rzecz", "pięć", $("#resultEquip")); });

$("#travelBagEquip").on("click", ()=>{ sss(equip, 5, "torba podróżna", "rzecz", "pięć", $("#resultEquip")); });
$("#purseEquip").on("click", ()=>{ sss(equip, 5, "sakwa", "rzecz", "pięć", $("#resultEquip")); });
$("#blanketEquip").on("click", ()=>{ sss(equip, 5, "koc", "rzecz", "pięć", $("#resultEquip")); });
$("#tentEquip").on("click", ()=>{ sss(equip, 5, "namiot", "rzecz", "pięć", $("#resultEquip")); });
$("#wooddenBowlEquip").on("click", ()=>{ sss(equip, 5, "drewniana miska", "rzecz", "pięć", $("#resultEquip")); });

$("#woodenSpoonEquip").on("click", ()=>{ sss(equip, 5, "drew. łyżka", "rzecz", "pięć", $("#resultEquip")); });
$("#torchEquip").on("click", ()=>{ sss(equip, 5, "pochodnia", "rzecz", "pięć", $("#resultEquip")); });
$("#oilLampEquip").on("click", ()=>{ sss(equip, 5, "lampa oliwna", "rzecz", "pięć", $("#resultEquip")); });
$("#lampOilEquip").on("click", ()=>{ sss(equip, 5, "kaganek", "rzecz", "pięć", $("#resultEquip")); });
$("#rope5mEquip").on("click", ()=>{ sss(equip, 5, "lina 5m", "rzecz", "pięć", $("#resultEquip")); });

$("#deleteEquip").on("click", ()=>{ equip.splice(0, 5); $("#resultEquip").empty(); });
});

//pokazenie dokananych wyborów
		$("#resultChoose").on("click", ()=>{ yyy();
				check(hero);

				$("#choosingResult").show().addClass("newRocker");
				$("#choosingResult #resultName p:nth-child(2)").empty().append(hero[0]);
				$("#choosingResult #resultSex p:nth-child(2)").empty().append(hero[1]);
				$("#choosingResult #resultRace p:nth-child(2)").empty().append(hero[2]);
				$("#choosingResult #resultOccupation p:nth-child(2)").empty().append(hero[3]);

				$("#choosingResult #points div:first-child p").empty().append(hero[4]);
				$("#choosingResult #points div:nth-child(2) p").empty().append(hero[5]);
				$("#choosingResult #points div:nth-child(3) p").empty().append(hero[6]);
				$("#choosingResult #points div:nth-child(4) p").empty().append(hero[7]);
				$("#choosingResult #points div:nth-child(5) p").empty().append(hero[8]);

				$("#choosingResult #resultEyes p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[9][0])},${parseInt(hero[9][1])}, ${parseInt(hero[9][2])}`);

				$("#choosingResult #resultHair p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[10][0])},${parseInt(hero[10][1])}, ${parseInt(hero[10][2])}`);

				$("#choosingResult #resultSkin p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[11][0])},${parseInt(hero[11][1])}, ${parseInt(hero[11][2])}`);

				$("#choosingResult #resultTattoo p:nth-child(2)").empty().append(hero[12]);
				$("#choosingResult #resultWeight p:nth-child(2)").empty().append(hero[13]);
				$("#choosingResult #resultHeight p:nth-child(2)").empty().append(hero[14]);

				$("#choosingResult #resultSkills p:nth-child(2)").empty().append(skills + " ");
				$("#choosingResult #resultEquip p:nth-child(2)").empty().append(equip + " ");
	});

	});
}
