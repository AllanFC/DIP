let persons = [
    {name: "Hans", age: 34, phoneNumber: "11111111"},
    {name: "Lars", age: 29, phoneNumber: "22222222"},
    {name: "Erik", age: 45, phoneNumber: "33333333"},
    {name: "Karsten", age: 53, phoneNumber: "44444444"},
    {name: "Karl", age: 25, phoneNumber: "55555555"},
]


// Find by phonenumber
console.log(persons.filter(person => person.phoneNumber === "44444444")[0]);

// Find lowest age
console.log(persons.reduce((youngest, person) => youngest = person.age < youngest.age ? person : youngest, persons[0]));

// give persons id
// persons.forEach((person, index) => (person.id = index));
// console.log(persons);
// persons = persons.map((person, index) => ({id:index, person}))
// console.log(persons);

// generate string of names sorted and comma separated
let stringOfSortedNames = persons.sort((a, b) => a.name.localeCompare(b.name)).map((p, index) => (p.name)).toString()
console.log(stringOfSortedNames);

// generate a string of names and phonenumber of people under 30
let stringOfNamesAndNumbers = persons.filter(p => p.age < 30).map(p => (p.name + " " + p.phoneNumber));
console.log(stringOfNamesAndNumbers);


