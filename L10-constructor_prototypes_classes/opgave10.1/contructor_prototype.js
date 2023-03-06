function Animal(name, age){
    this.name = name;
    this.age = age;
    this.toString = () => {return `${this.name} ${this.age}`;}
}
Animal.prototype.canRun = () => {console.log("I am fast af boi!");}

let animal1 = new Animal("Horse", 10);
let animal2 = new Animal("Donkey", 11);


function Human(name, age, money){
    Animal.call(this, name, age);
    this.money = money;
    this.canEarn = () => {console.log("I can earn monies ALOT OF MONIES");}
}
Human.prototype.toString = function() {return `${this.name} ${this.age}`;}
Human.prototype.__proto__ = Animal.prototype;
let human1 = new Human("Erik", 32, 1);
let human2 = new Human("Henrik", 28, 2);
human2.canRun = () => (console.log("I can also run as af boi"));


console.log(animal1.toString());
animal1.canRun();

console.log(human1.toString());
human1.canEarn();
human1.canRun();

console.log(human2.toString());
human2.canRun();
