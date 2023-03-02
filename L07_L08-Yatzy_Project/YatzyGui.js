//Document queries
let allDice = [];
for (let i = 1; i <= 5; i++) {
    allDice.push(document.querySelector("#dice" + i))
}

let rollBtn = document.querySelector("#rollButton");
let rollLbl = document.querySelector("#rollLbl");

let allLbls = [];

for (let i = 1; i <= 15; i++) {
    allLbls.push(document.querySelector("#lbl" + i))
    
}

let names = ["Ones", "Twos", "Threes", "Fours", "Fives", "Sixs", "OnePair", "TwoPair", "ThreeSame",
            "FourSame", "FullHouse", "SmallStraight", "LargeStraight", "Chance", "Yatzy"]
let inputSum = document.querySelector("#inpSum");
let inputBonus = document.querySelector("#inpBonus");
let inputTotal = document.querySelector("#inpTotal");
let allInputs = [];

for (let i = 0; i < 15; i++) {
    allInputs.push(document.querySelector("#" + names[i]))
}

//Imports
import YatzyDie from "./Yatzy.js";
let die = new YatzyDie();

//Declarations
let diceFaces = [{value: 1, src: "./Images/dice1.png"}, {value: 2, src: "./Images/dice2.png"}, {value: 3, src: "./Images/dice3.png"},
                 {value: 4, src: "./Images/dice4.png"}, {value: 5, src: "./Images/dice5.png"}, {value: 6, src: "./Images/dice6.png"}];

let holds = [false, false, false, false, false];

let turnCounter = 0;

for(let e in allDice){
    allDice[e].onclick = () => {
        holdDie(e);
    };
}

for(let e in allLbls){
    allLbls[e].onclick = () => {
        if(die.getThrowCount() > 0 && allInputs[e].name != "Locked"){

            allInputs[e].name = "Locked";
            allInputs[e].disabled = true;
            turnCounter++;
            turnCounter == 15 ? newGame() : reset();
        }
    }
    allInputs[e].onclick = () => {
        if(die.getThrowCount() > 0){
            allInputs[e].name = "Locked";
            allInputs[e].disabled = true;
            turnCounter++;
            turnCounter == 15 ? newGame() : reset();
        }
    }
}

rollBtn.onclick = () => {roll()}

//Functions
function holdDie(imgNumber){
    if(die.getThrowCount() > 0){
        holds[imgNumber] = !holds[imgNumber];
        if(holds[imgNumber] === false){
            allDice[imgNumber].style.borderStyle = "hidden";
        } else {
            allDice[imgNumber].style.border = "2px solid #2289ff";
            allDice[imgNumber].style.borderRadius = "14px";
        }
    }
}

function reset(){
    for (const i in holds) {
        holds[i] = false;
    }
    for(let e in allLbls){
        if(allInputs[e].name != "Locked"){
            allInputs[e].value = "";
        }
    }
    for(let e in allDice){
        allDice[e].style.borderStyle = "hidden";
    }
    die.resetThrowCount();
    rollLbl.textContent = "Roll " + (die.getThrowCount());
    rollBtn.disabled = false;
    updateSums();
}

function newGame(){
    alert(`You scored a total of ${inputTotal.value}`)
    holds = [false, false, false, false, false];
    for(let e in allLbls){
        allInputs[e].value = "";
        allInputs[e].name = "";
        allInputs[e].disabled = false;
    }
    inputSum.value = "";
    inputBonus.value = "";
    inputTotal.value = "";
    die.resetThrowCount();
    rollLbl.textContent = "Roll " + (die.getThrowCount());
    rollBtn.disabled = false;
}

function roll(){
    die.throwDice(holds);
    let values = die.getValues();
    for (let i in allDice) {
        allDice[i].src=diceFaces[values[i]-1].src;
    }
    rollLbl.textContent = "Roll " + (die.getThrowCount());
    if(die.getThrowCount() >= 3){
        rollBtn.disabled = true;
    }
    fillResults();
}

function fillResults(){
    let results = die.getResults();
    for(let inp in allInputs){
        if(allInputs[inp].name != "Locked"){
            allInputs[inp].value = results[inp];
        }
    }
}

function updateSums(){
    let sameSum = 0;
    for(let i = 0; i < 6; i++){
        if(allInputs[i].name == "Locked"){
            sameSum += parseInt(allInputs[i].value);
        }
    }
    inputSum.value = sameSum;

    let bonus = 0;
    if(sameSum >= 63){
        bonus = 50;
    }
    inputBonus.value = bonus;

    let totalSum = sameSum;
    for(let i = 6; i < allInputs.length; i++){
        if(allInputs[i].name == "Locked"){
            totalSum += parseInt(allInputs[i].value);
        }
    }
    inputTotal.value = totalSum + bonus;
}


