const messagesURL = 'https://beskedserver.azurewebsites.net/api/Beskeder/';
const searchMessagesURL = 'https://beskedserver.azurewebsites.net/api/SoegBeskeder/';
const roomURL = 'https://beskedserver.azurewebsites.net/api/chatRum/';


async function get(URL){
    try{
        let result = await fetch(URL).then(respons => {
            if(respons.status >= 400){
                throw new Error(respons.status);
            } else {
                return respons.json();
            }
        })
        console.log(result);
        return result;
    } catch(error){
        console.log(error);
    }
}

async function post(URL, data){
    const respons = await fetch(URL, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })
    if(respons.status >= 400){
        throw new Error(respons.status);
    }
    searchMessages(data.chatRum);
}

async function remove(id, room){
    const respons = await fetch(messagesURL + id, {
        method: 'DELETE'
    })
    if(respons.status !== 204){
        throw new Error(respons.status);
    }
    searchMessages(room);
}

async function searchMessages(room){
    let messages;
    try{
        messages = await get(searchMessagesURL + room);
        await showMessages(messages, room);
    }catch(error){
        console.log(error);
    }
    return messages;
}

async function createMessage(){
    let text = document.querySelector("#textMessage").value;
    let room = document.querySelector("#roomid").value;

    let message = {tekst: text, chatRum: room};
    room.value = "";
    await post(messagesURL, message);

}

async function showRooms(){
    let rooms;
    try{
        rooms = await get(roomURL);
    }catch(error){
        console.log(error);
    }
    
    let roomdiv = document.querySelector("#rooms");
    let roomSelector = document.querySelector("#roomid");
    for(let room of rooms){
        let btn = document.createElement("button");
        btn.innerHTML = room.navn;
        btn.onclick = () => {
            roomSelector.value = room.navn;
            searchMessages(room.navn);
        }
        roomdiv.appendChild(btn);
    }
}

async function showMessages(messages, room){
    if(document.querySelector("#messageTable") !== null){
        document.querySelector("#messageTable").remove();
    }
    let messagesdiv = document.querySelector("#messages");
    let messageTable = document.createElement("table");
    messageTable.id = "messageTable";
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");

    for(let k of Object.keys(messages[0])){
        let td = document.createElement("td");
        td.appendChild(document.createTextNode(k));
        theadRow.appendChild(td);
    }
    thead.appendChild(theadRow);
    messageTable.appendChild(thead);

    let tbody = document.createElement("tbody");

    for(let message of messages){
        let tr = document.createElement("tr");
        let cell = 0;
        for(let k of Object.keys(message)){
            tr.appendChild(document.createElement("td"));
            tr.cells[cell].appendChild(document.createTextNode(message[k]));
            cell++;
            if(cell == Object.keys(message).length){
                tr.appendChild(document.createElement('td'));
                let deleteLink = document.createElement('a');
                deleteLink.innerHTML = 'Slet';
                deleteLink.setAttribute('onclick', 'remove("' + message["id"] + '","' + room + '" );return false;');
                deleteLink.setAttribute('href', '');
                tr.cells[cell].appendChild(deleteLink);
            }
        }
    
        tbody.appendChild(tr);
    }
    messageTable.appendChild(tbody);
    document.querySelector("#messages").appendChild(messageTable);
}

showRooms();
searchMessages("Startrum")