let personer = [
    {fornavn : "John", efternavn : "Johnson", email : "'john@johnson.dk'", telefon : "88888888"},
    {fornavn : "Hans", efternavn : "Hansen", email : "'Hans@Hansen.dk'", telefon : "77777777"},
    {fornavn : "Lars", efternavn : "Larsen", email : "'Lars@Larsen.dk'", telefon : "66666666"},
    {fornavn : "Henrik", efternavn : "Henriksen", email : "'Henrik@Henriksen.dk'", telefon : "55555555"}];

personer[4] = 4

console.log(personer[1]);

personer[2] = 'two';

delete personer[3];

console.log(personer);