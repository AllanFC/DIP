class Person {
    constructor(navn){
        this.groups = [];
        this.navn = navn;
    }
    toString() { return this.navn; }
    equals(p){
        return p.__proto__ === Person.prototype && p.navn === this.navn;
    }
    addGroup(group){
        this.groups.push(group);
        group.addPerson(this);
    }

    removeGroup(group){
        group.removePerson(this);
        this.groups.filter(g => g !== group);
    }

    isInGroup(group){
        return this.groups.includes(group);
    }

    getGroups(){
        return this.groups;
    }
}

class Group {
    constructor(navn) {
        this.persons = [];
        this.navn = navn;
    }
    toString() { return this.navn; }

    addPerson(person){
        this.persons.push();
    }

    removePerson(person){
        this.persons.filter(p => p !== person);
    }

    hasPerson(person){
        this.persons.includes(person);
    }

    getPersons(){
        return this.persons;
    }
}


let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let p3 = new Person("Lars");
let p4 = new Person("Hans");

let g1 = new Group()

p1.addGroup(g1);
p2.addGroup(g1);
p3.addGroup(g1);
p4.addGroup(g1);

console.log(g1.getPersons());
console.log(p1.getGroups());