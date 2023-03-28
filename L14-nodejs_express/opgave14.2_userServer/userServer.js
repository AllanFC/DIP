import http from 'http';
import fetch from 'node-fetch';

const userUrl = 'https://jsonplaceholder.typicode.com/users';

async function get(URL){
    const respons = await fetch(URL);
    if (respons.status !== 200){ // OK
        throw new Error(respons.status);
    }
    return await respons.json();
}

function createUsersTable(users){
    let html = '<table>';
    for (let user of users) {
        html +=
            '<tr><td>' + user.id +
            '</td><td>' + user.name +
            '</td><td>' + user.company.name +
            '</td></tr>\n';
    }
    html += '</table>';
    return html;
}

http.createServer(async (req, res) => {
    if(req.method === 'GET'){
        try{
            let users = await get(userUrl);
            let html = createUsersTable(users);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
        } catch (error){
            if (typeof error.message === 'number') {
                res.writeHead(error.message);
            } else {
                res.writeHead(400); // Bad Request
            }
            res.write(error.name + ": " + error.message);
        }
    }
    res.end();
}).listen(8181);