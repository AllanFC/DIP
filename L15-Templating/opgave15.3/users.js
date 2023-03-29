import pug from 'pug';
import express from 'express';
let app = express();

let userURL = "https://randomuser.me/api/?nat=dk&results=100"

async function get(url) {
    const respons = await fetch(url);
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
let users = await get(userURL);
app.get('/', (req, res) => {res.render('users', users)})
app.listen(8181);
// get(userURL)