const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';
// async function get(url) {
//     const respons = await fetch(url);
//     if (respons.status !== 200) // OK
//         throw new Error(respons.status);
//     let data = await respons.json();
//     createUsersTable(data);
// }


async function createUsersTable(){
    const respons = await fetch(userUrl);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    let data = await respons.json();

    let table = document.createElement('table');
    
    for(let row of data){
        let tr = document.createElement('tr');
        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));

        tr.cells[0].appendChild(document.createTextNode(row.id));
        tr.cells[1].appendChild(document.createTextNode(row.name));

        table.appendChild(tr);
            tr.onclick = () => {
                getPostFromUser(tr.cells[0].innerHTML);
            }
    }
    document.querySelector("body").appendChild(table);
}

async function getPostFromUser(id){
    const respons = await fetch(postUrl+id);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    let data = await respons.json();

    let table = document.createElement('table');
    
    for(let row of data){
        let tr = document.createElement('tr');
        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));

        tr.cells[0].appendChild(document.createTextNode("Post id: " + row.id));
        tr.cells[1].appendChild(document.createTextNode(row.title));
        tr.cells[2].appendChild(document.createTextNode(row.body));

        table.appendChild(tr);
    }
    document.querySelector("body").appendChild(table);
}

createUsersTable();
getPostFromUser(1);


