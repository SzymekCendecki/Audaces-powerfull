let functions=require("./functions.js");
let gameInfo=require("./gameInfo.js");

//tablica zbiorcza z wyniami losowania lub wyborami postaci
//0-imię, 1-płeć, 2-rasa, 3-profesja, 4-siła, 5-wytrzymałość, 6-zręczność, 7-inteligencja, 8-charyzma, 9-kolor oczu, 10-kolor włosów, 11-kolor skóry, 12 - tatuaże, 13 - waga, 14-wzrost
let hero = ["nie wybrano", "nie wybrano", "nie wybrano", "nie wybrano", 0, 0, 0, 0, 0, [0, 0, 0], [0, 0, 0], [0, 0, 0], "nie wybrano", "nie wybrano", "nie wybrano"];
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
$("#chooseEyes").on("click", ()=>{ yyy(gameInfo.otherTexts.eyesColor); $("#choosingEyes").show(); $("#resultColorEye").css("background-color", `rgb(${parseInt(hero[9][0])},${parseInt(hero[9][1])}, ${parseInt(hero[9][2])}`); });

let eyesColor = [0, 0, 0];

ccc($("#colorEye1"), eyesColor, 0, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
ccc($("#colorEye2"), eyesColor, 1, $("#resultColorEye"), hero.splice(9, 1, eyesColor));
ccc($("#colorEye3"), eyesColor, 2, $("#resultColorEye"), hero.splice(9, 1, eyesColor));

//wybieranie koloru włosów
$("#chooseHair").on("click", ()=>{ yyy(gameInfo.otherTexts.hairColor); $("#choosingHair").show(); $("#resultColorHair").css("background-color", `rgb(${parseInt(hero[10][0])},${parseInt(hero[10][1])}, ${parseInt(hero[10][2])}`); });
let hairColor = [0, 0, 0];

ccc($("#colorHair1"), hairColor, 0, $("#resultColorHair"), hero.splice(10, 1, hairColor));
ccc($("#colorHair2"), hairColor, 1, $("#resultColorHair"), hero.splice(10, 1, hairColor));
ccc($("#colorHair3"), hairColor, 2, $("#resultColorHair"), hero.splice(10, 1, hairColor));

//wybieranie koloru skóry
$("#chooseSkin").on("click", ()=>{ yyy(gameInfo.otherTexts.skinColor); $("#choosingSkin").show(); $("#resultColorSkin").css("background-color", `rgb(${parseInt(hero[11][0])},${parseInt(hero[11][1])}, ${parseInt(hero[11][2])}`); });
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
			console.log(hero);
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
	}else if(hero[2] == "człowiek"){ cba($("#resultWeight"), weight[0], "#weight", 40, 120);
	}else if(hero[2] == "półork"){ cba($("#resultWeight"), weight[0], "#weight", 50, 140);
	}else if(hero[2] == "ork"){ cba($("#resultWeight"), weight[0], "#weight", 80, 180);
	}else if(hero[2] == "półelf"){ cba($("#resultWeight"), weight[0], "#weight", 40, 100);
	}else if(hero[2] == "elf"){ cba($("#resultWeight"), weight[0], "#weight", 40, 90);
	}else if(hero[2] == "krasnolud"){ cba($("#resultWeight"), weight[0], "#weight", 70, 100);
	}else if(hero[2] == "gnom"){ cba($("#resultWeight"), weight[0], "#weight", 50, 70);
	}else if(hero[2] == "niziołek"){ cba($("#resultWeight"), weight[0], "#weight", 60, 100);
	}else if(hero[2] == "goblin"){ cba($("#resultWeight"), weight[0], "#weight", 50, 80);
	}else if(hero[2] == "trol"){ cba($("#resultWeight"), weight[0], "#weight", 100, 160);
	}else if(hero[2] == "półolbrzym"){ cba($("#resultWeight"), weight[0], "#weight", 210, 300);
	}
}

$("#chooseWeight").on("click", ()=>{ yyy(gameInfo.otherTexts.weight); $("#choosingWeight").show(); abc(); });
let weight = [0];

weightHeight($("#weight"), weight, 0, $("#resultWeight"), 13);

//wybieranie wzrostu
//funkcja ustawiająca zakres suwaka
function abcHeight(){
	if(hero[2] == "nie wybrano"){	$("#resultHeight").empty().append("<p class='redText'>Wybierz rasę.</p>" + hero[2]);
	}else if(hero[2] == "człowiek"){ cba($("#resultHeight"), height[0], "#height", 150, 210);
	}else if(hero[2] == "półork"){ cba($("#resultHeight"), height[0], "#height", 170, 220);
	}else if(hero[2] == "ork"){ cba($("#resultHeight"), height[0], "#height", 170, 240);
	}else if(hero[2] == "półelf"){ cba($("#resultHeight"), height[0], "#height", 165, 210);
	}else if(hero[2] == "elf"){ cba($("#resultHeight"), height[0], "#height", 180, 210);
	}else if(hero[2] == "krasnolud"){ cba($("#resultHeight"), height[0], "#height", 100, 145);
	}else if(hero[2] == "gnom"){ cba($("#resultHeight"), height[0], "#height", 90, 140);
	}else if(hero[2] == "niziołek"){ cba($("#resultHeight"), height[0], "#height", 105, 150);
	}else if(hero[2] == "goblin"){ cba($("#resultHeight"), height[0], "#height", 80, 120);
	}else if(hero[2] == "trol"){ cba($("#resultHeight"), height[0], "#height", 190, 260);
	}else if(hero[2] == "półolbrzym"){ cba($("#resultHeight"), height[0], "#height", 260, 320);
	}
}

$("#chooseHeight").on("click", ()=>{ yyy(gameInfo.otherTexts.height); $("#choosingHeight").show(); abcHeight(); });
let height = [0];

weightHeight($("#height"), height, 0, $("#resultHeight"), 14);

//pokazenie dokananych wyborów
		$("#resultChoose").on("click", ()=>{ yyy();
			console.log(hero);
				$("#choosingResult").show();
				$("#resultName p:nth-child(2)").empty().append(hero[0]);
				$("#resultSex p:nth-child(2)").empty().append(hero[1]);
				$("#resultRace p:nth-child(2)").empty().append(hero[2]);
				$("#resultOccupation p:nth-child(2)").empty().append(hero[3]);
				$("#points div:first-child p").empty().append(hero[4]);
				$("#points div:nth-child(2) p").empty().append(hero[5]);
				$("#points div:nth-child(3) p").empty().append(hero[6]);
				$("#points div:nth-child(4) p").empty().append(hero[7]);
				$("#points div:nth-child(5) p").empty().append(hero[8]);

				$("#resultEyes p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[9][0])},${parseInt(hero[9][1])}, ${parseInt(hero[9][2])}`);

				$("#resultHair p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[10][0])},${parseInt(hero[10][1])}, ${parseInt(hero[10][2])}`);

				$("#resultSkin p:nth-child(2)").css("background-color", `rgb(${parseInt(hero[11][0])},${parseInt(hero[11][1])}, ${parseInt(hero[11][2])}`);
	});

	});
}
