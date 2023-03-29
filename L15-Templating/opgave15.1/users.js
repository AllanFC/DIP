import pug from 'pug';
import express from 'express';

let app = express();

let user = {name: "bob", username: "bobbob", email:"bobbob@gmail.com"}

app.set('view engine', 'pug');
app.set('views', 'L15-Templating\\opgave15.1\\views');

console.log(pug.renderFile("L15-Templating\\opgave15.1\\views\\users.pug", user));

app.get('/', (req, res) => {res.render('users', user)})
app.listen(8181);