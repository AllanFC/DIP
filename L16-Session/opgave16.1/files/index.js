const name = document.querySelector('#name');
const password = document.querySelector('#password');
const login = document.querySelector('#login');
const error = document.querySelector('#error');


async function post(url, objekt) {
    const respons = await fetch(url, {
        method: "POST",
        body: JSON.stringify(objekt),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (respons.status !== 201) // Created
        throw new Error(respons.status);
    return await respons.text();
}

login.onclick = async () => {
    try {
        await post("http://localhost:8181/login", { name: name.value, password: password.value });
        window.location.href = "http://localhost:8181/shop";
    } catch (e) {
        password.value = "";
        error.innerHTML = "Wrong password or name is empty";
    }
}