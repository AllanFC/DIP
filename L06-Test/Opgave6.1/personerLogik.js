//Declarations
export let persons = [];


//Functions
export function addPerson(name, age){
    persons.push({name: name, age: age})
}

export function findPersonByName(name) {
    for (const p of persons) {
        if(p.name == name){
            return p.name + " " + p.age;
        }
    }
}

export function findPersonByAge(age) {
    let listOfPeople = [];
    for (const p of persons) {
        if(p.age == age){
            listOfPeople.push(p.name + " " + p.age);
        }
    }
    return listOfPeople;
}
