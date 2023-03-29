import pug from 'pug';
import express from 'express';
let app = express();



async function getUsers(nationality, amount) {
    const allowedNationalities = ["gb", "dk", "de", "fr"];
    if(!(allowedNationalities.includes(nationality) && 10 <= amount && amount <= 100)){
        throw new Error("You have failed in life")
    }
    let userURL = "https://randomuser.me/api/?nat=" + nationality + "&results=" + amount;
    const respons = await fetch(userURL);
    if (respons.status!== 200) // OK
        throw new Error(respons.status);
    let userlist = [];
    let usersObj = {};
    await respons.json().then((users) => {
        for (let user of users.results){
            userlist.push(user);
        }
        usersObj.users = userlist;
    });
    return usersObj;
}
// console.log(await get(userURL));

// while(true);

app.set('view engine', 'pug');
app.set('views', 'L15-Templating\\opgave15.3\\views');

// console.log(pug.renderFile("L15-Templating\\opgave15.3\\views\\users.pug", get(userURL)));
let users = await getUsers("dk", 10);
app.get('/', (req, res) => {res.render('users', users)})
app.listen(8181);
// get(userURL)