let h1 = document.querySelector("#h1")
let h2 = document.querySelector("#h2")
let h3 = document.querySelector("#h3")

let tab1 = document.querySelector("#tab1")
tab1.onclick = () => hideOtherElements(h1);
let tab2 = document.querySelector("#tab2")
tab2.onclick = () => hideOtherElements(h2);
let tab3 = document.querySelector("#tab3")
tab3.onclick = () => hideOtherElements(h3);

function hideOtherElements(element) {
    let h = document.querySelectorAll("h1");
    for (const e of h) {
        e.style.display = e !== element ? "none": "flex"
    }
}

hideOtherElements(h1);
