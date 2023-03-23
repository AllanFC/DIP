// opgave12.1.js
const earthquakeUrl = // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php 
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson';


// async function get(url) {
//     const respons = await fetch(url);
//     if (respons.status !== 200) // OK
//         throw new Error(respons.status);
//     return await respons.json(); 
// }

// get json data from url and create an js object

async function get(url) {
    const respons = await fetch(url);
    if (respons.status!== 200) // OK
        throw new Error(respons.status);
    return await respons.json(); 
}

// create a table from json data

async function createEarthquakeTable(url){
    const respons = await fetch(url);
    if (respons.status !== 200) // OK
        throw new Error(respons.status);
    let data = await respons.json();

    let table = document.createElement('table');
    table.id = 'earthquakeTable';
    
    for(let row of data){
        let tr = document.createElement('tr');
        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));
        tr.appendChild(document.createElement('td'));

        tr.cells[0].appendChild(document.createTextNode(row.place));
        tr.cells[1].appendChild(document.createTextNode(row.time));
        tr.cells[2].appendChild(document.createTextNode(row.mag));

    }
    document.querySelector("body").appendChild(table);
}

createEarthquakeTable(earthquakeUrl);

