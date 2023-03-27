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
    let earthquakes = [];
    await respons.json().then((data) => {
        for (let features of data.features){
            earthquake = {}
            earthquake.place = features.properties.place;
            earthquake.time = features.properties.time;
            earthquake.mag = features.properties.mag;
            earthquakes.push(earthquake);
        }
    });
    return earthquakes;
}

// create a table from json data

async function createEarthquakeTable(url){
    let table = document.createElement('table');
    table.id = 'earthquakeTable';
    thead = table.createTHead();
    thead.appendChild(document.createElement('tr'));
    tbody = table.createTBody();
    
    get(url).then((data) => {
        let list = data.filter(data => data.mag >= 5.0);
        list.sort((a, b) => b.mag - a.mag);
        for (let features of list) {
            let tr = document.createElement('tr');
            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
            tr.appendChild(document.createElement('td'));
    
            tr.cells[0].appendChild(document.createTextNode(features.place));
            tr.cells[1].appendChild(document.createTextNode(features.time));
            tr.cells[2].appendChild(document.createTextNode(features.mag));
            table.appendChild(tr);
        }
    });
    document.querySelector("body").appendChild(table);
}

createEarthquakeTable(earthquakeUrl);
