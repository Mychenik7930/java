const existedUserLogin = "the_best_user"
const existedUserPassword = "12345678"
const login = prompt("введите логин")
const password = prompt("введите пароль")
if (login === existedUserLogin, password === existedUserPassword){
    alert(`добро пожаловать ${existedUserLogin}`)
}
else {
    alert("неправильный лог или пароль")
}