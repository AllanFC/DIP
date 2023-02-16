//Declarations
export let persons = [];
let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let addBtn = document.querySelector("#addBtn");


import {createTable, updateTable} from "./personer.js";

//Functions
export function addPerson(name, age){
    if(nameInput.value !== "" && ageInput.value !== ""){
        persons.push({name: name, age: age})
        nameInput.value = "";
        ageInput.value = "";
        if(persons.length === 1){
            createTable(persons);
        }
        updateTable(persons);
    }
}

export function findPersonByName(name) {
    for (const p of persons) {
        if(p.name == name){
            return p.name + " " + p.age;
        }
    }
}

export function findPersonByAge(name) {
    let listOfPeople = [];
    for (const p of persons) {
        if(p.name == name){
            listOfPeople.push(p.name + " " + p.age);
        }
    }
    if(listOfPeople.length > 0) {
        return listOfPeople;
    }
}

//interactions
addBtn.onclick = () => addPerson(nameInput.value, ageInput.value);
console.log("logik");