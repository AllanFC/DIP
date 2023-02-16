//Declarations
let persons = [];
let nameInput = document.querySelector("#name");
let ageInput = document.querySelector("#age");
let addBtn = document.querySelector("#addBtn");

import { createTable,updateTable } from "./personer";

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

//interactions
addBtn.onclick = () => addPerson(nameInput.value, ageInput.value);