"use strict";

var question = document.getElementById("question");
var button = document.querySelectorAll("button");
var progress = document.querySelector("#progress");
var questionNumber = 0;
var resultNumber = 0;
var questions = [
    {
        text: "Kam naudingos morkos?",
        choices: ["Niekam","Hitleriui","Kepenims","Odai"],
        answer: "Odai"
    },
    {
    text: "Kam naudingi obuoliai?",
    choices: ["Širdžiai", "Kojoms", "Delfinams", "Virškinimui"],
    answer: "Virškinimui"
    },
    {
    text: "Kokias ligas padeda gydyti agrastai?",
    choices: ["Cukrini diabetą", "Kepenų cirozę", "Nemiga", "Vėžį"],
    answer: "Cukrini diabetą"
    },
    {
    text: "Kokio vitamino gausu apelsinuose?",
    choices: ["Vitamino E", "Vitamino A", "Vitamino C", "Vitamino B"],
    answer: "Vitamino C"
    },
    {
    text: "Kokiais dalykais yra turtingi arbūzai?",
    choices: ["Vitaminais", "Mineralais", "Antioksidantais", "Visi teisingi"],
    answer: "Visi teisingi"
    }
    ]

    // uzkrauna klausima ir atsakymus
var populate = () => {
    if(questionNumber < questions.length) {
        question.innerText = questions[questionNumber].text;
    button.forEach((x,i) => {
        x.innerText = `${questions[questionNumber].choices[i]}`;
    });
    } else {
        // uzkrauna rezultatus
        showResults();
    }
}

// skaiciuoja teisingus atsakymus
var check = guess => {
    if(guess.innerText === questions[questionNumber].answer) resultNumber++;
}

// rodo progresa
var showProgress = () => {
    questionNumber++;
    // uzkrauna progreso skaiciu
    progress.innerText = questionNumber + 1;
}

// priskiria funkcija mygtukams 
button.forEach((x) => {
    x.addEventListener("click",function(){
        setTimeout(function(){
            // rodo progresa
            showProgress();
            // (callback) uzkrauna klausima ir atsakymus
            populate();
        }, 10);
        setTimeout(function(){
            button.classList.add("shake");
        },100)
        // skaiciuoja teisingus atsakymus
        check(this);
    });
});


// result page
var showResults = () => {
    var quiz = document.getElementById("quiz");
    quiz.innerHTML = `<h1>Teisingu atsakymu skaicius:  ${resultNumber} </h1>`
    document.querySelector("h1").style.color = "#c85c5c";
    document.querySelector("h1").style.fontSize = "100px";
    document.querySelector("h1").style.textShadow = "3px 3px #fbd148";
    document.querySelector("h1").style.padding = "50px";
    document.querySelector(".grid").style.margin = "75px auto";
}

// pirmas uzkrovimas
populate();
