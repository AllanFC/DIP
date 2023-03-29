import pug from 'pug';
import express from 'express';

let app = express();

let users = {users:[{name: "bob", username: "bobbob", email:"bobbob@gmail.com"},
            {name: "Hans", username: "HansHans", email:"HansHans@gmail.com"},
            {name: "Eric", username: "EricEric", email:"EricEric@gmail.com"},
            {name: "Lars", username: "LarsLars", email:"LarsLars@gmail.com"},
            {name: "Henrik", username: "HenrikHenrik", email:"HenrikHenrik@gmail.com"}]}

app.set('view engine', 'pug');
app.set('views', 'L15-Templating\\opgave15.2\\views');

console.log(pug.renderFile("L15-Templating\\opgave15.2\\views\\users.pug", users));

app.get('/', (req, res) => {res.render('users', users)})
app.listen(8181);