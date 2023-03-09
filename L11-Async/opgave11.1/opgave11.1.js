const userUrl = 'https://jsonplaceholder.typicode.com/users';
// const userUrl = 'https://jsonplaceholder.typicode.com/users/11';
// const userUrl = 'httpz://jsonplaceholder.typicode.com/users';
// async function get(url) {
//     const respons = await fetch(url);
//     if (respons.status !== 200) // OK
//         throw new Error(respons.status);
//     return await respons.json();
// }

// get(userUrl).then((result) => {
//     console.log(result);
// })

function get(url) {
    return new Promise(function (resolve, reject) {
        fetch(url)
          .then(function (response) {
                if (response.status!== 200) // OK
                    throw new Error(response.status);
                return response.json();
            })
          .then(function (data) {
                resolve(data);
            })
          .catch(function (error) {
                reject(error);
            });
    });
}


get(userUrl).then((result) => {
    console.log(result);
})
