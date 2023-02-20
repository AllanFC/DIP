//Document queries
let dice1 = document.querySelector("#dice1");
let dice2 = document.querySelector("#dice2");
let dice3 = document.querySelector("#dice3");
let dice4 = document.querySelector("#dice4");
let dice5 = document.querySelector("#dice5");
let allDice = [dice1, dice2, dice3, dice4, dice5];

let rollBtn = document.querySelector("#rollButton");
let rollLbl = document.querySelector("#rollLbl");

let lbl1 = document.querySelector("#lbl1");
let lbl2 = document.querySelector("#lbl2");
let lbl3 = document.querySelector("#lbl3");
let lbl4 = document.querySelector("#lbl4");
let lbl5 = document.querySelector("#lbl5");
let lbl6 = document.querySelector("#lbl6");
let lbl7 = document.querySelector("#lbl7");
let lbl8 = document.querySelector("#lbl8");
let lbl9 = document.querySelector("#lbl9");
let lbl10 = document.querySelector("#lbl10");
let lbl11 = document.querySelector("#lbl11");
let lbl12 = document.querySelector("#lbl12");
let lbl13 = document.querySelector("#lbl13");
let lbl14 = document.querySelector("#lbl14");
let lbl15 = document.querySelector("#lbl15");
let allLbls = [lbl1, lbl2, lbl3, lbl4, lbl5, lbl6, lbl7, lbl8,
            lbl9, lbl10, lbl11, lbl12, lbl13, lbl14, lbl15];


let input1s = document.querySelector("#Ones");
let input2s = document.querySelector("#Twos");
let input3s = document.querySelector("#Threes");
let input4s = document.querySelector("#Fours");
let input5s = document.querySelector("#Fives");
let input6s = document.querySelector("#Sixs");
let inputOnePair = document.querySelector("#OnePair");
let inputTwoPair = document.querySelector("#TwoPair");
let inputThreeSame = document.querySelector("#ThreeSame");
let inputFourSame = document.querySelector("#FourSame");
let inputFullHouse = document.querySelector("#FullHouse");
let inputSmallStraight = document.querySelector("#SmallStraight");
let inputLargeStraight = document.querySelector("#LargeStraight");
let inputChance = document.querySelector("#Chance");
let inputYatzy = document.querySelector("#Yatzy");
let inputSum = document.querySelector("#inpSum");
let inputBonus = document.querySelector("#inpBonus");
let inputTotal = document.querySelector("#inpTotal");
let allInputs = [input1s, input2s, input3s, input4s, input5s, input6s, inputOnePair,
                inputTwoPair, inputThreeSame, inputFourSame, inputFullHouse,
                inputSmallStraight, inputLargeStraight, inputChance, inputYatzy];

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
        if(die.getThrowCount() > 0){
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

let widthtest = document.querySelector("#background").getBoundingClientRect().width;
console.log(widthtest);

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
    holds = [false, false, false, false, false];
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
        inputBonus.value = 50
        bonus = 50;
    }

    let totalSum = sameSum;
    for(let i = 6; i < allInputs.length; i++){
        if(allInputs[i].name == "Locked"){
            totalSum += parseInt(allInputs[i].value);
        }
    }
    inputTotal.value = totalSum + bonus;
}


