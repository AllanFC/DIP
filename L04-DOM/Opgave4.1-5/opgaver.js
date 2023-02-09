for (const p of document.querySelectorAll("p")) {
    p.style.color="Red";
}

let h1All = document.querySelectorAll("h1")
for (const h of h1All) {
    h.nextElementSibling.nextElementSibling.style.color="Brown";
}

for (let p of document.querySelectorAll('li:nth-child(odd)')) {
    p.style.backgroundColor='lightgrey';
}

for (const h of h1All) {
    h.nextElementSibling.outerHTML = "<h2>" + h.nextElementSibling.innerHTML + "</h2>";
}

let counter = 0;
for (const h of h1All) {
    h.outerHTML = "<h1 id=overskrift" + counter + ">" + h.innerHTML + "</h1>";
    counter++;
}

let menu = document.createElement("table");
let row = document.createElement("tr");
let data1 = document.createElement("td");
row.appendChild(data1);
data1.outerHTML = "<td><a href=#overskrift0>" + "Overskrift 1 </a></td>";
let data2 = document.createElement("td");
row.appendChild(data2);
data2.outerHTML = "<td><a href=#overskrift1>" + "Overskrift 2 </a></td>";
let data3 = document.createElement("td");
row.appendChild(data3);
data3.outerHTML = "<td><a href=#overskrift2>" + "Overskrift 3 </a></td>"; 

menu.append(row);
document.body.prepend(menu);