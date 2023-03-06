class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p){
        return p.__proto__ === Person.prototype && p.navn === this.navn;
    }
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s){
        return s.__proto__ === Studerende.prototype && this.navn === s.navn && this.id === s.id;
    }
}

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);
let k1 = new Kat("Ricard");
let k2 = new Kat("Columbus");
let liste = [p1, p2, s1, s2];
let listeMedKatte = [p1, p2, s1, s2, k1, k2];



function compare(o1, o2){
    return o1.navn.localeCompare(o2.navn);
}

console.log(p1.equals(p1));
console.log(s1.equals(s1));

liste.sort(compare);
console.log(liste);

listeMedKatte.sort(compare);
console.log(listeMedKatte);