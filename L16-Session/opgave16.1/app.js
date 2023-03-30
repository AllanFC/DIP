import express from 'express';
const app = express();
import pug from 'pug';
import session from 'express-session';
import path from 'path';

const __dirname = "L16-Session/opgave16.1";

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use(session({secret: 'randomsessionid', saveUninitialized: true, cookie: {maxAge: 1000*1000}, resave: false}));
app.use(express.static(__dirname + '/files'));
app.use(express.json());

let products = [{id: "1", name: "Marabou", price: 29},
                {id: "2", name: "Frozen Pizza", price: 35},
                {id: "3", name: "Icetea 1.5L", price: 5},
                {id: "4", name: "Nachos cheese", price: 22},
                {id: "5", name: "Shredded chedder", price: 17},
                {id: "6", name: "Shredded mozaralla", price: 17}]

app.post('/login', (request, response) => {
    const { name, password } = request.body;
    if (password === 'test1234' && name) {
        request.session.name = name;
        response.status(201).send(['login ok!']);
    } else {
        response.sendStatus(401);
    }
});

app.post('/add', (request, response) => {
    let name = request.session.name;
    if(name !== undefined){
        const { id } = request.body;
        let cart = request.session.cart
        if (cart == undefined) {
            cart = {name: name, cart: [], products: products}
        }
        for(let product of cart.products) {
            if(product.id == id){
                cart.cart.push(product)
            }
        }
        request.session.cart=cart
        response.status(201).send(['added']);
    } else {
        response.redirect("/index.html");
    }
});

app.get('/shop', (request, response) => {
    let name = request.session.name;
    if(name !== undefined){
        let cart = request.session.cart;
        if (cart == undefined) {
            cart = {name: name, cart: [], products: products}
        }
        products.cart = cart;
        response.render('index', cart);
    } else{
        response.redirect("/index.html");
    }
    
});

app.listen(8181, () => {console.log("Running...");});