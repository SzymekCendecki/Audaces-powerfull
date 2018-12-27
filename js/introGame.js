let functions=require("./functions.js");
let heroCreator=require("./heroCreator.js");
let room=require("./room.js");

let introGameTexts = {
  "text1":"<p class='animOpacity01'>Mówią, że Dzikie Pustkowia to kraina opuszczona przez Bogów.</p>",
  "text2":"<p class='animOpacity01'>Pełna siedzib mrocznych kultów, wyrzutków społeczeństwa, krwiożerczych bestii i demonów, przywołanych czarną magią z innych wymiarów.</p>",
  "text3":"<p class='animOpacity01'>Krąży wiele legend o ukrytych, nieprzebranych skarbach, o herosach - smokobójcach.</p>",
  "text4":"<p class='animOpacity01'>Dzikie Pustkowia fascynuję i przerażają, jednak wielu śmiałków wędruje w tą część świata w poszukiwaniu bogactw i chwały.</p>",
  "text5":"<p class='animOpacity01'>Większość nie wraca...</p>",
  "text6":"<p class='animOpacity01'>Twoja historia zaczyna się w mieście Erharuf.</p>",
  "text7":"<p class='animOpacity01'>W ostatnim bezpiecznym mieście przed Dzikimi Pustkowiami.</p>",
  "text8":"<p class='animOpacity01'>Na usilną prośbę znajomego kapłana zgadzasz się dostarczyć małą paczkę dla tamtejszego mnicha, rezydującego w niewielkiej wiosce, która leży tuż przy granicy z Dzikimi Pustkowiami.</p>"
}

module.exports.occupationTexts = introGameTexts;

module.exports.showIntro = function(){
  $("#play").on("click", ()=>{
    $("#randomHero, #chooseHero, #play, #randomResult, #chooseResult").hide();
    $("#introGameTexts, #skip").show();
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text1); }, 0);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text2); }, 4000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text3); }, 8000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text4); }, 12000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text5); }, 16000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text6); }, 20000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text7); }, 24000);
    setTimeout(()=>{ $("#introGameTexts").append(introGameTexts.text8); }, 28000);
    setTimeout(()=>{ $("#introGameTexts, #skip").hide(); }, 35000);

    $("#skip").on("click", ()=>{
      $("#skip, #introGameTexts").hide();
      $("#features, #equip, #skills, #tasks").show();
      $("#outRoom, #lookAroundRoom, #wardrobe, #chest, #package").show();
      $("#mainPartDescription").before(room.roomTexts.firstText);
    });
  });
}
