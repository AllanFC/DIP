//Declarations
let divPersonTable = document.querySelector("#addedPersons");

//Functions
export function createTable(list){
    let table = document.createElement("table");
    table.id = "personTable";
    let thead = document.createElement("thead");
    thead.id = "thPerson";
    table.appendChild(thead);
    let tbody = document.createElement("tbody");
    tbody.id = "tbPerson";
    table.appendChild(tbody);
    
    let theadRow = document.createElement("tr");
    theadRow.style.textAlign="center";
    thead.appendChild(theadRow);

    for (const e in list[0]) {
        let td = document.createElement("td");
        theadRow.appendChild(td);
        td.innerHTML= e;
    }

    table.style.border="2px solid blue";
    table.style.borderCollapse="collapse";
    divPersonTable.innerHTML = table.outerHTML;
}

export function updateTable(list) {
    let tbody = document.querySelector("#tbPerson");
    tbody.insertRow();
    let tr = document.createElement("tr");
    let number = list.length-1;
    tr.id = number;
    tbody.appendChild(tr);
    for (const [k,v] of Object.entries(list[number])) {
        let td = document.createElement("td");
        td.id = k + number;
        tr.appendChild(td);
        td.innerHTML= v;
        td.style.border="2px solid blue"
    }
}


