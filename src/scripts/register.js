function singUp () {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value

    const user = {
        username: username,
        password: password,
        role:  role
    }

    if(localStorage.getItem(username)) {
        alert("Ten użytkownik jest już zarejestrowany")
    } else {
        localStorage.setItem(username, JSON.stringify(user))
    }
}
function singUp () {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const role = document.getElementById("role").value

    const user = {
        username: username,
        password: password,
        role:  role
    }

    if(localStorage.getItem(username)) {
        alert("Ten użytkownik jest już zarejestrowany")
    } else {
        localStorage.setItem(username, JSON.stringify(user))
    }
}
