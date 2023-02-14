const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

function createTable(){
    let list = MOUNTAINS;
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    table.appendChild(thead);
    table.appendChild(tbody);
    
    let theadRow = document.createElement("tr");
    theadRow.style.textAlign="center"
    thead.appendChild(theadRow);


    for (const e in list[0]) {
        let td = document.createElement("td");
        theadRow.appendChild(td);
        td.innerHTML= e;
    }

    for (const entry in list) {
        let tr = document.createElement("tr");
        tbody.appendChild(tr);
        for (const [k,v] of Object.entries(list[entry])) {
            let td = document.createElement("td");
            tr.appendChild(td);
            td.innerHTML= v;
            td.style.border="2px solid blue"
        }
    }
    table.style.border="2px solid blue"
    table.style.borderCollapse="collapse"
    document.querySelector('h1').after(table)
}
createTable();