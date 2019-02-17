// const SEARCH_GIT_USERS_URL = 'https://api.github.com/search/users?q=tom';
// var searchUser = function() {
//     fetch(SEARCH_GIT_USERS_URL, {
//         method: "GET",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         type: "cors"
//     }).then(function (response) {
//         if (response.ok) {
//             return response.json();
//         } else {
//             throw new Error("Could not reach the API: " + response.statusText);
//         }
//     }).then(function (data) {
//         // document.getElementById("encoded").innerHTML = data.encoded;
//         console.log(data);
//     }).catch(function (error) {
//         // document.getElementById("error").innerHTML = error.message;
//         alert('error');
//     });
// };

// searchUser();

var getUser = function (username) {
    // Hàm api.getUser() trả về một promise object
    return new Promise((resolve, reject) => {
        // Gửi AJAX request
        http.get(`https://api.github.com/search/users?q=${username}`, (err, result) => {

            // Nếu có lỗi bên trong callback, chúng ta gọi đến hàm `reject()`
            if (err) return reject(err)

            // Ngược lại, dùng `resolve()` để trả dữ liệu về cho `.then()`
            resolve(result)

        })
    })
}

getUser('tom');