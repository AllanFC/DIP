let tal = document.querySelector("#tal");
let tid = document.querySelector("#tid");

let lblTal = document.createElement("label");
lblTal.innerHTML = "Tal:";
lblTal.onclick = () => tal.value = Math.floor(Math.random()*100);
tal.before(lblTal);

let lblTid = document.createElement("label");
lblTid.innerHTML = "Tid:";

lblTid.onclick = () => tid.value = currentTime();
tid.before(lblTid);

function currentTime() {
    const date = new Date();
    return date.toLocaleTimeString();
}

let ryd = document.querySelector("button");
ryd.onclick = () => {
    tal.value = "";
    tid.value = "";
}